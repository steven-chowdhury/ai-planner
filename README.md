# AI Daily Planner

A responsive web application built with Next.js App Router, TypeScript, Redux Toolkit, and the OpenAI API that helps users plan out their day with an optimized, AI-generated schedule.

Created by Steven Chowdhury.

## Features

- Input your top tasks for the day
- Generates a smart, time-based schedule using OpenAI's GPT model
- Mobile-friendly, responsive design
- Styled using CSS Modules
- Displays loading spinner and styled error messages

## Tech Stack

- Next.js (App Router)
- React
- TypeScript
- Redux Toolkit
- OpenAI API
- CSS Modules

## Requirements

- Node.js v18+
- A valid OpenAI API Key

## Setup Instructions

```bash
1. Clone the repository
   git clone https://github.com/steven-chowdhury/ai-planner.git
   cd ai-planner

2. Install dependencies
   npm install

3. Add your OpenAI API key
   # Create a .env.local file in the root of the project and add:
   echo "OPENAI_API_KEY=your_openai_api_key_here" > .env.local

4. Run the development server
   npm run dev

5. Open the app in your browser
   http://localhost:3000
