import React from 'react'
import { BrowserRouter, Routes, Route} from "react-router-dom";
import Navbar from "./components/Navbar";
import Bmi from "./components/Bmi";
import Bmr from "./components/Bmr";
import Periods from "./components/Periods";
import Home from './components/Home';

export default function App() {
  return (
    <>
      <BrowserRouter>
      <Navbar/>
        <Routes>
          <Route path="/" element={<Home/>} />
          <Route path="/bmi" element={<Bmi/>} />
          <Route path="/bmr" element={<Bmr/>} />
          <Route path="/periods" element={<Periods />} />
        </Routes>
      </BrowserRouter>
    </>
  )
}
