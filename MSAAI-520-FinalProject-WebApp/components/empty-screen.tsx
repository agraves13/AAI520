import { UseChatHelpers } from 'ai/react'

import { Button } from '@/components/ui/button'
import { ExternalLink } from '@/components/external-link'
import { IconArrowRight } from '@/components/ui/icons'

const exampleMessages = [
  {
    heading: 'Ask about movie releases',
    message: `What movies released in 1985?`
  },
  {
    heading: 'Ask about actors',
    message: 'What actors starred in the movie 15 minutes?'
  },
  {
    heading: 'Ask about genres',
    message: `What genre is the movie 15 minutes?`
  }
]

export function EmptyScreen({ setInput }: Pick<UseChatHelpers, 'setInput'>) {
  return (
    <div className="mx-auto max-w-2xl px-4">
      <div className="rounded-lg border bg-background p-8">
        <h1 className="mb-2 text-lg font-semibold">
          Welcome to USD MS-AAI 520 / Fall 2023 / Group 6 / AI Chatbot!
        </h1>
        <p className="mb-2 leading-normal text-muted-foreground">
          <ul>
              <li className="mr-2 text-muted-foreground">Paul Parks (pparks@sandiego.edu)</li>
              <li className="mr-2 text-muted-foreground">Adam Graves (agraves@sandiego.edu)</li>
              <li className="mr-2 text-muted-foreground">Alden Caterio (acaterio@sandiego.edu)</li>
          </ul>
        </p>
        <br/>
        <p className="mb-2 leading-normal text-muted-foreground">
          This chatbot uses a fine tuned Meta Llama model to answer your Movie related questions. 
          This LLM has been fine tuned using the Cornell Movie Dialog Corpus.
        </p>
        <p className="leading-normal text-muted-foreground">
          You can start a conversation here or try the following examples:
        </p>
        <div className="mt-4 flex flex-col items-start space-y-2">
          {exampleMessages.map((message, index) => (
            <Button
              key={index}
              variant="link"
              className="h-auto p-0 text-base"
              onClick={() => setInput(message.message)}
            >
              <IconArrowRight className="mr-2 text-muted-foreground" />
              {message.heading}
            </Button>
          ))}
        </div>
      </div>
    </div>
  )
}
