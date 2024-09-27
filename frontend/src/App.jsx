import { useState } from 'react'
import './App.css'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Vehical from './pages/thiru/Vehical'
import Choosevehical from './pages/thiru/vehical/Choosevehical'
import Fule from './pages/thiru/vehical/Fule'
import Noofvehicel from './pages/thiru/vehical/Noofvehicel'
import Karmapro from './components/Selvapraveen/Karmapro'
function App() {
  const [count, setCount] = useState(0)

  return (
    <>
        <BrowserRouter>
       <Routes>

        <Route path="/vehical/*" element={<Vehical/>} />
          <Route path="/selva/*" element={<Karmapro />} />
       </Routes>
     </BrowserRouter>
    </>
  )
}

export default App
