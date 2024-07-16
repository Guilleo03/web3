"use server";

import { createGoogleGenerativeAI } from "@ai-sdk/google";
import { generateText } from "ai";

const google = createGoogleGenerativeAI({
  apiKey: process.env.GEMINI_API_KEY,
});

const prompt = process.env.SECRET_PROMPT as string;

export async function readImage(base64: string) {
  try {
    const imageData = base64.split(",")[1];

    const { text } = await generateText({
      model: google("models/gemini-1.5-pro-latest"),
      messages: [
        {
          role: "user",
          content: [
            { type: "text", text: prompt },
            { type: "image", image: imageData, mimeType: "image/jpeg" },
          ],
        },
      ],
    });

    return text.toString();
  } catch (e) {
    throw new Error("Error al consultar imagen.");
  }
}
