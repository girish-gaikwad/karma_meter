import { useState } from 'react'
import './App.css'
import { BrowserRouter, Routes, Route } from 'react-router-dom'

import Slide2 from './pages/mukesh/slide2.jsx'
import Slide1 from './pages/mukesh/slide1.jsx'


import Vehical from './pages/thiru/Vehical'
import Choosevehical from './pages/thiru/vehical/Choosevehical'
import Fule from './pages/thiru/vehical/Fule'
import Noofvehicel from './pages/thiru/vehical/Noofvehicel'

import Appliances from './pages/shankari/Appliances'
import Electricity from './pages/shankari/Electricity'
import Preferences from './pages/shankari/Preferences'
import Karmapro from './pages/Selvapraveen/Karmapro.jsx'

function App() {


  return (
    <>
        <BrowserRouter>
       <Routes>

         <Route path="/" element={<Slide2 />} />
          <Route path="/vehical/*" element={<Vehical/>} />
          <Route path="/preferences" element={<Preferences />} />
          <Route path='/electricity' element={<Electricity />}/>
          <Route path ='/appliances' element={<Appliances />}/>
         <Route path="/display-karma" element={<Slide1 />} />
          <Route path="/selva/*" element={<Karmapro />} />

       </Routes>
     </BrowserRouter>
    </>
  )
}

export default App
