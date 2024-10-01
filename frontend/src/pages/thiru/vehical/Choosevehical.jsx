import React, { useState,useEffect,useContext } from "react";
import "../vehical.css";
import option1 from "../../../assets/thiru/option1.svg";
import { useNavigate } from "react-router-dom";
import { IoTriangleSharp } from "react-icons/io5";
import { KarmavehicalContext } from "../../../Karmacontext";
const Choosevehical = () => {
  const { vehicalID, setVehicalID,ClientSideCo2,SetClientSideCo2 } = useContext(KarmavehicalContext);
  const navigate = useNavigate();
  const [data,setData] = useState(null)
  
  const [qus, setQus] = useState("Choose the vehicles you use for commuting?");
  const [border, setBorder] = useState(null);
  const [list, setList] = useState([
    {
      baground: "#EEF6FF",
      border: "lightblue",
    },
    { baground: "#FFF4E6", border: "#FFBA63" },
    
    { baground: "#FFF4F3", border: "#EB7E74" },
  ]);
  const handleclick = (index,item) =>{
    setVehicalID(item.id)
    SetClientSideCo2(item.carbonFootprint);
    
    setBorder(index)
  }

  const fetchData = async () => {
    try {
      const response = await fetch('http://localhost:8081/api/v1/getdata/vehicaltype');
      const data = await response.json();
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

    <div className="tmain">
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
        <div>{ClientSideCo2} ton CO2</div>
      </div>
      <div className="tbox">
        <div className="tround" >
          <img src={option1}  />
        </div>
        <div className="Sdiv">
        <div className="tqus">{qus}</div>
        <div className="titems">
          {data.map((item, index) => (
            <div
              className="titem"
              onClick={() => handleclick(index,item)}
              key={index}
              style={{
                backgroundColor: list[index].baground,
                gridColumn: index == 2 ? "span 2" : "auto",
                width: index == 2 ? "41%" : "",
                border:
                  border == index
                    ? `2px solid ${list[index].border}`
                    : "2px solid transparent",
              }}
            >
              <img src={item.image} style={{paddingBottom:'10px'}} />
              <div>{item.vehicalCategory}</div>
            </div>
          ))}
        </div>
        <div className="tnext">
          <button className="Sbut" onClick={() => navigate("/vehical/noofvehicel")}>Next</button>
        </div>
        </div>
      </div>
    </div>
  );
};

export default Choosevehical;
