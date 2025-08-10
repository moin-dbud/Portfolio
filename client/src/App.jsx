import React, { useEffect } from 'react'
import { Routes, Route } from 'react-router-dom'
import Home from './pages/Home'
import AOS from "aos";
import "aos/dist/aos.css";

const App = () => {

useEffect(() => {
  AOS.init({ duration: 1000 });
}, []);


  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
      </Routes>
    </>
  )
}

export default App
