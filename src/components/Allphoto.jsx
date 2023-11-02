import React, { useState } from 'react';
import Adminalltable from './Adminalltable';
import Navbar from './Navbar';
import "./admin.css"

const Allphoto = () => {
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
      const response = await fetch('https://benevolent-kitsune-f1c5de.netlify.app/api/all-photo', {
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
      <Navbar />
      <div className='container'>
        <h1 className='headline'>Welcome To Admin Panel</h1>
        <div className='slideadd'>
          <h3>Image Add All</h3>
          <br />
          <div className='formcontainer'>
            <div className='form'>
              <form onSubmit={handleSubmit}>
                <label>
                  Description:
                  <input type="text" value={description} onChange={(e) => setDescription(e.target.value)} />
                </label>
                <br />
                <label>
                  Image Url:
                  <input type="text" value={imageUrl} onChange={(e) => setImageUrl(e.target.value)} />
                </label>
                <br />
                <label>
                  Base Url:
                  <input type="text" value={baseurl} onChange={(e) => setBaseurl(e.target.value)} />
                </label>
                <br />
                <button type="submit" className='btn-sub'>Submit</button>
              </form>
            </div>
          </div>
          <br />
          <div>
            <Adminalltable />
          </div>
        </div>
      </div>
    </>
  );
};

export default Allphoto;
