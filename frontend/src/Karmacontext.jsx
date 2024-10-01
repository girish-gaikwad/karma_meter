import React, { createContext, useState } from 'react'
export const KarmavehicalContext = createContext();
const Karmacontext = ({ children }) => {
    const [vehicalID, setVehicalID] = useState(null);
  const [vehicalCount, setVehicalCount] = useState(null);
  const [fuelID, setFuelID] = useState(null);
  const [AvgKilometers, setAvgKilometers] = useState(null);
  const [foodID, setFoodID] = useState(null);
  const [userOwnSppliances, setUserOwnSppliances] = useState(null);
  const [electricityUnit, setElectricityUnit] = useState(null);
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
      }}
    >
        {children}
    </KarmavehicalContext.Provider>
  )
}

export default Karmacontext