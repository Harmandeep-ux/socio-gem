import React from 'react'
import GeminiForm from './components/GeminiForm'
import EmailGemini from './components/EmailGemini'
import ReelGemini from './components/ReelGemini'
import GeminiTone from './components/GeminiTone'
import GeminiHash from './components/GeminiHash'
import ContentCalendarForm from './components/GeminiContentCalendar'
import BlogPostForm from './components/BlogPostForm'
import GeminiSEOOptimizer from './components/GeminiSEOOptimizer'
import GeminiAdCopy from './components/GeminiAdCopy'
import HeroSection from './components/HeroSection'

const App = () => {
  return (
    <>
    <HeroSection/>
    <GeminiAdCopy />
    <GeminiSEOOptimizer />
    <BlogPostForm />
      <GeminiForm />
      <EmailGemini />
      <ReelGemini />
      <GeminiTone />
      <GeminiHash />
      <ContentCalendarForm />
    </>
  )
}

export default App