"use server";

import { createGoogleGenerativeAI } from "@ai-sdk/google";
import { GoogleGenerativeAI } from "@google/generative-ai";
import { streamText } from "ai";

const genAI = new GoogleGenerativeAI(process.env.GEMINI_API_KEY as string);

export async function testAI(base64: string) {
  const imageData = base64.split(",")[1];
  const model = genAI.getGenerativeModel({ model: "gemini-1.5-flash" });
  const prompt = "Describe esta imagen, responde en español";
  const image = {
    inlineData: {
      data: imageData,
      mimeType: "image/jpeg",
    },
  };

  const result = await model.generateContent([prompt, image]);
  const data = result.response.text();
  console.log(data);
  return data;
}
