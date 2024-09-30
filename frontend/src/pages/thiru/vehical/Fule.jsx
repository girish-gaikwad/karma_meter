import React, { useState,useEffect,useContext } from "react";
import "../vehical.css";
import option1 from "../../../assets/thiru/option1.svg";
import { useNavigate } from "react-router-dom";
import { IoTriangleSharp } from "react-icons/io5";

import image from "../../../assets/second.png";

const Fule = () => {
  const navigate = useNavigate();
  const { fuelID, setFuelID } = useContext(KarmavehicalContext);
  const [data,setData] = useState(null)
  const [qus, setQus] = useState("What type of fuel do you use?");
  const [border, setBorder] = useState(null);
  const [list, setList] = useState([
    {
      baground: "#FFF4F3",
      border: "#EB7E74",
    },
    {
      baground: "#FFF4E6",
      border: "#FFBA63",
    },
  ]);

  const handleclick = (index,item) =>{
    setFuelID(item.id)
    setBorder(index)
  }
  console.log(fuelID);
  

  const fetchData = async () => {
    try {
      const response = await fetch('http://localhost:8081/api/v1/getdata/fueltype');
      const data = await response.json();
      console.log(data);
      
      setData(data)
    } catch (error) {
      console.error(error);
    }
  }
  useEffect(() => {
    fetchData();
  },[])
  if (!data) {
    return <div>Loding....</div>
  }
  return (
    <div className="tmain" style={{ backgroundImage: `url(${image})`}}>
      <div className="Shead-red">
        <span
            style={{
              paddingRight: "10px",
              alignItems: "center",
              display: "flex",
            }}
          >
            <IoTriangleSharp color="red"  />
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
        {data.map((item, index) => (
            <div
              className="titem "
              onClick={() => handleclick(index,item)}
              key={index}
              style={{
                backgroundColor: list[index].baground,
                height:'50%',
                border:
                  border == index
                    ? `2px solid ${list[index].border}`
                    : "2px solid transparent",
              }}
            >
              <img src={item.image} style={{paddingBottom:'10px'}} />
              <div>{item.fuelcategory}</div>
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
