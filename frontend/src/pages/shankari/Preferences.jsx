import React, { useState } from 'react';
import bg1 from '../../assets/shankari/bg1.png';
import veg from '../../assets/shankari/veg.png';
import nonveg from '../../assets/shankari/nonveg.png';
import both from '../../assets/shankari/both.png';
import { useNavigate } from 'react-router-dom';
import progress2 from '../../assets/shankari/progress2.png';
import { IoTriangleSharp } from "react-icons/io5";

const Preferences = () => {
  const navigate = useNavigate();
  const [selectedIndex, setSelectedIndex] = useState(null);

  const preferences = [
    { name: "Veg", img: veg, bg: "rgb(228,255,238)", border: "2px solid rgb(114,178,80)" },
    { name: "Both", img: both, bg: "rgb(255,244,230)", border: "2px solid rgb(235,178,112)" },
    { name: "Non veg", img: nonveg, bg: "rgb(255,244,243)", border: "2px solid rgb(247,210,206)" },
  ];

  const handlePreferenceClick = (index) => {
    setSelectedIndex(index);
  };

  return (
    <div className="d-flex align-items-center justify-content-center" style={{ height: '100vh', width: '412pxvw', position: 'relative' }}>
      {/* Background Image */}
      <div
        style={{
          backgroundImage: `url(${bg1})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          height: '55vh',

          width: '412px',
          position: 'absolute',
        }}
      ></div>

      {/* Centered Content */}
      <div style={{ height: '99vh', width: '412px', position: 'relative', zIndex: 1 }}>
        <div style={{ position: 'absolute', top: '4vh', fontSize: '1rem', fontWeight: '600', textAlign: 'center', width: '100%', display: 'flex', justifyContent: 'center' }}>
          <IoTriangleSharp color='red' style={{ marginRight: '0.5rem' }} />
          <div style={{ fontWeight: "bold" }}>17.67 ton CO2</div>
        </div>

        <div style={{ backgroundColor: 'white', height: '40vh', width: '100%', position: 'relative', top: '46vh', borderTopLeftRadius: '40px', borderTopRightRadius: '40px', zIndex: 1, boxShadow: '0 -5px 10px rgba(0, 0, 0, 0.1)' }}>
          <div style={{ alignItems: 'center', justifyContent: 'center', top: '-2.4rem', position: 'relative', display: 'flex', backgroundColor: 'white', width: "5rem", borderRadius: '50%', height: '5rem', margin: '0 auto', marginBottom: "1" }}>
            <img style={{width:"4rem"}} src={progress2} alt="" />
          </div>

          <p style={{ textAlign: 'center', fontSize: '1rem', paddingBottom: '0', fontWeight: '600', margin: '0', bottom: '2rem', position: 'relative' }}>What you normally eat?</p>

          {/* Preferences Grid */}
          <div style={{ display: 'grid', gridTemplateColumns: "repeat(2, 1fr)", gridTemplateRows: "repeat(2, 1fr)", gap: '1.1rem', justifyItems: 'center' }}>
            {preferences.map((item, index) => (
              <div
                key={index}
                onClick={() => handlePreferenceClick(index)}
                style={{
                  display: 'flex',
                  flexDirection: 'column',
                  alignItems: 'center',
                  padding: '1rem',
                  bottom: '0.7rem',
                  position: 'relative',
                  width: '4rem',
                  height: '4rem',
                  borderRadius: '7px',
                  margin: index === 0 ? '0 -5.6rem 0 0' : (index === 1 ? '0 0 0 -5.6rem' : '0'),
                  backgroundColor: item.bg,
                  border: selectedIndex === index ? item.border : "2px solid transparent",
                  cursor: 'pointer',
                  gridColumn: index === 2 ? 'span 2' : 'auto',
                }}
              >
                <img src={item.img} alt={item.name} style={{ height: '1.5rem', width: '1.5rem', paddingLeft: "0.3rem", fontWeight: "bold", paddingRight: "0.3rem",paddingBottom: "0.3rem",paddingTop: "0.3rem" }} />
                <p style={{ fontSize: '1rem', margin: '0',fontWeight:"600" }}>{item.name}</p>
              </div>
            ))}
          </div>

          {/* Buttons */}
          <div style={{ display: 'flex', justifyContent: 'space-evenly', padding: '1.2rem', bottom:'0.5rem' ,position: 'relative' }}>
            <button style={{  color: 'rgb(112,168,239)', cursor: 'pointer', fontSize: '1rem',
              fontWeight: '500', width: '10.5rem', height: '2.9rem', 
              backgroundColor: "rgb(230,238,250)", border: "none", borderRadius: "5px" }} onClick={() => navigate(-1)}>Back</button>
            <button style={{    color: 'white', cursor: 'pointer', fontSize: '1rem',
              fontWeight: '500', width: '10.5rem', height: '2.9rem', 
              backgroundColor: "#1d78ec", border: "none", borderRadius: "5px"}} onClick={() => navigate('/electricity')}>Next</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Preferences;