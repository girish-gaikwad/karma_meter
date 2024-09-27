import { useState } from 'react'
import './App.css'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Vehical from './pages/thiru/Vehical'
import Choosevehical from './pages/thiru/vehical/Choosevehical'
import Fule from './pages/thiru/vehical/Fule'
import Noofvehicel from './pages/thiru/vehical/Noofvehicel'
import Karmapro from './components/Selvapraveen/Karmapro'

import Appliances from './pages/shankari/Appliances'
import Electricity from './pages/shankari/Electricity'
import Preferences from './pages/shankari/Preferences'
function App() {


  return (
    <>
        <BrowserRouter>
       <Routes>

          <Route path="/vehical/*" element={<Vehical/>} />
          <Route path="/selva/*" element={<Karmapro />} />
          <Route path="/preferences" element={<Preferences />} />
          <Route path='/electricity' element={<Electricity />}/>
          <Route path ='/appliances' element={<Appliances />}/>
       </Routes>
     </BrowserRouter>
    </>
  )
}

export default App
