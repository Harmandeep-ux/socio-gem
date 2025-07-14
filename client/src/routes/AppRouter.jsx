import { Route } from 'react-router-dom'
import React from 'react'
import { BrowserRouter, Routes } from 'react-router-dom'
import Layout from '../Layout/Layout'
import Home from '../pages/Home'

import GeminiAdCopy from '../components/GeminiAdCopy'
import GeminiSEOOptimizer from '../components/GeminiSEOOptimizer'
import BlogPostForm from '../components/BlogPostForm'
import GeminiForm from '../components/GeminiForm'
import EmailGemini from '../components/EmailGemini'
import ReelGemini from '../components/ReelGemini'
import GeminiTone from '../components/GeminiTone'
import GeminiHash from '../components/GeminiHash'
import GeminiContentCalendar from '../components/GeminiContentCalendar'

const AppRouter = () => {
  return (
    <Routes>
        <Route  path='/' element={<Home/>}/>
        <Route  path='/layout' element={<Layout/>}/>
        <Route path='/ad-copy' element={<GeminiAdCopy />} />
      <Route path='/seo' element={<GeminiSEOOptimizer />} />
      <Route path='/blog-post' element={<BlogPostForm />} />
      <Route path='/content' element={<GeminiForm />} />
      <Route path='/email' element={<EmailGemini />} />
      <Route path='/reel' element={<ReelGemini />} />
      <Route path='/tone' element={<GeminiTone />} />
      <Route path='/hashtags' element={<GeminiHash />} />
      <Route path='/calendar' element={<GeminiContentCalendar />} />
    </Routes>
  )
}

export default AppRouter