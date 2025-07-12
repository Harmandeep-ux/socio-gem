import express from 'express'
import { generateAdCopy, generateBlog, generateContentCalendar, generateEmail, generateHashtags, generatePosts, generateReelScript, generateSEO, translateTone } from '../controllers/geminiControllers.js'
import { testGeminiApi } from '../helper/test.js'

const router = express.Router()

router.post('/generate',generatePosts)
router.post('/generate-email',generateEmail)
router.post('/generate-reel',generateReelScript)
router.post('/generate-tone',translateTone)
router.post('/generate-hashtag',generateHashtags)
router.post('/generate-content-calendar',generateContentCalendar)
router.post('/generate-blog', generateBlog);
router.post('/optimize-seo', generateSEO);
router.post('/generate-ad-copy', generateAdCopy);


router.get('/test',testGeminiApi)


export default router