import { useState } from 'react'
import { Routes, Route ,BrowserRouter} from 'react-router-dom'

import Appliances from './pages/shankari/Appliances'
import Electricity from './pages/shankari/Electricity'
import Preferences from './pages/shankari/Preferences'

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
