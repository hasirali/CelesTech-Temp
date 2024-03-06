import { useState } from 'react'
import {Routes, Route} from 'react-router-dom'
import Header from './Component/Header'
import './Styles/App.scss'
import Home from './Component/Home'
import Footer from './Component/Footer'
import Contact from './Component/Contact'
import Services from './Component/Services'
import './Styles/media.scss'
function App() {
  

  return (
   <>
   
   <Header/>
   <Routes>
    <Route path='/' element={<Home/>}/>
    <Route path='/contact' element={<Contact/>}/>
    <Route path='/services' element={<Services/>}/>


   </Routes>
   <Footer/>
   </>
  )
}

export default App
