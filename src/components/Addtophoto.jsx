import React, { useState } from 'react';

import Admintop from './Admintop';
import Navbar from './Navbar';
import "./admin.css"
//import "../Admin.css"
//import Sidebar from './Sidebar';



const Addtopphoto = () => {
  const [description, setDescription] = useState('');
  const [imageUrl, setImageUrl] = useState('');
  const [baseurl, setBaseurl] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const data = {
        description,
        imageUrl,
        baseurl,
      };

      // Send a POST request to the new URL
      const response = await fetch('https://benevolent-kitsune-f1c5de.netlify.app/api/top-photo', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(data),
      });

      if (response.ok) {
        console.log('Data successfully sent.');
        // Reset form fields
        setDescription("");
        setImageUrl("");
        setBaseurl("");
      } else {
        console.error('Failed to send data.');
      }
    } catch (error) {
      console.error('Error sending data: ', error);
    }
  };
  return (
    <>
    <Navbar/>
    <div className='container'>
    <h1 className='headline'>Wellcome To Admin Panel</h1>
    <div className='slideadd'>
      <h3>Image Add Top </h3>
      <br/>
      <div className='formcontainer'>
        <div className='form'>
    <form onSubmit={handleSubmit}>
      <label>
        Description :</label>
        <input type="text" value={description} onChange={(e) => setDescription(e.target.value)}  />
      
      <br />
      <label>
        Image Url :</label>
        <input type="text" value={imageUrl} onChange={(e) => setImageUrl(e.target.value)} />
      
      <br />
      <label>
        Base Url :</label>
        <input type="text" value={baseurl} onChange={(e) => setBaseurl(e.target.value)} />
      
      <br />
      <button type="submit" className='btn-sub'>Submit</button>
    </form>
    </div>
    </div>
    <br/>
    <div>
    <Admintop/>
    </div>
    </div>
    </div>
    
 
    
    </>
    
  );
};

export default Addtopphoto;