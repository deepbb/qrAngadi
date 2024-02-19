import React, { useState } from "react";
import "./Login.css";
import SignupForm from "../signup/Group 6741@2x.png";
import Logo from "../signup/Group 6742.png";
import { useNavigate } from "react-router-dom";
import { BaseUrl } from "../../Api/BaseUrl";

function Login() {
  const [isChecked, setChecked] = useState(false);

  const handleCheckboxChange = () => {
    setChecked(!isChecked);
  };

  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    Email: "",
    Password: "",
  });   


  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({ ...prevData, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    // Add your logic here to handle form submission
    console.log("Form submitted:", formData);
    try {
      const response = await fetch(
        `${BaseUrl}/Users/Signin`,
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(formData),
        }
      );

      if (response.ok) {
        const data = await response.json();
        console.log("Signin successful:", data);
        alert("Successfully Created Account");

        localStorage.setItem("token", data.token);
        localStorage.setItem("userData", JSON.stringify(formData));
        navigate("/");
        // You can add further logic for successful signup
      } else {
        const errorData = await response.json();
        console.error('Sigin failed:', errorData);
        alert(errorData.message)
        // You can handle errors appropriately
      }
    } catch (error) {
      console.error("Error during sigin:", error.message);
      alert(error.message);
    }
  };
  return (
    <div className='signup'>
       <div className='signup_form'>
            <img src={SignupForm} alt='' className='form_background' />
            <div className='signup_container'>
              <div className='signup_logo'>
                  <img src={Logo} alt='' style={{width:"70%"}} />
              </div>
              <div className='form_container'>
                <span style={{fontFamily:'Poppins',fontSize:16}}>Sign in</span>
                <span style={{fontSize:14}}>New user?</span> <span style={{fontSize:14,color:'#F48020'}}>sigup</span>
              <form onSubmit={handleSubmit} className='submit_form' >
                <div className='name_form'>
                
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
      <div style={{display:'flex',alignItems:'center',justifyContent:'space-between'}}>
      <input
        type="checkbox"
        id="keepSignedIn"
        name="keepSignedIn"
        checked={isChecked}
        onChange={handleCheckboxChange}
      />
      <label htmlFor="keepSignedIn">Keep me signed in</label>
</div>

              <button type="submit" className="submit">
                SignIn
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Login;
