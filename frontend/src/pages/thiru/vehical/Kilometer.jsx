import React,{useState} from 'react'
import { useNavigate } from 'react-router-dom'
import option1 from "../../../assets/thiru/option1.svg" 
import { IoTriangleSharp } from "react-icons/io5";
const Kilometer = () => {
    const navigate =useNavigate();
    const [qus,setQus]=useState("How many kilometers you drive per week?")
    const [value, setValue] = useState(0); // Initial value of the slider is 0

  // Update the value state as slider moves
  const handleValueChange = (event) => {
    setValue(event.target.value);
  };
  return (
    <div className='tmain'>
        <>
      <div style={{ position: 'absolute', top: '4vh', fontSize: '1rem', fontWeight: '600', textAlign: 'center', width: '100%' ,display: 'flex', justifyContent: 'center'}}>
      <IoTriangleSharp  color='red' style={{marginRight: '0.5rem'}}/>
      <div >17.67 ton CO2</div></div></>
        <div className='tbox'>
        <div className='tround'><img src = {option1} alt="" /></div>
        <div className='tqus'>{qus}</div>
        <div className='tnovehicel'>
            <div style={{background:"#0E70EB",width:"1%",height:"30%",borderRadius:"10px"}}></div>
            <input type="range" value={value} style={{width:"90%",height:"8px",borderRadius:"0px"}} min={0} max={250} onChange={handleValueChange}/>
             <div style={{background:"#0E70EB",width:"1%",height:"30%",borderRadius:"10px"}}></div>
             </div>
             <div style={{display:"flex",justifyContent:"space-between",width:"90%",marginBottom:"10%",position:'relative',marginTop:"-5%"}}>
                <div>10km</div>
                <div>250km</div>
             </div>
        <div style={{ textAlign: 'center',borderRadius:"5PX", marginBottom: '1rem', fontWeight: '600', fontSize: '1.2rem',backgroundColor:"rgb(255,244,228)",color:"rgb(255,152,14)",width:"6rem" }}>
          {value} units
        </div>
            <div className='tnextfuel' style={{marginTop:"10%"}}>
                <button onClick={()=>navigate(-1)} className='tbut1'>Back</button>
                <button onClick={()=>navigate("/preferences")} className='tbut2'>Next</button>
            </div>
        </div>
    </div>
  )
}

export default Kilometer