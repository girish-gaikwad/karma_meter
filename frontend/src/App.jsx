import { useState } from 'react'
import { Routes, Route ,BrowserRouter} from 'react-router-dom'

import Preferences from './pages/Preferences'
import Electricity from './pages/Electricity'
import Appliances from './pages/Appliances'

function App() {


  return (
    <>
    
    <BrowserRouter>
    <Routes>
      <Route path="/preferences" element={<Preferences />} />
      <Route path='/electricity' element={<Electricity />}/>
      <Route path ='/appliances' element={<Appliances />}/>

    </Routes>
    </BrowserRouter>
    </>
  )
}

export default App
