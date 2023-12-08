import React from 'react'

function Login() {
  return (
    <div className=' text-light p-5 d-flex flex-column align-items-center justify-content-center' style={{ backgroundImage: "url('https://im.idiva.com/content/2015/Jun/giphy.gif')", backgroundRepeat: "none", backgroundSize: "cover" }}>

      <h1 className=' fs-1 fw-bold'>Sign In</h1>
      <div className="container bg-light m-5 p-5 ">
        <form className="form" onSubmit={handleSubmit}>
          <div className="container w-75 ">
            <div className='d-flex'>
              <input type="text" className="form-control shadow border-0 m-3 p-3" placeholder='Enter Name' ref={name} />
              <input type="number" className="form-control shadow border-0  m-3 p-3" placeholder='Enter Mobile No.' ref={number} />

            </div>
            <div className='d-flex'>
              <input type="password" className="form-control shadow border-0  m-3 p-3" placeholder='Enter Password' ref={password} />
              <input type="password" className="form-control shadow border-0  m-3 p-3" placeholder='Enter Confirm password' ref={passwordAgain} />

            </div>
            <button className="btn btn-primary btn-lg m-3 shadow-lg rounded-0 border-0 " type="submit">SIGN UP</button>
          </div>
        </form>
      </div>
    </div>
  )
}

export default Login
