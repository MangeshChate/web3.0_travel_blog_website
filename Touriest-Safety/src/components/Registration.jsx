import axios from 'axios';
import React, { useEffect, useRef, useState } from 'react'
import { useNavigate } from "react-router-dom";

function Registration() {
  const navigate = useNavigate();
  const name = useRef();
  const email = useRef();
  const password = useRef();
  const passwordAgain = useRef();

  const [reg ,setReg] = useState(false)
  const [log ,setLog] = useState(true);

  const setModal = () =>
  {
    setLog(false);
    setReg(true);
  }
  const setRegModal = () =>{
    setLog(true);
    setReg(false);
  }


  const handleSubmit = async (e) => {
    e.preventDefault();
    if (password.current.value === passwordAgain.current.value) {
      try {
        const response = await axios.post(`https://touriestsafety-default-rtdb.firebaseio.com/registration.json`, {
          "name": name.current.value,
          "email": email.current.value,
          "password": password.current.value

        });

        // Check if the POST request was successful (status code 2xx)
        if (response.status === 200 || response.status === 201) {
          console.log("Registration post success.");
          alert('Registration Successfull .')
        } else {
          console.error("Registration post failed with status code:", response.status);
        }
      } catch (error) {
        console.error("An error occurred while making the registration POST request:", error);
        // Handle the error, show an error message, or perform other actions as needed.
      }
    } else {
      alert(`Passwords don't match`);
    }
  }

  
 
  const handleLogin = async (e) => {
    e.preventDefault();
  

    try {
   
      const response = await axios.get(`https://touriestsafety-default-rtdb.firebaseio.com/registration.json`);

      
      if (response.data) {

        const users = Object.values(response.data);

      
        const user = users.find((userData) => {
          return userData.email === email.current.value && userData.password === password.current.value;
        });
        console.log(user)

        if (user) {
          alert('Login successful.');
          navigate('/')
        } else {
          
          alert('Invalid email or password.');
        }
      } else {
        
        alert('No user data available.');
      }
    } catch (error) {
      console.error('Error logging in:', error);
      alert('Error logging in.');
    }
  };


  return (
    <div className=' text-light p-5 d-flex flex-column align-items-center justify-content-center' style={{ backgroundImage: "url('https://im.idiva.com/content/2015/Jun/giphy.gif')", backgroundRepeat: "none", backgroundSize: "cover" }}>
      <h1 className=' fs-1 fw-bold'>Register / Login</h1>
      <div className="container bg-light m-5 p-5 ">

        {log && (

        <form className="form" onSubmit={handleLogin}>
          <div className="container w-75 ">
            <div className='d-flex'>
              <input type="email" className="form-control shadow border-0  m-3 p-3" placeholder='Enter Email' ref={email} />
            </div>
            <div className='d-flex'>
              <input type="password" className="form-control shadow border-0  m-3 p-3" placeholder='Enter Password' ref={password} />
            </div>
            <button className="btn btn-primary btn-lg m-3 shadow-lg rounded-0 border-0 " type="submit">Sign In</button>
            <div className='text-dark m-3'>Don't have account ? <span className='text-info-emphasis text-decoration-underline' onClick={setModal} style={{cursor:"pointer"}}>Register Here</span> </div>
          </div>
          
        </form>
        )}

        {reg && (
          <form className="form" onSubmit={handleSubmit}>
            <div className="container w-75 ">
              <div className='d-flex'>
                <input type="text" className="form-control shadow border-0 m-3 p-3" placeholder='Enter Name' ref={name} />
                <input type="email" className="form-control shadow border-0  m-3 p-3" placeholder='Enter Email' ref={email} />
              </div>
              <div className='d-flex'>
                <input type="password" className="form-control shadow border-0  m-3 p-3" placeholder='Enter Password' ref={password} />
                <input type="password" className="form-control shadow border-0  m-3 p-3" placeholder='Enter Confirm password' ref={passwordAgain} />
              </div>
              <button className="btn btn-primary btn-lg m-3 shadow-lg rounded-0 border-0 " type="submit">SIGN UP</button>
              <div className='text-dark m-3'>Already have account ? <span className='text-info-emphasis text-decoration-underline' onClick={setRegModal} style={{cursor:"pointer"}}>Login Here</span> </div>
            </div>
          </form>
        )}
      </div>
    </div>
  )
}

export default Registration
