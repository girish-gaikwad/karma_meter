import React, { createContext, useState } from 'react'
export const KarmavehicalContext = createContext();
const Karmacontext = ({ children }) => {
  const [ClientSideCo2,SetClientSideCo2]=useState(0); 
  const [vehicalID, setVehicalID] = useState(null);
  const [vehicalCount, setVehicalCount] = useState(null);
  const [fuelID, setFuelID] = useState(null);
  const [AvgKilometers, setAvgKilometers] = useState(null);
  const [foodID, setFoodID] = useState(null);
  const [userOwnSppliances, setUserOwnSppliances] = useState([]);
  const [electricityUnit, setElectricityUnit] = useState(null);
  const [karmapoint, setKarmapoint] = useState([]);
  return (
    <KarmavehicalContext.Provider
        value={{
        vehicalID, setVehicalID,
        vehicalCount, setVehicalCount,
        fuelID, setFuelID,
        AvgKilometers, setAvgKilometers,
        foodID,setFoodID,
        userOwnSppliances,setUserOwnSppliances,
        electricityUnit,setElectricityUnit,
        karmapoint,setKarmapoint,
      }}
    >
        {children}
    </KarmavehicalContext.Provider>
  )
}

export default Karmacontext