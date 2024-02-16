import React, { useState } from 'react'
import "./Signup.css"
import SignupForm from "./Group 6741@2x.png"
import Logo from "./Group 6742.png"
import { useNavigate } from 'react-router-dom';

function Signup() {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    Name: '',
    lastName: '',
    Email: '',
    Password: '',
    ContactNumber: '',
    otp: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({ ...prevData, [name]: value }));
  };

  const handleSubmit = async(e) => {
    e.preventDefault();
    // Add your logic here to handle form submission
    console.log('Form submitted:', formData);
    try {
      const response = await fetch('http://103.120.176.158:9100/api/v1/Users/Signup', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        const data = await response.json();
        console.log('Signup successful:', data);
        alert("Successfully Created Account")

        localStorage.setItem('userData', JSON.stringify(formData));
        navigate('/');
        // You can add further logic for successful signup
      } else {
        const errorData = await response.json();
        console.error('Signup failed:', errorData);
        alert(errorData.message)
        // You can handle errors appropriately
      }
    } catch (error) {
      console.error('Error during signup:', error.message);
      alert(error.message)
    }

  };
  const handleNaviate = ()=> {
    navigate("/")
  }
  return (
    <div className='signup'>
       <div className='signup_form'>
            <img src={SignupForm} alt='' className='form_background' />
            <div className='signup_container'>
              <div className='signup_logo'>
                  <img src={Logo} alt='' style={{width:"70%"}} />
              </div>
              <div className='form_container'>
                <span style={{fontFamily:'Poppins',fontSize:16}}>Create An Account</span>
                <span style={{fontSize:14}}>Already an user?</span> <span style={{fontSize:14,color:'#F48020'}}>signin</span>
              <form onSubmit={handleSubmit} className='submit_form' >
                <div className='name_form'>
      <input
        type="text"
        id="firstName"
        name="Name"
        value={formData.Name}
        onChange={handleChange}
        required
        className='firstname_input'
        placeholder='First Name'
      />
      <input
        type="text"
        id="lastName"
        name="lastName"
        value={formData.lastName}
        onChange={handleChange}
        required
        className='lastname_input'
        placeholder='Last Name'
      />
      </div>
      <input
        type="email"
        id="email"
        name="Email"
        value={formData.Email}
        onChange={handleChange}
        required
        className='input'
        placeholder='Email'
      />
      <input
        type="password"
        id="password"
        name="Password"
        value={formData.Password}
        onChange={handleChange}
        required
        className='input'
        placeholder='Password'
      />
      <input
        type="tel"
        id="mobileNumber"
        name="ContactNumber"
        pattern="[0-9]{10}"
        value={formData.ContactNumber}
        onChange={handleChange}
        required
        className='input'
        placeholder='Mobile Number'
      />
      {/* <span style={{position:'absolute',top:'69%', right:'6%',fontSize:10,fontFamily:'poppins',color:'#F48020',fontWeight:'600',cursor:'pointer'}}>Send OTP</span>
      <input
        type="text"
        id="otp"
        name="otp"
        value={formData.otp}
        onChange={handleChange}
        required
        className='input'
        placeholder='Enter OTP'
      /> */}


      <button type="submit" className='submit'>Submit</button>
      {/* <div className='signinwith'>
        <div className='leftline'></div>
        <div style={{fontSize:12,marginTop:10}}>or signin with</div>
        <div className='rightline'></div>
      </div> */}
    </form>
    <button onClick={handleNaviate}>Navigate</button>
              </div>
            </div>
       </div>
    </div>
  )
}

export default Signup