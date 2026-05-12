import { NextResponse } from "next/server";
import Groq from "groq-sdk";

export async function POST(req: Request) {
  try {
    // Read topic from request body
    const { topic } = await req.json();

    // Validate topic
    if (!topic || typeof topic !== "string" || !topic.trim()) {
      return NextResponse.json(
        {
          error: "Please provide a valid topic.",
        },
        { status: 400 }
      );
    }

    // Get Groq API key from environment variables
    const apiKey = process.env.GROQ_API_KEY;

    if (!apiKey) {
      return NextResponse.json(
        {
          error: "Groq API key not found in .env.local",
        },
        { status: 500 }
      );
    }

    // Initialize Groq client
    const groq = new Groq({
      apiKey,
    });

    // Create prompt
    const prompt = `
Create an engaging and professional LinkedIn-style social media post about "${topic}".

Requirements:
- Professional and informative tone
- Include relevant emojis
- Include 3 to 5 bullet points when appropriate
- End with relevant hashtags
- Maximum 250 words
- Make the content suitable for LinkedIn and other professional platforms
`;

    // Generate content using Groq
    const completion = await groq.chat.completions.create({
      model: "llama-3.3-70b-versatile",
      messages: [
        {
          role: "system",
          content:
            "You are an expert social media content writer who creates polished, engaging, and professional posts.",
        },
        {
          role: "user",
          content: prompt,
        },
      ],
      temperature: 0.7,
      max_tokens: 500,
    });

    // Extract generated content
    const content =
      completion.choices[0]?.message?.content?.trim() ||
      "No content generated.";

    // Return response
    return NextResponse.json({
      content,
    });
  } catch (error: unknown) {
    console.error("Groq API Error:", error);

    return NextResponse.json(
      {
        error: "Failed to generate content.",
        details:
          error instanceof Error ? error.message : "Unknown error occurred.",
      },
      { status: 500 }
    );
  }
}