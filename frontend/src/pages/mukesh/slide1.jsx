import React, { useState } from "react";
import "./slide1.css";
import tree from '../../assets/m-tree.png'
import CarbonFootprintChart from "../../components/mukesh/donutgraph";
import Greatjob from "../../components/Selvapraveen/Greatjob";
import Input from "../../components/Selvapraveen/Karmad";
function Slide1() {

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
    <div className="m-outline">
      {!hideButton && <div className="m-main1"><h2>Summary</h2>
     
     
      <div className="m-box1">
      <div className="m-sub-box1">
        <CarbonFootprintChart/>
      </div>

        <div className="m-sub-box2">
          <div className="tree-icon">
            <img src={tree} alt="Tree Icon" />
          </div>
          <div className="offset-text">
            <p>Offset your excess carbon footprint by</p>
            <h2>Planting 15 Saplings</h2>
          </div>
          <button onClick={handleClick} className="offset-button">Calculate & offset</button>
        </div>
        <div className="m-remain">Remaind me Later</div>
      </div>
<div></div>
<div></div>
    
      </div>}
      {showGreatJob && (
        <div className={`slide-up ${hideGreatJob ? "slide-out" : ""}`}>
          <Greatjob />
        </div>
      )}

      {showInput && <div className="slide-up"><Input /></div>}
    </div>
  );
}

export default Slide1;
