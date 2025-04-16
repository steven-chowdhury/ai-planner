import { NextResponse } from "next/server";
import OpenAI from "openai";

const openai = new OpenAI({ apiKey: process.env.OPENAI_API_KEY! });

export async function POST(req: Request) {
  const { tasks } = await req.json();

  const prompt = `Help me plan out my day. Here are the things I want to accomplish today: ${tasks.join(", ")}. Give me a fun, optimized schedule that includes timing, priority, and reasoning.`;

  const chat = await openai.chat.completions.create({
    model: "gpt-4",
    messages: [{ role: "user", content: prompt }],
  });

  const plan = chat.choices[0]?.message?.content?.trim() || "No response.";
  return NextResponse.json({ plan });
}