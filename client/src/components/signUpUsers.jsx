import axios from "axios";
import React, { useState } from "react";

export default function SignUpUsers () {
  const [fullName, setfullName] = useState('')
  const [age, setAge] = useState('')
  const [email, setEmail] = useState('')
  const [pass, setPass] = useState('')
  const [phone, setPhone] = useState('')
  const [postal, setPostal] = useState('')
  const [belongs_to, setbelongs_to] = useState('')
  
  const handleFullNameChange = evt => {

    setfullName(evt.target.value)

  }

  const handleAgeChange = evt => {

    setAge(evt.target.value)

  }

  const handleEmailChange = evt => {

    setEmail(evt.target.value)

  }
  
  const handlePassChange = evt => {

    setPass(evt.target.value)

  }

  const handlePhoneChange = evt => {

    setPhone(evt.target.value)

  }

  const handlePostalChange = evt => {

    setPostal(evt.target.value)

  }

  const handlebelongs_toChange = evt => {

    setbelongs_to(evt.target.value)

  }

  const onSubmit = evt => {

    evt.preventDefault(); 

    const newUser = {

      full_name : fullName,
      age: age,
      email_address : email,
      password: pass,
      phone_number: phone,
      postal_code: postal,
      belongs_to: belongs_to

    }

    axios.post('http://localhost:8000/register', {newUser})
    .then((res)=> {

      console.log('res LINE 74', res);
      console.log('res.data LINE 75',res.data);

    })     
  }

    
    
  return (
    
    <form onSubmit = {onSubmit}>

    <h3>Register - Users</h3>

    <div className="form-group">
        <label>Full Name</label>
        <input type = "fullName" name = "fullName" onChange ={handleFullNameChange} className="form-control" placeholder="Enter email" />
    </div>

    <div className="form-group">
        <label>Age</label>
        <input type = "age" name = "age" onChange ={handleAgeChange} className="form-control" placeholder="Enter Age" />
    </div>

    <div className="form-group">
        <label>Email</label>
        <input type = "email" name = "email" onChange ={handleEmailChange} className="form-control" placeholder="Enter Email" />
    </div>

    <div className="form-group">
        <label>Password</label>
        <input type = "password" name = "password" onChange ={handlePassChange} className="form-control" placeholder="Enter Password" />
    </div>


    <div className="form-group">
        <label>Phone Number</label>
        <input type = "phoneNumber" name = "phoneNumber" onChange ={handlePhoneChange} className="form-control" placeholder="Enter Phone Number" />
    </div>


    <div className="form-group">
        <label>Postal Code</label>
        <input type = "postalCode" name = "postalCode" onChange ={handlePostalChange} className="form-control" placeholder="Enter Postal Code" />
    </div>

    <div className="form-group">
        <label>Afiliations</label>
        <input type = "afiliations" name = "afiliations" onChange ={handlebelongs_toChange} className="form-control" placeholder="Registered, to an LTC, enter it here!" />
    </div>
  

    <button type="submit" className="btn btn-dark btn-lg btn-block">Register</button>
    <p className="forgot-password text-right">
        <a href="/login
        ">Looking to Login?</a>
    </p>
</form>

  );
    
}