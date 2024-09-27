import React, { useState } from 'react';
import bg3 from '../../assets/shankari/bg3.png';
import nonveg from '../../assets/shankari/nonveg.png';
import both from '../../assets/shankari/both.png';
import { useNavigate } from 'react-router-dom';
import { IoTriangleSharp } from "react-icons/io5";
import progress4 from '../../assets/shankari/progress4.png';



const Appliances = () => {
  const navigate = useNavigate();
  const [selectedIndex, setSelectedIndex] = useState(null);

 

  return (
    <div style={{ height: '100vh', width: '412px', position: 'relative' }}>
      
      <>
      <div style={{
        backgroundImage: `url(${bg3})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        height: '50vh',
        width: '100%',
        position: 'absolute',
      }}>
      </div>
      <div style={{ position: 'absolute', top: '4vh', fontSize: '1rem', fontWeight: '600', textAlign: 'center', width: '100%' ,display: 'flex', justifyContent: 'center'}}>
      <IoTriangleSharp  color='red' style={{marginRight: '0.5rem'}}/>
      <div >17.67 ton CO2</div></div>
     
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
        boxShadow: '0 -5px 10px rgba(0, 0, 0, 0.1)'
      }}>
         <div style={{ alignItems: 'center',  justifyContent: 'center',top: '-2rem', position: 'relative',display: 'flex',backgroundColor: 'white',width:"5rem",borderRadius: '50%',height: '5rem',margin: '0 auto',marginBottom:"1" }}><img src={progress4} alt="" /></div>
        <p style={{ textAlign: 'center', fontSize: '1rem', padding: '2rem', fontWeight: '600', margin: '0' ,wordBreak: 'break-word',bottom: '3rem', position: 'relative'}}>
          How much electricity do you consume for a month?
        </p>
   
        <div style={{ display: 'flex', justifyContent: 'space-evenly', padding: '1rem', marginTop: '2.9rem', position: 'relative',bottom: '2rem' }}>
          
          <button style={{ color: 'white', cursor: 'pointer', fontSize: '1rem', fontWeight: '600',width: '24rem', height: '3rem',backgroundColor:"#1d78ec",border:"none",borderRadius:"5px" }} onClick={() => navigate('/electricity')}>Calculate carbon footprint</button>
        </div>
      </div>
    </div>
  );
}

export default Appliances;
