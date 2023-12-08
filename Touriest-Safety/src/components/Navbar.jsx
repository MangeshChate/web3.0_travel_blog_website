import React from 'react'
import InstagramIcon from '@mui/icons-material/Instagram';
import TwitterIcon from '@mui/icons-material/Twitter';
import FacebookIcon from '@mui/icons-material/Facebook';
import FavoriteIcon from '@mui/icons-material/Favorite';
import ThunderstormIcon from '@mui/icons-material/Thunderstorm';
import { Link } from 'react-router-dom'
function Navbar() {
  return (

    <nav>

      <div className='container-fluid p-3 absolute z-[100] bg-primary text-light bg-opacity-25'>
       

        <div className="row navbar navbar-expand-lg d-flex  ">
          <div className="container-fluid ">
            <span className='navbar-brand flex '>

              <img src="https://mir-s3-cdn-cf.behance.net/projects/404/79c6cd145407801.Y3JvcCwxMzgwLDEwODAsMzAwLDA.png" alt="" className='navbar-brand' width="100" />

            <div className='flex  items-center justify-center flex-col text-light'>
              <span className='fw-bold text-2xl'>Vice City</span>
              <span className='text-small '>Tourism Bloging</span>
            </div>
            </span>
            <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
              <span class="navbar-toggler-icon"></span>
            </button>
            <div class=" navbar-collapse d-flex justify-content-end " id="navbarNav">
              <ul class="navbar-nav d-flex align-items-center text-white">
                <Link to="/" class="nav-item">
                  <a class="nav-link text-light" aria-current="page" href="#">HOME</a>
                </Link>
                <Link to="/profile" class="nav-item me-3">
                  <a class="nav-link text-light" >Create Profile</a>
                </Link>
                <li class="nav-item me-3">
                  <a class="nav-link text-light" href="#metamask">Metamask Installation</a>
                </li>
                <li class="nav-item me-3">
                  <a class="nav-link text-light" href="#features">features</a>
                </li>
                <Link to="/main" class="nav-item me-3">
                  <a class="nav-link text-light" href="#">blogs</a>
                </Link>
                <li class="nav-item me-3">
                  <a href="#explore" class="nav-link text-light" >explore</a>
                </li>
              
                <li class="nav-item  me-3">
                  <button className='btn  shadow text-light bg-blue-700 rounded-5'>
                    <Link to="/profile" className="text-light text-decoration-none">
                      <span>Get Started</span>
                    </Link>
                  </button>
                </li>

              </ul>
            </div>
          </div>


        </div>


      </div>
    </nav>

  )
}

export default Navbar
