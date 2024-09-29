import React, { useState } from 'react';
import bg1 from '../../assets/shankari/bg1.png';
import veg from '../../assets/shankari/veg.png';
import nonveg from '../../assets/shankari/nonVeg.png';
import both from '../../assets/shankari/both.png';
import { useNavigate } from 'react-router-dom';
import progress2 from '../../assets/shankari/progress2.png';
import { IoTriangleSharp } from "react-icons/io5";

const Preferences = () => {
  const navigate = useNavigate();
  const [border, setBorder] = useState(null);
  const [qus, setQus] = useState("What you normally eat?");
  const preferences = [
    { name: "Veg", img: veg, bg: "rgb(228,255,238)", border: "2px solid rgb(114,178,80)" },
    { name: "Both", img: both, bg: "rgb(255,244,230)", border: "2px solid rgb(235,178,112)" },
    { name: "Non veg", img: nonveg, bg: "rgb(255,244,243)", border: "2px solid rgb(247,210,206)" },
  ];

  const handlePreferenceClick = (index) => {
    setSelectedIndex(index);
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
          <IoTriangleSharp color="#DF2929"  />
        </span>
        <div>17.67 ton CO2</div>
      </div>
      <div className="tbox">
        <div className="tround">
          <img src={progress2} style={{backgroundColor:'Transparent'}} />
        </div>
        <div className="Sdiv">
          <div className="tqus">{qus}</div>
          <div className="titems">
            {preferences.map((item, index) => (
              <div
                className="titem"
                onClick={() => setBorder(index)}
                key={index}
                style={{
                  backgroundColor: item.bg,
                  gridColumn: index == 2 ? "span 2" : "auto",
                  width: index == 2 ? "41%" : "",
                  border:
                    border == index
                      ? `${item.border}`
                      : "2px solid transparent",
                }}
              >
                <img src={item.img} style={{paddingBottom:'10px'}} />
                <div>{item.name}</div>
              </div>
            ))}
          </div>
          <div className="tnext" style={{ justifyContent: "space-between" }}>
            <button onClick={() => navigate(-1)} className="tbut1">
              Back
            </button>
            <button onClick={() => navigate('/electricity')} className="tbut2">
              Next
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Preferences;