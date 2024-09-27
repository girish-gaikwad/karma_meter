import React,{useState} from 'react'
import { useNavigate } from 'react-router-dom'
import option1 from "../../../assets/thiru/option1.svg" 
const Noofvehicel = () => {
    const navigate =useNavigate();
    const [qus,setQus]=useState("How many vehicles do you own?")
  return (
    <div className='tmain'>
        <div className='tbox'>
        <div className='tround'><img src = {option1} alt="" /></div>
        <div className='tqus'>{qus}</div>
        <div className='tnovehicel'> </div>
            <div className='tnextfuel' style={{marginTop:"30%"}}>
                <button onClick={()=>navigate(-1)} className='tbut1'>Back</button>
                <button onClick={()=>navigate("/vehical/fuel")} className='tbut2'>Next</button>
            </div>
        </div>
    </div>
  )
}

export default Noofvehicel