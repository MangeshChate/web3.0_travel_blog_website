import React, { useState } from 'react';
import { CircularProgress } from '@mui/material';
import axios from 'axios';
import cyberpunkthree from "../assets/cyberpunkthree.png";
import { ArrowForward, Forward } from '@mui/icons-material';
import { Link } from 'react-router-dom';

function Profile({ account, contract }) {
  const [name, setName] = useState('');
  const [about, setAbout] = useState('');
  const [file, setFile] = useState(null);
  const [uploadingImage, setUploadingImage] = useState(false);
  const [imagePreview, setImagePreview] = useState(null);

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (file) {
      try {
        setUploadingImage(true);

        const formData = new FormData();
        formData.append('file', file);

        const resFile = await axios.post(
          'https://api.pinata.cloud/pinning/pinFileToIPFS',
          formData,
          {
            headers: {
              pinata_api_key: '9c7b88953bed4a983af8',
              pinata_secret_api_key: '53203490d2e84a0bdd80876d540cf493372e714d7ebdeccfc34d1692274c3ad3',
              'Content-Type': 'multipart/form-data',
            },
          }
        );

        const ImgHash = `https://gateway.pinata.cloud/ipfs/${resFile.data.IpfsHash}`;

        const tx = await contract.setProfile(account, name, ImgHash, about);
        await tx.wait(); // Wait for the transaction receipt

        setUploadingImage(false);

        // Reset state after successful transaction
        setName('');
        setAbout('');
        setFile(null);
        setImagePreview(null);

        alert('Profile updated successfully!');
      } catch (error) {
        console.error('Error:', error);
        alert('Transaction failed. Please check the console for details.');
        setUploadingImage(false);
      }
    }
  };


  const handleImageChange = (e) => {
    const file = e.target.files[0];

    setImagePreview(URL.createObjectURL(file));
    setFile(file);
  };

  return (
    <div className='vh-100 ' style={{ backgroundImage: `url(${cyberpunkthree})` }}>
      <div className="container-fluid items-center gap-3  justify-end mt-[200px] absolute flex text-2xl z-50 text-light">
        <Link to="/main" className='cursor-pointer flex items-center gap-3 '>

          <span>Already Have an Account ?</span>
          <ArrowForward />
        </Link>
      </div>
      <div className="w-100 h-100 white-blur-glass">
        <div className="mt-[150px] ">
          <div className="row h-[80vh]">
            <div className="col-6 flex-col gap-4 flex justify-center items-center h-100 text-light">
              <span className='text-6xl fw-bold'>Personalize Your Profile</span>
              <span className='text-3xl'>(You can change it anytime)</span>
            </div>
            <div className="col-6 flex justify-center items-center ">
              <div className="m-3 p-4 white-blur-glass w-100 rounded-4">
                <form className='p-3' onSubmit={handleSubmit}>
                  <div className='fw-medium d-flex flex-column gap-2 m-2'>
                    <label htmlFor="profileImage">Upload Profile Image</label>
                    <input
                      type="file"
                      accept="image/*"
                      id="profileImage"
                      className='form-control white-glassmorphism bg-light bg-opacity-25 text-light '
                      onChange={handleImageChange}
                      required
                    />
                  </div>

                  {/* Display image preview */}
                  {imagePreview && (
                    <img
                      src={imagePreview}
                      className='object-fit-cover'
                      alt="Profile Preview"
                      style={{ height: '200px', width: '200px', marginTop: '10px', borderRadius: '50%' }}
                    />
                  )}

                  <input
                    type="text"
                    placeholder='Enter Username'
                    className='p-3 form-control m-2 mt-3 white-glassmorphism bg-light bg-opacity-25 text-light border-0 fs-5'
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    required
                  />
                  <textarea
                    name=""
                    className='mt-3 m-2 form-control bg-light bg-opacity-25 white-glassmorphism text-light pb-5 fs-5'
                    placeholder='Tell me something about yourself ....'
                    value={about}
                    onChange={(e) => setAbout(e.target.value)}
                    required
                  ></textarea>

                  <button
                    type="submit"
                    className='btn  rounded-5 w-100 m-3 bg-opacity-50  fs-4 fw-bold shadow-lg text-light  mt-4'
                    style={{ backgroundColor: 'darkorange' }}
                    disabled={uploadingImage}
                  >
                    {uploadingImage ? <CircularProgress style={{ fontSize: '0.8rem' }} /> : 'Let\'s Start'}
                  </button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Profile;
