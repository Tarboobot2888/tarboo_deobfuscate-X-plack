// lib/openai.ts
import axios from "axios";

// مفتاح OpenAI مباشر
const OPENAI_API_KEY = process.env.OPENAI_API_KEY;
if (!OPENAI_API_KEY) { throw new Error("OPENAI_API_KEY is not defined in environment variables"); }

export async function deobfuscateWithOpenAI(code: string): Promise<string> {
  const prompt = `
فك شفرة هذا الكود المشفر بجافاسكريبت node.js، وأعد كتابته بشكل واضح ومنسق:

${code}

أعد كتابة الكود المفكوك فقط بدون شرح.
  `;

  try {
    const response = await axios.post(
      "https://api.openai.com/v1/chat/completions",
      {
        model: "gpt-4o-mini",
        messages: [{ role: "user", content: prompt }],
        temperature: 0,
        max_tokens: 2000,
      },
      {
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${OPENAI_API_KEY}`,
        },
      }
    );

    return response.data.choices[0].message.content || "لم يتم فك التشفير.";
  } catch (error: any) {
    return "حدث خطأ أثناء استخدام OpenAI: " + (error.message || "غير معروف");
  }
}
