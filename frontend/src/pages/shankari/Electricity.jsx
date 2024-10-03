import React, { useState, useEffect,useContext } from "react";
import { useNavigate } from "react-router-dom";
import { IoTriangleSharp } from "react-icons/io5";
import progress3 from "../../assets/level3.png";
import thirdImage from '../../assets/fourth.png';
import { KarmavehicalContext } from "../../Karmacontext";

const Electricity = () => {
  const navigate = useNavigate();
  const { userOwnSppliances, setUserOwnSppliances,ClientSideCo2,SetClientSideCo2  } = useContext(KarmavehicalContext);
  const [carbon,setCarbon] = useState(null)
  const [selectedIndices, setSelectedIndices] = useState([]); // Store selected indices
  const [appliances, setAppliances] = useState([]);
  const[data,setData] = useState([])


  const Appliance = [
    {
      
      bg: "rgb(228,255,238)",
      border: "2px solid rgb(114,178,80)",
    },
    {
      bg: "rgb(255,244,230)",
      border: "2px solid rgb(235,178,112)",
    },
    {
      bg: "rgb(249,245,247)",
      border: "2px solid rgb(247,210,206)",
    },
    {
      bg: "rgb(230,238,250)",
      border: "2px solid rgb(247,210,206)",
    },
    {
      bg: "rgb(252,245,255)",
      border: "2px solid rgb(247,210,206)",
    },
    {
      bg: "rgb(228,251,255)",
      border: "2px solid rgb(247,210,206)",
    },
    {
      bg: "rgb(255,244,243)",
      border: "2px solid rgb(247,210,206)",
    },
  ];

  const fetchData = async () => {
    try {
      const response = await fetch('http://localhost:8081/api/v1/getdata/appliances');
      const data = await response.json();
     setData(data)
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  const handlePreferenceClick = (index) => {
    setUserOwnSppliances((prev) => {
      if (prev.includes(index.id)) {
        setCarbon(carbon-index.carbonFootprint)
        return prev.filter((i) => i !== index.id); // Remove index if already selected
      } else {
        setCarbon(carbon+index.carbonFootprint)
        return [...prev, index.id]; // Add index if not selected
      }
    });

  };
  const handleNext = () => {
    SetClientSideCo2(ClientSideCo2+carbon)
    navigate('/appliances'); 
  };
  

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
          <img src={progress3} style={{ backgroundColor: "Transparent" }} />
        </div>
        <div className="Sdiv">
          <div className="tqus">Select the appliances you use at your home</div>
          <div
            style={{
              justifyContent: 'center',
              display: "grid",
              gridTemplateColumns: "repeat(3, 1fr)",
              gap: "15px",
            }}
          >
            {data.map((item, index) => (
              <div
                className="Srav"
                key={index}
                onClick={() => handlePreferenceClick(item)}
                style={{
                  backgroundColor: Appliance[index].bg,
                  border: userOwnSppliances.includes(index+1) ? Appliance[index].border : "2px solid transparent",
                  cursor: "pointer",
                  gridColumn: index === 6 ? "2 / span 1" : "auto",
                  height: index === 6 ? "70px" : "",
                }}
              >
                <p style={{
                  fontSize: "12px",
                  margin: "0",
                  wordBreak: "break-word",
                  fontWeight: "500",
                }}>
                  {item.name}
                </p>
              </div>
            ))}
          </div>
          <div className="tnext" style={{ justifyContent: "space-between" }}>
            <button className="tbut1" onClick={() => navigate(-1)}>
              Back
            </button>
            <button className="tbut2" onClick={handleNext}>
              Next
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Electricity;