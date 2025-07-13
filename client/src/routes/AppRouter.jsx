import { Route } from 'react-router-dom'
import React from 'react'
import { BrowserRouter, Routes } from 'react-router-dom'
import Layout from '../Layout/Layout'
import Home from '../pages/Home'

const AppRouter = () => {
  return (
    <Routes>
        <Route  path='/' element={<Home/>}/>
        <Route  path='/layout' element={<Layout/>}/>
    </Routes>
  )
}

export default AppRouter