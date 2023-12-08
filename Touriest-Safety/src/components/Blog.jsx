import React, { useEffect, useState } from 'react';
import Card from './Card';
import { Add, Close } from '@mui/icons-material';
import axios from 'axios';
import { CircularProgress } from '@mui/material';

function Blog({ contract, account, provider }) {
    const [isModalOpen, setModalOpen] = useState(false);
    const [file, setFile] = useState(null);
    const [uploadingImage, setUploadingImage] = useState(false);
    const [imagePreview, setImagePreview] = useState(null);
    const [isLoading, setIsLoading] = useState(false);
    const [data, setData] = useState([]);
    const [title, setTitle] = useState('')
    const [place, setPlace] = useState('')
    const [blog, setBlog] = useState('')
    const [name, setName] = useState('');
    const [profileImg, setProfileImg] = useState('');
    const [aboutus, setAboutus] = useState('');

    const handleAddClick = () => {
        setModalOpen(true);
    };


    const handleCloseModal = () => {
        setModalOpen(false);
    };

    const handleImageChange = (e) => {
        const file = e.target.files[0];

        setImagePreview(URL.createObjectURL(file));
        setFile(file);
    };

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

                const tx = await contract.addPost(name, title, profileImg, ImgHash, blog, place, about)
                await tx.wait();

                setUploadingImage(false);
                setModalOpen(false);
                setImagePreview(null)

                // Add further logic as needed
            } catch (error) {
                console.error('Error uploading file:', error);
                setUploadingImage(false);
                // Handle errors appropriately
            }
        }
    };

    useEffect(() => {
        const fetchData = async () => {
            try {
                if (contract) {
                    const dataArray = await contract.getProfile();
                    // console.log('Raw Data:', dataArray);

                    setName(dataArray[1]);
                    setProfileImg(dataArray[2]);
                    setAboutus(dataArray[3]);




                }
            } catch (error) {
                console.error('Error fetching data:', error);
                alert('An error occurred while fetching data.');
            }
        };

        fetchData();
    }, [contract, setIsLoading]);


    useEffect(() => {
        const fetchData = async () => {
            try {
                if (contract) {
                    const dataArray = await contract.getPosts();
                    setData(dataArray)


                }
            } catch (error) {
                console.error('Error fetching data:', error);
                alert('An error occurred while fetching data.');
            }
        };

        fetchData();
    }, [contract]);


    return (
        <div id="blog" className='vh-100 vw-100 overflow-y-scroll' style={{ backgroundImage: "url('https://steamuserimages-a.akamaihd.net/ugc/875244468225515264/214231A4122AC0492F8EE017FF003FAF512A53A7/?imw=1024&imh=576&ima=fit&impolicy=Letterbox&imcolor=%23000000&letterbox=true')", backgroundRepeat: "none", backgroundPosition: "center" }}>
            <div className='pt-5'>
                <div className='p-3 mt-[200px]'>
                    <div className='grid grid-cols-4 gap-3'>
                        {data.map((data) => (

                            <Card
                                name={data.name}
                                title={data.title}
                                blog={data.description}
                                place={data.place}
                                profileImg={data.profileImg}
                                image={data.image}
                                aboutus={data.aboutus}
                            />


                        ))}


                    </div>
                    <div onClick={handleAddClick} className='absolute z-[100rem] bottom-5 right-5 p-3 rounded-full text-light bg-purple-700'>
                        <Add className='fs-1' />
                    </div>
                    {isModalOpen && (
                        <div className="fixed inset-0 z-[200] flex items-center justify-center">
                            <div className="fixed inset-0 opacity-50"></div>
                            <div className=' '>
                                <form onSubmit={handleSubmit} className="border-3 white-blur-glass-r text-light p-8 rounded-md z-10">

                                    <span className='flex justify-end w-100'>
                                        <div onClick={handleCloseModal}>
                                            <Close className='fs-1 fw-bold cursor-pointer text-end z-50' />
                                        </div>
                                    </span>


                                    <h2 className="text-2xl font-bold mb-4 text-center">Create a Blog</h2>
                                    <hr />
                                    <label htmlFor="name mt-3">Title:</label>
                                    <input
                                        type="text"
                                        id="name"
                                        className="border p-2 mb-4 w-full text-dark"
                                        placeholder='Add title'
                                        value={title}
                                        onChange={(e) => setTitle(e.target.value)}
                                    />
                                    <label htmlFor="profileImage">Upload Profile Image</label>
                                    <input
                                        type="file"
                                        accept="image/*"
                                        id="profileImage"
                                        className='form-control white-glassmorphism bg-light bg-opacity-25 text-dark'
                                        onChange={handleImageChange}
                                        required
                                    />
                                    {/* Display image preview */}
                                    {imagePreview && (
                                        <img
                                            src={imagePreview}
                                            className='object-fit-cover'
                                            alt="Profile Preview"
                                            style={{ height: '200px', width: '200px', marginTop: '10px' }}
                                        />
                                    )}

                                    <label htmlFor="name" className='mt-4'>Place:</label>
                                    <input
                                        type="text"
                                        id="name"
                                        className="border p-2   mb-4 w-full text-dark"
                                        placeholder='Your Location'
                                        value={place}
                                        onChange={(e) => setPlace(e.target.value)}
                                    />

                                    <textarea
                                        id="about"
                                        className="border pb-5 p-1 rounded-2 mb-4 w-full mt-4 text-dark"
                                        placeholder='Start writing Blog here ...'
                                        value={blog}
                                        onChange={(e) => setBlog(e.target.value)}
                                    ></textarea>
                                    <div className="flex justify-center">
                                        <button
                                            type="submit"
                                            className='btn  rounded-5 w-75 m-3 bg-opacity-50  fs-4 fw-bold shadow-lg text-light  mt-4'
                                            style={{ backgroundColor: 'darkorange' }}
                                            disabled={uploadingImage}
                                        >
                                            {uploadingImage ? <CircularProgress style={{ fontSize: '0.8rem' }} /> : 'Upload'}
                                        </button>

                                    </div>
                                </form>
                            </div>
                        </div>
                    )}
                </div>
            </div>
        </div>
    );
}

export default Blog;
