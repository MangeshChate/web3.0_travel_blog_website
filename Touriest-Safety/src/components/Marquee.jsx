import React from 'react'

function Marquee() {
  return (
    <div >
      
      <div className='bg-primary p-1  text-light fw-bold  shadow-lg' style={{ fontSize: "1.3rem" }}>
        <marquee behavior="scroll" direction="left">
        Discover hidden treasures, connect with diverse cultures, and create memories that will last a lifetime. At ViceCity Bloging, we believe that every adventure should be unique, and every destination holds a story waiting to be told.
        </marquee>

      </div>
    </div>
  )
}

export default Marquee
