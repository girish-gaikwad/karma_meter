import { useState } from 'react'
import './App.css'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Karmapro from './components/Selvapraveen/Karmapro'
function App() {
  const [count, setCount] = useState(0)

  return (
    <>
        <BrowserRouter>
       <Routes>
         <Route path="/selva/*" element={<Karmapro />} />
         {/* <Route path="/about" element={<About />} /> */}
       </Routes>
     </BrowserRouter>
    </>
  )
}

export default App
