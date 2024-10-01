import React, { useState,useEffect } from "react";
import "./Karma.css";
import { useNavigate } from "react-router-dom";
import axios from "axios";

function Input() {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    email: "",
    location: "",
    trees: "",
    behalfName: "",
  });

  const [errors, setErrors] = useState({});

  const formFields = [
    { label: "Your Name", key: "name", placeholder: "Your Name", required: true ,type:"text"},
    { label: "Phone Number", key: "phone", placeholder: "Phone Number", required: true ,type:"text"},
    { label: "Email", key: "email", placeholder: "Email", required: true,type:"text" },
    { label: "Location", key: "location", placeholder: "Location", required: true ,type:"text"},
    { label: "How many Trees you want to plant?", key: "trees", placeholder: "Number of Trees", required: true,type:"number" },
    { label: "Name to be plant on behalf on?", key: "behalfName", placeholder: "Name on behalf of", required: true,type:"text" },
  ];

  
  const handleInputChange = (e, key) => {
    setFormData({
      ...formData,
      [key]: e.target.value,
    });
    setErrors({
      ...errors,
      [key]: false,
    });
  };

  const handleSubmit =async () => {
    const newErrors = {};
    let hasErrors = false;

    formFields.forEach((field) => {
      if (field.required && !formData[field.key]) {
        newErrors[field.key] = true;
        hasErrors = true;
      }
    });

  
    const postData = {
      userID: 5,
      name: formData.name,
      phonenumber: formData.phone, 
      email: formData.email,
      location: formData.location,
      countOfPlants: formData.trees,
      beHalfOfName: formData.behalfName,
     
    };
    
    if (!hasErrors) {
      try {
        const response = await axios.post("http://localhost:8081/api/v1/surveyData/survey", postData);
        console.log(response.data);
      } catch (error) {
         console.log('Error', error.message);
        }
      }
      
    

    if (hasErrors) {
      setErrors(newErrors);
    } else {
      navigate("/selva/tick"); 
    }
  };


  return (
    <div className="S_outline ">
      <div className="S_input">
        <div className="Sone">
          <div className="Sone1"> Fill out the form</div>
          <div className="Sone2">Our team will reach out to you to help with your tree plantation</div>
        </div>

        {/* Mapping over formFields array to generate input fields */}
        {formFields.map((field, index) => (
          <div className="input-container" key={index}>
            <label className={`placeholder ${formData[field.key] ? "hidden" : ""}`}>
              {field.label} {field.required && <span className="red">*</span>}
            </label>
            <input
              className={`Stwo ${errors[field.key] ? "error-border" : ""}`}
              type={field.type}
              value={formData[field.key]}
              onChange={(e) => handleInputChange(e, field.key)}
            />
          </div>
        ))}

        <div className="Sthree">
          <button className="Sthree1" onClick={handleSubmit}>Submit</button>
        </div>
      </div>
    </div>
  );
}

export default Input;
