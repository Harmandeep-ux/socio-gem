// import { GoogleGenAI } from "@google/genai";
// import dotenv from "dotenv";
// dotenv.config()

// const ai = new GoogleGenAI({
//   apiKey: process.env.GEMINI_API_KEY,     // Your Gemini API key (if 
// });

// export const  main = async(prmpt) => {
//   try {
//     const response = await ai.models.generateContent({
//       model: "gemini-2.5-flash", 
//       contents: [
//   {
//     role: "user",
//     parts: [{ text: prmpt }]
//   }
// ],
//       config: {
//       thinkingConfig: {
//         thinkingBudget: 0, // Disables thinking
//       },
//     }
//     });

//     const text = response.candidates?.[0]?.content?.parts?.[0]?.text;

//     if (!text) throw new Error("Gemini did not return any text");
//     console.log("Generated Content:", text);
//     return text;

    
//     console.log("Generated Content:", response.text);
//   } catch (error) {
//     console.error("Error generating content:", error);
//   }
// }

export const main = async (prmpt) => {
  try {
    const response = await ai.models.generateContent({
      model: "gemini-2.5-flash",
      contents: [
        {
          role: "user",
          parts: [{ text: prmpt }],
        },
      ],
      config: {
        thinkingConfig: {
          thinkingBudget: 0,
        },
      },
    });

    const text = response.candidates?.[0]?.content?.parts?.[0]?.text;

    if (!text) throw new Error("Gemini did not return any text");

    console.log("✅ Generated Content:", text);
    return text;
  } catch (error) {
    console.error("❌ Error generating content:", error);
    throw error; // ✅ ADD THIS
  }
};
