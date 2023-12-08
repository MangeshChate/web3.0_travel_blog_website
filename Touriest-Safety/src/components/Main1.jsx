import React from 'react'

function Main1() {
  return (
    <div id="metamask" className=' h-[90vh] p-5 d-flex text-light flex-column align-items-center rounded-bottom-5' style={{ backgroundImage: "url('https://wallpaperaccess.com/full/158905.jpg')" }}>
      <div className='w-100 h-100 items-center justify-center flex flex-col bg-dark rounded-5 bg-opacity-50'>

        <div className='d-flex flex-column fw-bolder justify-content-center align-items-center'>
          <span className='mt-3' style={{ fontSize: "3.5rem" }}>Decentralized Travel Magic</span>
          <span className='text-blue-400' style={{ fontSize: "3.5rem" }}>Install MetaMask for Blockchain Interaction</span>
        </div>


        <div className="container row mt-5">
          <div className="col-6 blue-blur-glass p-4 rounded-5">
            <div className='mt-4'>
              <h4 className='fw-bold fs-5'>1. Install MetaMask Extension</h4>
              <p className='text-secondary'>Enhance your experience by installing MetaMask. It's quick, secure, and the key to unlocking exclusive features on our platform. No registration fees – just seamless interaction!</p>
            </div>

            <div className='mt-4'>
              <h4 className='fw-bold fs-5'>2. Connect Your Wallet</h4>
              <p className='text-secondary'>Once MetaMask is installed, connect your wallet to access personalized services. It's the gateway to a world of hassle-free and secure transactions.</p>
            </div>



            <div className='mt-4'>
              <h4 className='fw-bold fs-5'>4. Start Exploring!</h4>
              <p className='text-secondary'>With MetaMask installed, wallet connected, and funds ready, you're all set to embark on a seamless and secure exploration of our diverse travel offerings. Let the adventures begin!</p>
            </div>


            <div className="mt-5">
              <a target="_blank" href="https://chromewebstore.google.com/detail/metamask/nkbihfbeogaeaoehlefnkodbefgpgknn"
               className='btn btn-primary shadow fw-bold text-light  bg-blue-700 rounded-full' >
                Install MetaMask
              </a>


            </div>
          </div>
          <div className="col-6 p-3 flex justify-center items-center  rounded-4">

            <img src="https://houseoffirst.com/images/misc/mm_twitch_no_matte.gif" className='w-[400px]' alt="" />
          </div>

        </div>
      </div>
    </div>
  )
}

export default Main1
