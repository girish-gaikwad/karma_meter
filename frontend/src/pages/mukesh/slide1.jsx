import React, { useState,useContext,useEffect } from "react";
import "./slide1.css";
import tree from '../../assets/m-tree.png'
import CarbonFootprintChart from "../../components/mukesh/donutgraph";
import Greatjob from "../Selvapraveen/Greatjob";
import Input from "../Selvapraveen/Karmad";
import { KarmavehicalContext } from "../../Karmacontext";
function Slide1() {
  const userID = 1
  const { vehicalID,vehicalCount,fuelID,AvgKilometers,foodID,userOwnSppliances,electricityUnit,karmapoint,setKarmapoint,ClientSideCo2 } = useContext(KarmavehicalContext);
  const [data,setData] = useState(null)
  const [showGreatJob, setShowGreatJob] = useState(false);
  const [hideGreatJob, setHideGreatJob] = useState(false);
  const [showInput, setShowInput] = useState(false);
  const [hideButton, setHideButton] = useState(false);
  const [backgroundClass, setBackgroundClass] = useState("m-main1");
  const [backgroundClass1, setBackgroundClass1] = useState("m-main1-se");
  const [backgroundClass2, setBackgroundClass2] = useState("m-main1-se");
  console.log(ClientSideCo2);
  
  const fetchData = async () => {
    try {
      const response = await fetch('http://localhost:8081/api/v1/karma_meter/calculate', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ userID,
                              vehicalID,
                              vehicalCount,
                              fuelID,
                              AvgKilometers,
                              foodID,
                              userOwnSppliances,
                              electricityUnit,}),
      });
      const data = await response.json();
      setKarmapoint(data)
    } catch (error) {
      console.error(error);
    }
  }
  useEffect(() => {
    fetchData();
  },[])
  const handleClick = () => {
    setHideButton(true);  
    setBackgroundClass("secondback");
    setBackgroundClass1("firsthalf");setBackgroundClass2("secondhalf");
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
    <div className={backgroundClass}>
      <div className={backgroundClass1}></div>
      <div className={backgroundClass2}></div>
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
