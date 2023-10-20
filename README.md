# AAI-520 Fall 2023 Group 6
AAI 520 Final ChatBot Project  
Group 6  
Members: Paul Parks, Alden Caterio, Adam Graves  
Due Date: 10/23/2023  

Demo Chat WebApp:  
https://msaai-520-final-project-web-app.vercel.app/

Fine-tuned model:  
https://huggingface.co/guitarnoob/msaai520_with_HF_format_v1

## Project Overview:
### Goal:
 Design and build a chatbot that can carry out multi-turn conversations, adapt to context, and handle a variety of topics.
### Output: 
A web or app interface where users can converse with the chatbot.
# Architecture
<img src="./Images/Architecture.png" alt="plot" width="600"/>

# How to fine tune the LLM
1. `AAI520_Final_Group_Train_Generation.ipynb` is used to generate the training dataset that is stored in Train.csv
2. After creating the Train.csv, `AAI520_Final_Group_AutoTrain_LLM.ipynb` is used to fine tune the Meta LLaMA LLM using the training questions. 
3. Finally, the fine tuned LLM can be ran using `AAI520_Final_Group_Inference.ipynb`
# How to run WebApp
The Next.js webapp is located in `./MSAAI-520-FinalProject-WebApp`

This is a modified version of the Vercel AI Chatbot application: https://github.com/vercel-labs/ai-chatbot

```bash
pnpm install
pnpm dev
```

The WebApp is available for use: 
https://msaai-520-final-project-web-app.vercel.app/

Note: The LLM is ran using Huggingface Inference Endpoint and may be turned off to not incur any costs. If you would like a demo reach out to pparks@sandiego.edu

# meeting #1: 9/20/2023 @ 4:00 PM
Agenda:
• Introductions
• Select the data corpus: **Selected the Movie corpus**
• Brainstorm UI and functions
• Allocate who does what as a guideline (Resource allocation)
• Start a schedule - timelines
• Schedule the next task and schedule (What are we doing next, Who is doing what, Who is testing, date for completion)(Scrum/Sprint style)
• Next call: **9/26/2023 @ 5:00 PM**
# meeting #2: 9/26/2023 @ 5:00 PM
Agenda:
• Review the Strategy
• Discuss the theme of the Chatbot
• Discuss if we can or should use pre-trained models
• Discuss how the input is dealt with
• Discuss how the output should or can be
• Assign tasks: Paul: Find out on the pre-trained data, review building the web chatbot GUI, Adam: Update documentation, research ETL and normalization, Alden: Prepare more info on the Chatbot output options
• Next call: **9/29/2023 @ 3:00 PM**
# meeting #3: 10/02/2023 @ 12:15 PM
Agenda:
- Go over the data load
- Discuss the hi level operational flow
- Discuss current obstacles
- Discuss option and what R&D anyone in the team has done
- Decide on next steps**
-   Steps:
-   1. Get list of questions we to train
    Potitive case
        - What year was movie X released?
        - What was the rating of movie X released?
    Negative cases
        - What is your favorite food?
            - Response: I am a movie bot and cannot comment on food
2. Write code to create the train csv with the question
3. Train with autotrain
4. Run fine tuned model
Optional:
5. Running the fine tuned model
- Host on server with GPU
- One potential solution: running on huggingface
- Adam and Alden to provide Paul with bot related questions that Paul will use to build a csv file from the movie df we created and make this the file to train the LLM, Due 10/3/23
# 10/4/2023 # Progress on pre-trained testing
- Paul has loaded a version of hugging face and test a chatbot operation on a pre-trained model
- Adam and Alden prepared a large movie (formatted) dataset to load onto the pre-trained model to train it with our specific movie data
-     Question and Answers were prepared on:
-         # What year was the movie {} released in? - add year just in case
          # what is the rating on the movie {}?
          # what is the genres on the movie {}?
          # how many votes did the movie {} receive?
          # who are the characters in the movie {}?
          # what gender is the character {} in the movie {}?
          # do you have the full script for the movie {}? (Gives the url link)
          # what are some line that {} said in the movie {}?
- Testing and reults due 10/5/2023
- Obstacles: the Accelerator gives problems on Coloab
- GitHub updated with all file
# meeting #4: 10/06/2023 @ 05:00 PM
Agenda:
- Paul presented the pre-trained work done with Hugging Face
- Adam and Alden presented the question and answer data file produced
- Discussion on how the pre-trained model is updated with our Q&A data file
- Paul discussion on the Chabot front-end options
# meeting #5: 10/12/2023 @ 05:00 PM
Agenda:
- What is our code? How does it flow and function
- Who is going to put the entire code together
- How or can we see a real demo yet
- Front end GUI
- Start discussion of final steps including presentation
- Paul showed the Chatbot front-end: looked great
- Alden to start the presentation slides
- Adam to organize the documentation and the code for presentation
  # Progress of project: as of 10/16/2023
  project management:
  ![image](https://github.com/agraves13/AAI520/assets/139398917/72e0e051-f338-4afe-8625-7ce9b74ae358)
  - Presentation: most slides are done, and the presentation flow is 80% complete
  - Code is %100 complete and is in the testing phase: Alden, Adam
  # meeting #6: 10/16/2023 @ 05:00 PM
Agenda:
- Finishing up the code
- What code is to be submitted: organize in GitHub and produce PDF files
- How does each do their video presentation, select slides:Adam: slides 1-4 discussing the intro and going into the Retrieval Based info, Alden: Alden can take over the slides 5-7 discussing the evolution into the Generative model, discussing our model, our approach, the rationale behind it, the challenges, and Paul: Paul discussing the rest of the slides along with the HF architecture with the LLM, the code and the demonstration
- Final submition action
# 10/19/2023: Progress Report
- Video presentations have been completed; now reviewing and fine tuning
- Updated slides
- Updated final documentation
- 90% completion on all required material for project submition
- Update all tasks on Trello project management
# 10/20/2023: Progress Report
- Completed the load of the video presentation to Youtube
- Completed the Project Documentation, going into team review (final review)
- Completed the organization of all files to be submitted
- Verified all links: GitHub, Youtube, Google
- project Management status:
  ![image](https://github.com/agraves13/AAI520/assets/139398917/06705efb-67be-4e44-9068-c99544a3635c)




