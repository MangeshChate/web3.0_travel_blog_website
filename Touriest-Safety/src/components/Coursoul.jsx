import React from 'react'
import imageone from "../assets/cyberpunkone.png"
import imagetwo from "../assets/cyberpunktwo.png"
import imagethree from "../assets/cyberpunkthree.png"
import { Link } from 'react-router-dom'

function Coursoul() {
  return (

    <div id="carouselExampleAutoplaying " className="carousel slide vh-100 bg-primary" data-bs-ride="carousel">
      <div className='fs-1 absolute z-50 flex  items-center h-100 justify-center text-light w-100'>
        <div className='flex flex-col items-center justify-center container '>
          <div className='row flex justify-center items-center'>
            <div className='col-6 flex flex-col gap-4 bg-dark p-5 bg-opacity-50 rounded-lg'>
            <span className='fw-bold text-6xl w-100'>Experience travel like never before with decentralized bloging</span>

              <Link to="/profile" className="btn w-25 bg-purple-700 hover:bg-blue-700 rounded-full text-light fw-bold btn-lg">Get Started</Link>

            </div>
            <div className='col-6 flex items-center justify-center'>
                <img src="https://mir-s3-cdn-cf.behance.net/projects/404/79c6cd145407801.Y3JvcCwxMzgwLDEwODAsMzAwLDA.png" alt="" />
            </div>
          </div>
        </div>
      </div>
      <div className="carousel-inner">
        <div className="carousel-item active" style={{ backgroundImage: `url(${imageone})`, backgroundRepeat: "none", backgroundPosition: "center", backgroundSize: "fit", backgroundPositionX: "center" }}>
          <div style={{ height: "58rem" }}>

          </div>
        </div>
        <div className="carousel-item " style={{ backgroundImage: `url(${imagetwo})`, backgroundRepeat: "none", backgroundPosition: "center", backgroundSize: "cover" }}>
          <div style={{ height: "58rem" }}></div>
        </div>
        <div className="carousel-item " style={{ backgroundImage: `url(${imagethree})`, backgroundRepeat: "none", backgroundPosition: "center", backgroundSize: "cover" }}>
          <div style={{ height: "58rem" }}></div>
        </div>
      </div>
      <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleAutoplaying" data-bs-slide="prev">
        <span className="carousel-control-prev-icon" aria-hidden="true"></span>
        <span className="visually-hidden">Previous</span>
      </button>
      <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleAutoplaying" data-bs-slide="next">
        <span className="carousel-control-next-icon" aria-hidden="true"></span>
        <span className="visually-hidden">Next</span>
      </button>
    </div>

  )
}

export default Coursoul
