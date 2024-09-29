import React, { useState } from 'react';
import bg3 from '../../assets/shankari/bg3.png';
import { useNavigate } from 'react-router-dom';
import { IoTriangleSharp } from "react-icons/io5";
import progress4 from '../../assets/shankari/progress4.png';
import './Appliances.css';

const Appliances = () => {
  const navigate = useNavigate();
  const [value, setValue] = useState(0); // Initial value of the slider is 0

  // Update the value state as slider moves
  const handleValueChange = (event) => {
    setValue(event.target.value);
  };

  // Dynamically generate background for slider

  const sliderBackgroundStyle = {
    backgroundColor: `linear-gradient(to right, rgb(29,120,236) ${value / 10}%, #d3d3d3 0%)`
  };

  return (
    <div style={{ height: '99vh', width: '412px', position: 'relative' }}>

      {/* Background Image */}
      <div style={{
        backgroundImage: `url(${bg3})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        height: '50vh',
        width: '100%',
        position: 'absolute',
      }}>
      </div>

      {/* CO2 Value */}
      <div style={{ position: 'absolute', top: '4vh', fontSize: '1rem', fontWeight: '600',alignItems:"baseline", textAlign: 'center', width: '100%', display: 'flex', justifyContent: 'center' }}>
        <IoTriangleSharp color='red' style={{ marginRight: '0.5rem' }} />

        <div style={{fontWeight:"bold"}}>17.67 ton CO2</div>

      </div>

      {/* Preferences Section */}
      <div style={{
        backgroundColor: 'white',
        height: '50vh',
        width: '100%',
        position: 'absolute',
        top: '46vh',
        borderTopLeftRadius: '40px',
        borderTopRightRadius: '40px',
        zIndex: 1,
        boxShadow: '0 -5px 10px rgba(0, 0, 0, 0.1)'
      }}>
        <div style={{ alignItems: 'center', justifyContent: 'center', top: '-2rem', position: 'relative', display: 'flex', backgroundColor: 'white', width: "6rem", borderRadius: '50%', height: '6rem', margin: '0 auto', marginBottom: "1" }}>
          <img src={progress4} alt="" style={{width:"3.8rem"}} />
        </div>

        {/* Question */}

        <p style={{ textAlign: 'center', fontSize: '1rem', padding: '2rem', fontWeight: '600', margin: '0', wordBreak: 'break-word', bottom: '4rem', position: 'relative' }}>

          How much electricity do you consume for a month?
        </p>
      
        {/* Slider with dynamic fill */}

        <div style={{ display: 'flex', height: '20px', alignItems: 'center', borderLeft: "4px solid rgb(29,120,236)", borderRight: "4px solid rgb(29,120,236)", width: "80%", marginLeft: "2rem",position:"relative",bottom:"4rem"}}>
          <input
            type='range'
            min={0} // Minimum value of the slider
            max={1000} 
            step={50}
            value={value} 
            onChange={handleValueChange} 
            style={sliderBackgroundStyle}
          />
        </div>
        <div style={{display:"flex",flexDirection:"row",justifyContent:"space-between",position:"relative",bottom:"3rem",marginLeft:"1rem",marginRight:"1rem",marginBottom:"1rem"}}><p>100 units</p>
        <p>1000 units  </p></div>

        {/* Display Value */}
        <div style={{ textAlign: 'center',borderRadius:"5PX", marginBottom: '1rem', fontWeight: '600', fontSize: '1.2rem',backgroundColor:"rgb(255,244,228)",color:"rgb(255,152,14)",width:"6rem",marginLeft:"10rem",position:"relative",bottom:"3.4rem" }}>
          {value} {value > 1 ? 'units' : 'unit'}
        </div>

        {/* Buttons */}
        <div style={{ display: 'flex', justifyContent: 'space-evenly', padding: '1rem', marginTop: '3.3rem', position: 'relative', bottom: '0.1rem' }}>
          <button style={{ color: 'white', cursor: 'pointer', fontSize: '1rem', fontWeight: '500', width: '24rem', height: '3rem', backgroundColor: "#1d78ec", border: "none", borderRadius: "5px" }} onClick={() => navigate('/display-karma')}>


            Calculate carbon footprint
          </button>
        </div>
      </div>
    </div>
  );
}

export default Appliances;