import React from 'react';
import { Link } from 'react-router-dom';

function Card({ name, title, image, blog, profileImg, place ,aboutus }) {
  const handleCardClick = () => {
    // Store values in localStorage
    localStorage.setItem('selectedCardName', name);
    localStorage.setItem('selectedCardTitle', title);
    localStorage.setItem('selectedCardImage', image);
    localStorage.setItem('selectedCardBlog', blog);
    localStorage.setItem('selectedCardProfileImg', profileImg);
    localStorage.setItem('selectedCardPlace', place);
    localStorage.setItem('selectedCardAbout', aboutus);
    console.log(aboutus)

    // Perform other actions as needed
  };

  return (
    <div
      className='card blue-blur-glass text-light rounded-4 ms-1 me-1'
      style={{ width: '440px', height: '320px' }}
      onClick={handleCardClick}
    >
      <div className='card-image'>
        <Link to='/main/show' style={{ cursor: 'pointer' }}>
          <img
            src={image}
            alt=''
            className='img-fluid object-fit-cover p-2 rounded-4'
            style={{ width: '100%', height: '250px' }}
          />
        </Link>
        <div className='m-2 ms-3 d-flex gap-4 align-items-start'>
          <div style={{ display: 'flex', alignItems: 'center' }}>
            <img src={profileImg} style={{ height: '44px', width: '44px', borderRadius: '50%', border: '2px solid white', objectFit: 'cover' }} />
          </div>
          <span>
            <h5 className='fw-bold '>{title}</h5>
            <span className='text-secondary ' style={{ fontSize: '0.9rem' }}>{name}</span>
          </span>
        </div>
      </div>
    </div>
  );
}

export default Card;
