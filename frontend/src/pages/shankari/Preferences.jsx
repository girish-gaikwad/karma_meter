import React, { useEffect, useState,useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import { IoTriangleSharp } from "react-icons/io5";
import progress2 from '../../../public/shankari/progress2.png';
import { KarmavehicalContext } from "../../Karmacontext";
import level from '../../assets/level2.png';
import thirdImage from '../../assets/third.png';
const Preferences = () => {
  const { foodID, setFoodID,ClientSideCo2,SetClientSideCo2 } = useContext(KarmavehicalContext);
  const [carbon,setCarbon] = useState(0)
  const [preferences, setPreferences] = useState([]);
  const [border, setBorder] = useState(null);
  const [qus, setQus] = useState("What do you normally eat?");
  const navigate = useNavigate();



  const staticPreferences = [
    { name: "Veg", bg: "rgb(228,255,238)", border: "2px solid rgb(114,178,80)" },
    { name: "Both", bg: "rgb(255,244,230)", border: "2px solid rgb(235,178,112)" },
    { name: "Non veg", bg: "rgb(255,244,243)", border: "2px solid rgb(247,210,206)" },
  ];

  const fetchData = async () => {
    try {
      const response = await fetch('http://localhost:8081/api/v1/getdata/foodtype');
      const data = await response.json();
      
      const mergedData = staticPreferences.map(pref => {
        const backendItem = data.find(item => item.foodcategory === pref.name);
        return backendItem ? { ...pref, ...backendItem } : pref; // Keep the static item if no match is found
      });
      
      setPreferences(mergedData);
      console.log(mergedData);
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);
  const handleCarbonValue = (index,value) => {
    setBorder(index);
    setFoodID(value.id);
    setCarbon(value.carbonFootprint)
    
  };
  const handlenext = () =>{
    SetClientSideCo2(ClientSideCo2+carbon)
    navigate('/electricity')
  }
  return (
    <div className="tmain" style={{ backgroundImage: `url(${thirdImage})`}}>
      <div className="Shead-red">
        <span style={{ paddingRight: "10px", alignItems: "center", display: "flex" }}>
          <IoTriangleSharp color="#DF2929" />
        </span>
        <div>{ClientSideCo2} ton CO2</div>
      </div>
      <div className="tbox">
        <div className="tround">
          <img src={progress2} style={{ backgroundColor: 'Transparent' }} />
        </div>
        <div className="Sdiv">
          <div className="tqus">{qus}</div>
          <div className="titems">
            {preferences.map((item, index) => (
              <div
                className="titem"
                onClick={() => handleCarbonValue(index,item)} 
                key={item.id || index}
                style={{
                  backgroundColor: item.bg,
                  gridColumn: index === 2 ? "span 2" : "auto",
                  width: index === 2 ? "41%" : "",
                  border: border === index ? item.border : "2px solid transparent",
                }}
              >
                <img src={item.Image} alt={item.foodcategory} style={{ paddingBottom: '10px' }} />
                <div>{item.foodcategory}</div>
              </div>
            ))}
          </div>
          <div className="tnext" style={{ justifyContent: "space-between" }}>
            <button onClick={() => navigate(-1)} className="tbut1">
              Back
            </button>
            <button onClick={()=>handlenext()} className="tbut2">
              Next
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Preferences;