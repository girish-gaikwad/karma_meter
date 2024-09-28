import React from 'react'
import { Route, Routes } from 'react-router-dom';
import Choosevehical from './vehical/Choosevehical';
import Fule from './vehical/Fule';
import Noofvehicel from './vehical/Noofvehicel';
import Kilometer from './vehical/Kilometer';

const Vehical = () => {
  return (
    <div >
        <Routes>
            <Route path="/choose" element={<Choosevehical/>}/>
            <Route path="/fuel" element={<Fule/>}/>
            <Route path="/noofvehicel" element={<Noofvehicel/>}/>
            <Route path="/kilometer" element={<Kilometer/>}/>
        </Routes>
    </div>
  )
}

export default Vehical