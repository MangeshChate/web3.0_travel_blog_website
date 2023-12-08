import { Window } from '@mui/icons-material';
import React from 'react'
import { Link } from 'react-router-dom';

function Show() {
    const selectedCardName = localStorage.getItem('selectedCardName');
    const selectedCardTitle = localStorage.getItem('selectedCardTitle');
    const selectedCardImage = localStorage.getItem('selectedCardImage');
    const selectedCardBlog = localStorage.getItem('selectedCardBlog');
    const selectedCardProfileImg = localStorage.getItem('selectedCardProfileImg');
    const selectedCardPlace = localStorage.getItem('selectedCardPlace');
    const selectedCardAbout = localStorage.getItem('selectedCardAbout');


    return (
        <div className='vh-100' style={{ backgroundImage: "url('https://images.unsplash.com/photo-1519608487953-e999c86e7455?q=80&w=1000&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8N3x8Y3liZXJwdW5rfGVufDB8fDB8fHww')", backgroundPosition: "center", backgroundRepeat: "none", backgroundSize: "cover" }} >
            <div className='pt-[150px]'>
                <div className='mt-5 text-light'>
                    <div className='ms-5 mb-3 flex justify-between me-5'>
                        <span className=' text-5xl fw-bold '>
                            {selectedCardTitle} - {selectedCardPlace}
                        </span>
                        <Link to="/main">

                            <Window className='fs-1 cursor-pointer' />
                        </Link>

                    </div>
                    <div className="row w-100 gap-5 mt-5">

                        <div className="col-3 p-5 white-blur-glass flex  justify-center ">
                            <div className=' items-center gap-3'>
                                <span className='flex justify-center'>
                                    <img src={selectedCardProfileImg} alt="" className='w-[100px] h-[100px] rounded-full object-cover' />
                                </span>
                                <div className='flex flex-col text-center'>
                                    <span className='text-3xl font-bold mt-3'>{selectedCardName}</span>
                                    <span className='mt-5 pt-4 h-[300px] text-lg'>
                                    In the dynamic and fast-paced world of technology, my ability to adapt, learn, and problem-solve positions me as a valuable asset in any development endeavor. I take pride in my role as a developer, shaping the digital future through the art and science of coding.

                                    </span>
                                </div>
                            </div>

                        </div>
                        <div className="col blue-blur-glass overflow-y-scroll h-[600px]">
                            <div className=" p-3 flex flex-col justify-center items-center">
                                <img src={selectedCardImage} alt="" className='w-[800px] max-h-[500px] rounded-4' />
                            </div>
                            <div className='container text-2xl p-5 me-5 ms-5'>
                               {selectedCardBlog}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Show
