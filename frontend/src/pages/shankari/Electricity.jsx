import React, { useState } from 'react';
import bg2 from '../../assets/shankari/bg2.png'
import { useNavigate } from 'react-router-dom';
import progress3 from '../../assets/shankari/progress3.png';
import { IoTriangleSharp } from "react-icons/io5";

const Electricity = () => {
  const navigate = useNavigate();
  const [selectedIndices, setSelectedIndices] = useState([]); 

  const Appliances = [
    { name: "Fridge", bg: "rgb(228,255,238)", border: "2px solid rgb(114,178,80)" },
    { name: "AC", bg: "rgb(255,244,230)", border: "2px solid rgb(235,178,112)" },
    { name: "Chimney", bg: "rgb(249,245,247)", border: "2px solid rgb(247,210,206)" },
    { name: "Washing Machine", bg: "rgb(230,238,250)", border: "2px solid rgb(247,210,206)" },
    { name: "Electric vehicles", bg: "rgb(252,245,255)", border: "2px solid rgb(247,210,206)" },
    { name: "Air cooler", bg: "rgb(228,251,255)", border: "2px solid rgb(247,210,206)" },
    { name: "Mixer/ Grinder", bg: "rgb(255,244,243)", border: "2px solid rgb(247,210,206)" },
  ];

  const handlePreferenceClick = (index) => {
    setSelectedIndices((prev) => {
      if (prev.includes(index)) {
        return prev.filter(i => i !== index);
      } else {
        return [...prev, index];
      }
    });
  };

  const handleNext = () => {
    const selectedAppliances = selectedIndices.map(i => Appliances[i].name);
    console.log("Selected Appliances:", selectedAppliances);
    navigate('/appliances'); 
  };

  return (
    <div style={{ height: '100vh', width: '412px', position: 'relative' ,justifyContent: 'center'}}>
      <>
        <div style={{
          backgroundImage: `url(${bg2})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          height: '50vh',
          width: '100%',
          position: 'relative',
        }}>
        </div>
        <div style={{ position: 'absolute', top: '4vh', fontSize: '1rem', fontWeight: '600', textAlign: 'center', width: '100%', display: 'flex', justifyContent: 'center' }}>
          <IoTriangleSharp color='red' style={{ marginRight: '0.5rem' }} />
          <div>17.67 ton CO2</div> 
        </div>
      </>

      <div style={{
        backgroundColor: 'white',
        height: '40vh',
        width: '100%',
        position: 'absolute',
        top: '46vh',
        
        borderTopLeftRadius: '40px',
        borderTopRightRadius: '40px',
        zIndex: 1,
        boxShadow: '0 -5px 10px rgba(0, 0, 0, 0.1)',
      }}>
           <div style={{ alignItems: 'center',  justifyContent: 'center',top: '-2rem', position: 'relative',display: 'flex',backgroundColor: 'white',width:"5rem",borderRadius: '50%',height: '5rem',margin: '0 auto',marginBottom:"1" }}><img src={progress3} alt="" /></div>
        <p style={{ textAlign: 'center', fontSize: '1rem', padding: '2rem', fontWeight: '600', margin: '0' ,bottom: '3rem', position: 'relative'}}>
          Select the appliances you use at your home
        </p>

        <div style={{
  display: 'grid',
  gridTemplateColumns: "repeat(3, 1fr)",
  gap: '1rem',
  justifyContent: 'center',
  width: '75%', 
  margin: '0 auto', 


}}>
  {Appliances.map((item, index) => (
    <div
      key={index}
      onClick={() => handlePreferenceClick(index)}
      style={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        textAlign: 'center',
        position: 'relative',
        bottom: '3rem',
        justifyContent: 'center',
        width: '3.5rem', 
        height: '3rem', 
        padding: '1rem',
        borderRadius: '7px',
        backgroundColor: item.bg,
        border: selectedIndices.includes(index) ? item. 
        border : "none", 
        cursor: 'pointer',
        gridColumn: (index === 6) ? '2 / span 1' : 'auto',
      }}
    >
      <p style={{ fontSize: '14px', margin: '0', wordBreak: 'break-word', fontWeight: '500' }}>{item.name}</p>
    </div>
  ))}
</div>


        <div style={{ display: 'flex', justifyContent: 'space-evenly', padding: '1rem', bottom: '2rem', position: 'relative' }}>
          <button
            style={{
              color: 'rgb(112,168,239)', cursor: 'pointer', fontSize: '1rem',
              fontWeight: '600', width: '10rem', height: '3rem', 
              backgroundColor: "rgb(230,238,250)", border: "none", borderRadius: "5px"
            }}
            onClick={() => navigate(-1)}
          >
            Back
          </button>
          <button
            style={{
              color: 'white', cursor: 'pointer', fontSize: '1rem',
              fontWeight: '600', width: '10rem', height: '3rem', 
              backgroundColor: "#1d78ec", border: "none", borderRadius: "5px"
            }}
            onClick={handleNext}
          >
            Next
          </button>
        </div>
      </div>
    </div>
  );
}

export default Electricity;
