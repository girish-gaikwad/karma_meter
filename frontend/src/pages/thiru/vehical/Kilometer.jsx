import React,{useState} from 'react'
import { useNavigate } from 'react-router-dom'
import option1 from "../../../assets/thiru/option1.svg" 
import { IoTriangleSharp } from "react-icons/io5";
import Slider from "@mui/material/Slider";
const Kilometer = () => {
    const navigate =useNavigate();
    const [qus,setQus]=useState("How many kilometers you drive per week?")
    const [value, setValue] = useState(0); // Initial value of the slider is 0

  // Update the value state as slider moves
  const handleValueChange = (event) => {
    setValue(event.target.value);
  };
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
                min={10}
                max={250}
                value={value}
                defaultValue={10}
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
              <div>10km</div>
              <div>250km</div>
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
              {value} km
            </div>
          </div>
          <div className="tnext" style={{ justifyContent: "space-between" }}>
            <button onClick={() => navigate(-1)} className="tbut1">
              Back
            </button>
            <button onClick={() => navigate("/preferences")} className="tbut2">
              Next
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Kilometer