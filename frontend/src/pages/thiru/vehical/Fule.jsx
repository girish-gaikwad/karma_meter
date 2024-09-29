import React, { useState } from "react";
import "../vehical.css";
import Choose from "../../../components/thiru/Choose";
import fuel from "../../../assets/thiru/Fuel Pump.png";
import plug from "../../../assets/thiru/icons8-electric-plug.svg";
import option1 from "../../../assets/thiru/option1.svg";
import { useNavigate } from "react-router-dom";
import { IoTriangleSharp } from "react-icons/io5";
const Fule = () => {
  const navigate = useNavigate();
  const [qus, setQus] = useState("What type of fuel do you use?");
  const [border, setBorder] = useState(null);
  const [list, setList] = useState([
    {
      Name: "Petrol/Diesel",
      img: fuel,
      baground: "#FFF4F3",
      border: "#EB7E74",
    },
    {
      Name: "Eletric vehicle",
      img: plug,
      baground: "#FFF4E6",
      border: "#FFBA63",
    },
  ]);
  return (
    <div className="tmain">
      <div className="Shead-red">
        <span
            style={{
              paddingRight: "10px",
              alignItems: "center",
              display: "flex",
            }}
          >
            <IoTriangleSharp color="#DF2929"  />
          </span>
          <div>17.67 ton CO2</div>
      </div>
      <div className="tbox">
        <div className="tround">
          <img src={option1} style={{backgroundColor:'Transparent'}} />
        </div>
        <div className="Sdiv">
        <div className="tqus">{qus}</div>
        <div className="titems">
        {list.map((item, index) => (
            <div
              className="titem "
              onClick={() => setBorder(index)}
              key={index}
              style={{
                backgroundColor: item.baground,
                height:'50%',
                border:
                  border == index
                    ? `2px solid ${item.border}`
                    : "2px solid transparent",
              }}
            >
              <img src={item.img} style={{paddingBottom:'10px'}} />
              <div>{item.Name}</div>
            </div>
          ))}
        </div>
        <div className="tnext" style={{ justifyContent: "space-between" }}>
            <button onClick={() => navigate(-1)} className="tbut1">
              Back
            </button>
            <button onClick={() => navigate("/vehical/kilometer")} className="tbut2">
              Next
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Fule;
