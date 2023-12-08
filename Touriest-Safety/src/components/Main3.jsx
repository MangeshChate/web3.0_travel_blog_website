import React from 'react'
import ArrowRightAltIcon from '@mui/icons-material/ArrowRightAlt';
import { Link } from 'react-router-dom';
function Main3() {
    return (
        <div className="parallax-container rounded-top-5" id="explore">
            <div
                className="parallax-bg"
                style={{
                    backgroundImage: "url('https://images.alphacoders.com/104/1049857.jpg')",
                }}
            ></div>
            <div className="container-fluid position-absolute text-light d-flex justify-content-center align-items-center h-100 w-100 bg-opacity-50 bg-dark">
                <div className='row container'>
                    <div className="col-6 flex flex-col gap-3">

                        <h3 className='text-3xl'>web 3.0 ViceCity Bloging</h3>
                        <h1 className='fw-bold text-5xl'>Explore World</h1>
                        <p className='text-lg'> Showcase popular or exotic destinations with stunning images or short descriptions. This can create a visual appeal and attract users interested in exploring new places.</p>

                        <Link href="#blog" to="/main" className='btn w-25 shadow-lg fw-bold rounded-0 btn-primary'>Explore Blogs <ArrowRightAltIcon/> </Link>
                    </div>

                    <div className="col-6 flex flex-col justify-center items-center">
                        <img src="https://a.travel-assets.com/findyours-php/viewfinder/images/res70/339000/339656-Downtown-Miami.jpg" alt="" className='shadow-lg  rounded-4 w-[500px]' />
                        
                    </div>
                </div>
            </div>
        </div>







    )
}

export default Main3
