import React, { useState, useEffect } from "react";
import Greatjob from "./Greatjob";
import Input from "./Karmad";

function Simplebutton() {
  const [showGreatJob, setShowGreatJob] = useState(false);
  const [hideGreatJob, setHideGreatJob] = useState(false);
  const [showInput, setShowInput] = useState(false);
  const [hideButton, setHideButton] = useState(false);

  const handleClick = () => {
    setHideButton(true);  
    setTimeout(() => {
      setShowGreatJob(true); 
    }, 1000);
    setTimeout(() => {
      setHideGreatJob(true);  
    }, 3000);
    setTimeout(() => {
      setShowGreatJob(false);
      setShowInput(true);   
    }, 3500);
  };

  return (
    <div>
      {!hideButton && <button onClick={handleClick}>Calculate & offset</button>}

      {showGreatJob && (
        <div className={`slide-up ${hideGreatJob ? "slide-out" : ""}`}>
          <Greatjob />
        </div>
      )}

      {showInput && <div className="slide-up"><Input /></div>}
    </div>
  );
}

export default Simplebutton;
