import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Navbar from '../Layouts/Navbar'
import ErrorPage from '../Pages/ErrorPage'

const Router = () => {
  return (
   <Routes>
        <Route path='/' element={<Navbar/>} />
        <Route path='*' element={<ErrorPage />} />
   </Routes>
  )
}

export default Router