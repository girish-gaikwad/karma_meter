import React, { createContext, useState } from 'react'
export const KarmavehicalContext = createContext();
const Karmacontext = ({ children }) => {
    const [vehicalID, setVehicalID] = useState(null);
  const [vehicalCount, setVehicalCount] = useState(null);
  const [fuelID, setFuelID] = useState(null);
  const [AvgKilometers, setAvgKilometers] = useState(null);

  return (
    <KarmavehicalContext.Provider
        value={{
        vehicalID, setVehicalID,
        vehicalCount, setVehicalCount,
        fuelID, setFuelID,
        AvgKilometers, setAvgKilometers,
      }}
    >
        {children}
    </KarmavehicalContext.Provider>
  )
}

export default Karmacontext