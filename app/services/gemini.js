import axios from "axios";
import { GEMINI_API_KEY } from "@env";

const GEMINI_API_URL = `https://generativelanguage.googleapis.com/v1beta/models/gemini-2.0-flash:generateContent?key=${GEMINI_API_KEY}`;

export async function generatePepTalk(name, age, position) {
  const prompt = `Write a short motivational pre-game pep talk for a ${age}-year-old ${position} named ${name}.`;

  try {
    const response = await axios.post(
      GEMINI_API_URL,
      {
        contents: [
          {
            parts: [
              {
                text: prompt,
              },
            ],
          },
        ],
      },
      {
        headers: {
          "Content-Type": "application/json",
        },
      }
    );

    const output =
      response.data?.candidates?.[0]?.content?.parts?.[0]?.text ||
      "Sorry, no pep talk generated.";

    return output.trim();
  } catch (error) {
    console.error("Gemini API error:", error);
    return "Error generating pep talk. Please try again.";
  }
}
