import React, { useState } from 'react';
import { getFirestore, collection, addDoc } from 'firebase/firestore/lite';
import { initializeApp } from 'firebase/app';
import Admintop from './Admintop';
import Navbar from './Navbar';
import "./admin.css"
//import "../Admin.css"
//import Sidebar from './Sidebar';


// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyDdyTqvViyqtLETSrNMzqFP-xM0NIa9lQ8",
    authDomain: "clashlayouts-9d19d.firebaseapp.com",
    projectId: "clashlayouts-9d19d",
    storageBucket: "clashlayouts-9d19d.appspot.com",
    messagingSenderId: "1073716509146",
    appId: "1:1073716509146:web:56713b2e4bf310187b28e3"
  };

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

const Addtopphoto = () => {
  const [description, setDescription] = useState('');
  const [imageUrl, setImageUrl] = useState('');
  const [baseurl , setBaseurl] = useState('')


  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const docRef = await addDoc(collection(db, 'topphoto'), {
        description,
        imageUrl,
        baseurl,

      });
      console.log('Document written with ID: ', docRef.id);
      // Reset form fields
      setDescription ("");
      setImageUrl("");
      setBaseurl("")

    } catch (error) {
      console.error('Error adding document: ', error);
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