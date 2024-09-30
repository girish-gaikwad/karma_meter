import React, { useState,useEffect,useContext } from "react";
import { useNavigate } from "react-router-dom";
import option1 from "../../../assets/thiru/option1.svg";
import { KarmavehicalContext } from "../../../Karmacontext";
import Slider from "@mui/material/Slider";
import { IoTriangleSharp } from "react-icons/io5";
const Noofvehicel = () => {
  const navigate = useNavigate();
  const { vehicalCount, setVehicalCount } = useContext(KarmavehicalContext);
  const [qus, setQus] = useState("How many vehicles do you own?");
  const [value, setValue] = useState(vehicalCount); 
  const handleValueChange = (event) => {
    setValue(event.target.value);
    setVehicalCount(event.target.value)
  };
  console.log(vehicalCount);
  
  return (
    <div className="tmain">
      <div className="Shead-red">
        <IoTriangleSharp
          color="red"
          style={{
            paddingRight: "10px",
            alignItems: "center",
            display: "flex",
          }}
        />
        <div>17.67 ton CO2</div>
      </div>
      <div className="tbox">
        <div className="tround">
          <img src={option1} alt="" />
        </div>
        <div className="Sdiv">
          <div className="tqus">{qus}</div>
          <div className="Scen">
            <div className="tnovehicel">
              <div
                style={{
                  background: "#0E70EB",
                  width: "3px",
                  height: "100%",
                  borderRadius: "20px",
                }}
              ></div>

              <Slider
                size="small"
                min={2}
                max={10}
                value={value}
                defaultValue={2}
                style={{
                  height: "9%",
                  width: "95.5%",
                }}
                onChange={handleValueChange}
              />
              <div
                style={{
                  background: "#0E70EB",
                  width: "3px",
                  height: "100%",
                  borderRadius: "20px",
                }}
              ></div>
            </div>
            <div
              style={{
                display: "flex",
                justifyContent: "space-between",
                width: "85%",
                paddingBottom:'7%',
              }}
            >
              <div>2</div>
              <div>4</div>
              <div>6</div>
              <div>8</div>
              <div>10</div>
            </div>
            <div
              style={{
                textAlign: "center",
                borderRadius: "5px",
                fontSize:'13px',
                fontWeight: "600",
                backgroundColor: "rgb(255,244,228)",
                color: "rgb(255,152,14)",
                padding:'4px 16px',
              }}
            >
              {value} Vehicles
            </div>
          </div>
          <div className="tnext" style={{ justifyContent: "space-between" }}>
            <button onClick={() => navigate(-1)} className="tbut1">
              Back
            </button>
            <button onClick={() => navigate("/vehical/fuel")} className="tbut2">
              Next
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Noofvehicel;
