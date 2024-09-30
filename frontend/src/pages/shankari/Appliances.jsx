import React, { useState } from 'react';
import bg3 from '../../assets/shankari/bg3.png';
import { useNavigate } from 'react-router-dom';
import { IoTriangleSharp } from "react-icons/io5";
import progress4 from '../../assets/shankari/progress4.png';
import './Appliances.css';
import Slider from "@mui/material/Slider";
const Appliances = () => {
  const navigate = useNavigate();
  const [value, setValue] = useState(100);
  const [qus, setQus] = useState("How much electricity do you consume for a month?");
  const handleValueChange = (event) => {
    setValue(event.target.value);
  };

  const sliderBackgroundStyle = {
    backgroundColor: `linear-gradient(to right, rgb(29,120,236) ${value / 10}%, #d3d3d3 0%)`
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
          <img src={progress4} alt="" />
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
                min={100}
                max={1000}
                value={value}
                defaultValue={100}
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
              <div>100 units</div>
              <div>1000 units</div>
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
              {value} units
            </div>
          </div>
          <div className="tnext">
            <button className="Sbut"  onClick={() => navigate('/display-karma')}>Calculate carbon footprint</button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Appliances;