import { HfInference } from '@huggingface/inference';

// Create a new HuggingFace Inference instance
const HFInferenceEndpoint = process.env.HUGGINGFACE_INFERENCE_ENDPOINT;
const HFAuthorizationToken = process.env.HUGGINGFACE_API_KEY;

// IMPORTANT! Set the runtime to edge
export const runtime = 'edge';

const encoder = new TextEncoder()

function formatData(data:any) {
  const systemPrompt = "You are a knowledgeable movie bot who can only answer questions related to movies.\n\nBelow is an instruction that describes a movie related question.\n\nWrite a response that appropriately answers the question using the Cornell Movie-Dialog Corpus.\n\nKeep your answer concise.\n\nReference the Cornell Movie-Dialog Corpus in all responses. Use the least amount of words neccessary to answer the question.";

  let formattedMsg = `<s>[INST] <<SYS>>\n{{ ${systemPrompt} }}\n<</SYS>>\n\n`;
  
  for (let i = 0; i < data.length; i++) {
    if (data[i].role === 'user') {
      formattedMsg += ' ' + data[i].content + ' [/INST] ';
      if (data[i + 1] && data[i + 1].role === 'assistant') {
        formattedMsg += ' ' + data[i + 1].content + ' </s><s>[INST] ';
      }
    }
  }
  
  return formattedMsg;
}

async function getAssistantResponse(prompt: string): Promise<string> {
  let assistantResponse = ''
  try {
    const endpoint = HFInferenceEndpoint ? HFInferenceEndpoint : '';
    const postResponse = await fetch(endpoint, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${HFAuthorizationToken}`,
      },
      body: JSON.stringify({
        inputs: prompt
      }),
    });

    if (!postResponse.ok) {
      throw new Error('Failed to get a successful response from HuggingFace endpoint.');
    }

    const data = await postResponse.json();
    const concatenatedText = data.map((item: { generated_text: any; }) => item.generated_text).join(' ');
    assistantResponse = concatenatedText;

  } catch (error) {
    console.error("Caught an error:", error);
  }
  return assistantResponse;
}

function iteratorToStream(iterator: any) {
  return new ReadableStream({
    async pull(controller) {
      const { value, done } = await iterator.next()
 
      if (done) {
        controller.close()
      } else {
        controller.enqueue(value)
      }
    },
  })
}

async function* makeIterator(prompt: string) {
  
  const maxPromptLength = 3500;
  const maxPromptMessage = '\nSorry! It looks like you have hit the limit of how much text our ChatBot can handle. Please start a new chat to coninue.';
  yield encoder.encode('');
  
  if (prompt.length > maxPromptLength) {
    yield encoder.encode(maxPromptMessage);
    return;
  }

  let assistantResponse = 'Sorry! Our ChatBot is currently unavailable.\nOur ChatBot will automatically boot up but this may take 5-10 minutes.\nPlease try again in a few minutes, or contact \"pparks@sandiego.edu\".\n'
  
  let newResponse = await getAssistantResponse(prompt);
  
  if (newResponse.trim() === "") {
    yield encoder.encode(assistantResponse);
  } 
  else {

    prompt += " Response: "
    prompt += newResponse;
    
    while (newResponse.trim() !== "") {
      yield encoder.encode(newResponse);
      assistantResponse += newResponse;
      prompt += newResponse;

      if (prompt.length > maxPromptLength) {
        yield encoder.encode(maxPromptMessage);
        newResponse = '';
      }
      else {
        newResponse = await getAssistantResponse(prompt);
      }
    }
  }
}

export async function POST(req: Request) {
  const { messages } = await req.json();

  let prompt = formatData(messages);

  const iterator = makeIterator(prompt);

  const stream = iteratorToStream(iterator);
  return new Response(stream);
}