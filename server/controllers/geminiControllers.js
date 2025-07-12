// controllers/geminiControllers.js

import { GoogleGenerativeAI } from "@google/generative-ai";
import { main } from "../services/gemini.service.js";
import { adCopyPrompt, contentCalendarPrompt, generateBlogPrompt, generateEmailPrompt, hashtagPrompt, reelPrompt, seoPrompt, tonePrompt } from "../helper/GeminPrompt.js";
import { json } from "express";

const genAI = new GoogleGenerativeAI(process.env.GEMINI_API_KEY)

export const generatePosts = async (req, res) => {
   const { product, tone, audience, platform } = req.body;

  const prompt = `Act as a top-tier social media strategist for major brands. Generate 5 premium-quality posts with these rules:

1. ADAPTATION
- Perfectly match the ${platform}'s native format (character limits, media types, hashtag culture)
- Immerse in ${tone} tone consistently (${audience} will feel it's written just for them)
- Show deep understanding of ${product} without generic phrases

2. STRUCTURE (for each post)
[Hook] - Ultra-compelling first line/visual concept
[Body] - Value-packed content (problems solved/benefits highlighted)
[Texture] - Emoji accents ・ Line breaks ・ Platform-specific formatting
[CTA] - Clear action (swipe/tag/comment/link) with urgency or curiosity
[Hashtags] - 3-5 strategic tags (mix of niche + trending)

3. QUALITY STANDARDS
- NO fluff - every word earns its place
- Native platform idioms (Reels/Tweets/Threads etc)
- Include psychological triggers when appropriate:
  • Scarcity ("Few left!")
  • Social proof ("Join 10k+ users")
  • Curiosity gap ("What happened next shocked us")

Example for Instagram (beauty product):
[Hook] "Red alert! Your makeup's arch-nemesis just met its match 💥"
[Body] Our ${product} isn't just sweat-proof—it's *life*-proof. Gym sessions? Check. Weddings? Check. That 3pm Zoom call when you woke up late? Double check. 

Pro artist tip: Apply after moisturizer for 18hr wear!
[Texture] 🎄☀️💦 ⟡ ⟡ ⟡
[CTA] Tag your most active friend who needs this!
[Hashtags] #MakeupRevolution #LongWearSecrets #BeautyHack

Now create 5 distinct ${platform} posts about ${product} for ${audience}, using ${tone} tone. Vary hooks and CTAs significantly.`

    try {
    //        const model = genAI.getGenerativeModel({ model: "gemini-pro" });
    // const result = await model.generateContent(prompt);
    // const text = result.response.text();
  const result = await main(prompt)
  console.log(result)
   

     // Split the response into individual posts
    const posts = result.split(/\n\s*\n/).filter(p => p.trim() !== '');
        res.status(200).json({ message: 'Posts generated',result });
    } catch (err) {
        console.error(err.message);
        res.status(500).json({ error: 'Server Error' });
    }
};

export const generateEmail = async(req,res) =>{
    const {emailType,product,recipient,tone} =req.body
    const prompt = await generateEmailPrompt({emailType,product,recipient,tone})

    try{
     const result =await main(prompt)
     return res.status(200).json({msg:"email generated successfully",result})
    }catch(err){
        return res.status(500).json({err:err.message})
    }
}

export const generateReelScript = async (req,res) =>{
    const {product, platform, tone, goal, duration,languageNote } =req.body
    try{
     const prompt = reelPrompt({product, platform, tone, goal, duration,languageNote} )
     const result = await main(prompt)
     return res.status(200).json({result})
    }catch(err){
        return res.status(500).json({err:err.message})
    }
}

export const translateTone = async(req,res) =>{
    const {inputText,targetTone} = req.body
    try{
      const prompt = tonePrompt({inputText,targetTone})
      const result = await main(prompt)

      return res.status(200).json({result})
    }catch(err){
        return res.status(500).json({err:err.message})
    }
}

export const generateHashtags = async(req,res) =>{
    const {topic, platform, audience, tone, type } =req.body

    try{
      const prompt = hashtagPrompt({topic, platform, audience, tone, type})
      const result = await main(prompt)
      return res.status(200).json({result})
    }catch(err){
        return res.status(500).json({err:err.message})
    }
}

export const generateContentCalendar = async (req,res) =>{
    const { platform, goal, duration, product, tone, audience } = req.body
    try{
    const prompt =  contentCalendarPrompt(platform, goal, duration, product, tone, audience)
    const result = await main(prompt)
    return res.status(200).json({result: typeof result === "string" ? result : json.stringfy(result)})
    }catch(err){
        return res.status(500).json({err:err.message})
    }
}

export const generateBlog = async (req, res) => {
  const { topic, audience, tone, keywords, length } = req.body;
  try {
    const prompt = generateBlogPrompt({ topic, audience, tone, keywords, length });
    const result = await main(prompt);
    return res.status(200).json({ result });
  } catch (err) {
    return res.status(500).json({ err: err.message });
  }
};

export const generateSEO = async (req,res) =>{
    const {content, topic, audience} = req.body
    try{
     const prompt = seoPrompt({content, topic, audience})
     const result = await main(prompt)
     return res.status(200).json({result})
    }catch(err){
        return res.status(500).json({err:err.message})
    }
}

export const generateAdCopy = async(req,res) =>{
    const { product, audience, platform, tone, adType} = req.body
    try{
    const prompt = adCopyPrompt({product, audience, platform, tone, adType})
    const result = await main(prompt)
    return res.status(200).json({result})
    }catch(err){
        return res.status(500).json({err:err.message})
    }
}