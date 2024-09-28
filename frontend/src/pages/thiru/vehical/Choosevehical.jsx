import React,{useState} from 'react'
import "../vehical.css"
import Choose from '../../../components/thiru/Choose'
import motor from "../../../assets/thiru/Motor Scooter@2x.png"
import bicycle2 from "../../../assets/thiru/Bicycle.png"
import auto from "../../../assets/thiru/Automobile.png" 
import option1 from "../../../assets/thiru/option1.svg" 
import { TbTriangleFilled } from "react-icons/tb";
import { useNavigate } from 'react-router-dom'
import { IoTriangleSharp } from "react-icons/io5";
const Choosevehical = () => {
    const navigate =useNavigate();
    const [qus,setQus]=useState("Choose the vehicles you use for commuting?")
    const [border,setBorder]=useState(null)
    const [list,setList]=useState([
        {Name:"Bicycle/Walk",img:bicycle2,baground:"#EEF6FF",border:"lightblue"},
        {Name:"Two wheeler",img:motor,baground:"#FFF4E6",border:"#FFBA63"},
        {Name:"Car",img:auto,baground:"#FFF4F3",border:"#EB7E74"}])
  return (
    <div className='tmain'>
        <>
      <div style={{ position: 'absolute', top: '4vh', fontSize: '1rem', fontWeight: '600', textAlign: 'center', width: '100%' ,display: 'flex', justifyContent: 'center'}}>
      <IoTriangleSharp  color='red' style={{marginRight: '0.5rem'}}/>
      <div >17.67 ton CO2</div></div></>
        <div className='tbox'>
            <div className='tround'><img src = {option1} alt="" /></div>
            <div className='tqus'>{qus}</div>
            <div className='titems'>
                {list.map((item,index)=>(
                    <div className='titem' onClick={()=>setBorder(index)} key={index} style={{backgroundColor:item.baground,gridColumn: index==2?"span 2":"auto",marginLeft:index==0?"35%":index==1?"-35%":"",width:index==2?"27%":"",border:border==index?`2px solid ${item.border}`:"2px solid transparent"}}>
                        <img src={item.img} />
                        <div >{item.Name}</div>
                    </div>
                ))}
            </div>
            <div className='tnext'>
                <button onClick={()=>navigate("/vehical/noofvehicel")}>Next</button>
            </div>
        </div>
        
    </div>
  )
}

export default Choosevehical