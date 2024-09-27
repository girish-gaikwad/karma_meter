import { useState } from 'react'
import './App.css'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Slide2 from './pages/mukesh/slide2.jsx'
import Slide1 from './pages/mukesh/slide1.jsx'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
        <BrowserRouter>
       <Routes>
         <Route path="/" element={<Slide1 />} />
         <Route path="/display-karma" element={<Slide2 />} />
       </Routes>
     </BrowserRouter>
    </>
  )
}

export default App
