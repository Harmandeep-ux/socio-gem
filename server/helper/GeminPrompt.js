export const promptFunction = async ({ product, audience, tone, platform }) => {
  return `You are a professional social media content strategist.

Generate 5 creative, engaging, and platform-specific social media post ideas for a marketing campaign.

Details:
Product/Event: ${product}
Target Audience: ${audience}
Tone of Voice: ${tone}
Platform: ${platform}

Each post should:
- Match the platform's typical style and audience
- Use relevant hashtags if needed
- Be short, punchy, and highly engaging
- Include emojis if appropriate for the tone
- Have a clear call-to-action or emotional hook

Format each post separately with proper line breaks between them.`;
};


export const generateEmailPrompt = async({emailType,product,recipient,tone}) =>{
   return `
You are a conversion-optimized email copywriting expert with 10+ years of experience. 
Create a high-performing ${emailType.toLowerCase()} email for ${recipient} about ${product}.

### Core Requirements:
1. **Structure**
   - Subject line (3 compelling options)
   - Preheader text (45-60 characters)
   - Personalized greeting
   - Value-driven body (max 3 paragraphs)
   - Strategic call-to-action
   - Professional signature

2. **Tone Execution**
   - Primary: ${tone.toLowerCase()} 
   - Secondary: ${tone === 'Professional' ? 'approachable authority' : 'subtle professionalism'}

3. **Conversion Elements**
   - Include one psychological trigger (curiosity/urgency/social proof)
   - Address one silent objection naturally
   - Use benefit-focused language (not just features)

4. **Technical Specs**
   - Mobile-friendly line breaks (<60 characters)
   - 2 strategic bold phrases for skimmers
   - Avoid spam trigger words

### Output Format:
<subject_options>
1. [Option 1: curiosity hook]
2. [Option 2: benefit-driven]
3. [Option 3: urgency/scarcity]

<email_copy>
[Perfectly structured email ready for deployment]

Note: Do NOT include explanations or notes - only the final email content.`;
}

export const reelPrompt = ({ product, platform, tone, goal, duration, languageNote }) => {
  return `🎬 You are a creative short-form video script writer.

Write a complete script for a social media reel based on the following information:

- **Product/Event:** ${product}
- **Platform:** ${platform}
- **Tone:** ${tone}
- **Goal:** ${goal}
- **Duration:** ${duration} seconds
- **Language style/Notes:** ${languageNote}

💡 The script should:
- Include character dialogues (if needed)
- Use relevant language (e.g., mix Hindi, Punjabi, Gen-Z slang)
- Be short, punchy, and engaging
- Hook the viewer in the first 3 seconds
- Match the tone and platform style
- End with a strong CTA or impactful message

Please output only the script in markdown format. No explanation.`;
};

export const tonePrompt = ({ inputText, targetTone }) => {
  return `You are a professional tone and voice specialist.

Your task is to rewrite the following content in a **${targetTone}** tone without changing the original meaning.

---
Original:
${inputText}
---

New version (in ${targetTone} tone):`;
};

export const hashtagPrompt = ({ topic, platform, audience, tone, type }) => {
  return `You are a top-tier social media strategist.

Generate a list of high-performing hashtags for the following context:

- Platform: ${platform}
- Topic/Product: ${topic}
- Audience: ${audience || "general social media users"}
- Tone/Style: ${tone || "natural"}
- Hashtag Type: ${type} (e.g., Niche, Trending, or Mixed)

📌 Requirements:
- Return 15–20 hashtags only (no explanations)
- Avoid banned or shadowbanned hashtags
- Use a mix of popular + niche + long-tail tags if "Mixed" is selected
- Prefix with "#" and keep lowercase
- Group by relevance if helpful
- Use line breaks or bullet points for easy display

Output Example:
#veganfood #plantbasedrecipes #vegansofig #healthymeals`;
};

// helper/GeminiPrompt.js
export const contentCalendarPrompt = ({ platform, goal, duration, product, tone, audience }) => {
  return `
You are a professional social media strategist with experience in high-converting content campaigns.

Create a ${duration}-day content calendar for ${platform} focused on promoting: ${product}

Details:
- Goal: ${goal}
- Tone: ${tone}
- Target Audience: ${audience}

Output Format:
Day X:
• Post Type: (Reel / Story / Carousel / Text)
• Hook: (attention-grabbing first line)
• Content Idea: (what should be shown or said)
• CTA: (call to action)
• Hashtags: (if platform allows)

Make each post idea unique, goal-driven, and suitable for the platform’s best practices.
Return only the formatted calendar – no explanations.`;
};

export const generateBlogPrompt = ({ topic, audience, tone, keywords, length }) => {
  return `📝 You are a professional SEO blog writer with expertise in crafting high-quality, engaging content.

Write a ${length?.toLowerCase() || 'medium'}-length blog post based on the following:

- **Topic:** ${topic}
- **Target Audience:** ${audience}
- **Tone of Voice:** ${tone}
- **Focus Keywords:** ${keywords}

✍️ Guidelines:
- Hook the reader with a compelling introduction
- Divide content into 3–5 logical sections with clear headings
- Include helpful tips, stats, or examples where relevant
- Use simple, clear, and SEO-friendly language
- End with a strong summary or call to action

📌 Output should be formatted in markdown and should not include explanations or notes.`;
};

// helper/GeminPrompt.js
export const seoPrompt = ({ content, topic, audience }) => {
  return `
You are an expert SEO strategist.

Analyze the following content and provide SEO optimization suggestions.

### Content:
${content}

### If provided, consider:
- Topic: ${topic || "Not specified"}
- Target Audience: ${audience || "Not specified"}

### Output:
1. SEO Title Suggestions (3)
2. Meta Description (under 160 characters)
3. Suggested Keywords (10 max)
4. On-page SEO Improvement Tips
5. Readability or Structure Improvements

Only return optimized content. Do not explain. Format cleanly.
`;
};

// helpers/GeminiPrompt.js

export const adCopyPrompt = ({ product, audience, platform, tone, adType }) => {
  return `
You are an award-winning ad copywriter with 15+ years of experience writing high-converting ads for ${platform}.

🔍 Your task:
Create 3 variations of ad copy for a ${adType.toLowerCase()} campaign about "${product}" targeting "${audience}".

🎯 Each variation should include:
- A powerful headline (limit: 30 characters for Meta)
- A compelling body (limit: 100-150 characters)
- A CTA suggestion

💡 Requirements:
- Match the tone: ${tone}
- Avoid generic filler content
- Use platform-specific style (e.g., emojis for Meta, crisp clarity for Google)
- Apply proven triggers: curiosity, urgency, benefits, social proof

Output format:
### Ad Variation 1:
Headline: ...
Body: ...
CTA: ...

### Ad Variation 2:
...

(No explanation. Output only in plain text.)
`;
};
