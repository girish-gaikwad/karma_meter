import React, { useState } from "react";
import bg2 from "../../assets/shankari/bg2.png";
import { useNavigate } from "react-router-dom";
import progress3 from "../../assets/shankari/progress3.png";
import { IoTriangleSharp } from "react-icons/io5";

const Electricity = () => {
  const navigate = useNavigate();
  const [selectedIndices, setSelectedIndices] = useState([]);

  const Appliances = [
    {
      name: "Fridge",
      bg: "rgb(228,255,238)",
      border: "2px solid rgb(114,178,80)",
    },
    {
      name: "AC",
      bg: "rgb(255,244,230)",
      border: "2px solid rgb(235,178,112)",
    },
    {
      name: "Chimney",
      bg: "rgb(249,245,247)",
      border: "2px solid rgb(247,210,206)",
    },
    {
      name: "Washing Machine",
      bg: "rgb(230,238,250)",
      border: "2px solid rgb(247,210,206)",
    },
    {
      name: "Electric vehicles",
      bg: "rgb(252,245,255)",
      border: "2px solid rgb(247,210,206)",
    },
    {
      name: "Air cooler",
      bg: "rgb(228,251,255)",
      border: "2px solid rgb(247,210,206)",
    },
    {
      name: "Mixer/ Grinder",
      bg: "rgb(255,244,243)",
      border: "2px solid rgb(247,210,206)",
    },
  ];

  const handlePreferenceClick = (index) => {
    setSelectedIndices((prev) => {
      if (prev.includes(index)) {
        return prev.filter((i) => i !== index);
      } else {
        return [...prev, index];
      }
    });
  };

  const handleNext = () => {
    const selectedAppliances = selectedIndices.map((i) => Appliances[i].name);
    console.log("Selected Appliances:", selectedAppliances);
    navigate("/appliances");
  };

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
          <IoTriangleSharp color="#DF2929" />
        </span>
        <div>17.67 ton CO2</div>
      </div>
      <div className="tbox">
        <div className="tround">
          <img src={progress3} style={{ backgroundColor: "Transparent" }} />
        </div>

        <div className="Sdiv">
          <div className="tqus">Select the appliances you use at your home</div>
          <div
            style={{
              justifyContent:'center',
              display: "grid",
              gridTemplateColumns: "repeat(3, 1fr)",
              gap: "15px",
            }}
          >
            {Appliances.map((item, index) => (
              <div
              className="Srav"
                key={index}
                onClick={() => handlePreferenceClick(index)}
                style={{
                  backgroundColor: item.bg,
                  border: selectedIndices.includes(index)
                    ? item.border
                    : "2px solid transparent",
                  cursor: "pointer",
                  gridColumn: index === 6 ? "2 / span 1" : "auto",
                  height: index == 6 ? "70px" : "",
                }}
              >
                <p
                  style={{
                    fontSize: "12px",
                    margin: "0",
                    wordBreak: "break-word",
                    fontWeight: "500",
                  }}
                >
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