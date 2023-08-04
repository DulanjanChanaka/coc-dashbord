import React, { useEffect, useState } from 'react';
import { DataGrid } from '@mui/x-data-grid';
import { getFirestore, deleteDoc, collection, onSnapshot, doc } from 'firebase/firestore';
import { initializeApp } from 'firebase/app';


const firebaseConfig = {
  apiKey: "AIzaSyDdyTqvViyqtLETSrNMzqFP-xM0NIa9lQ8",
  authDomain: "clashlayouts-9d19d.firebaseapp.com",
  projectId: "clashlayouts-9d19d",
  storageBucket: "clashlayouts-9d19d.appspot.com",
  messagingSenderId: "1073716509146",
  appId: "1:1073716509146:web:56713b2e4bf310187b28e3"
};
initializeApp(firebaseConfig);
const db = getFirestore();

const Adminalltable = () => {
    const [rows, setRows] = useState([]);
  
    useEffect(() => {
      const fetchdata = onSnapshot(collection(db, 'allphoto'), (snapshot) => {
        const data = snapshot.docs.map((doc) => ({
          id: doc.id,
          ...doc.data(),
        }));
        setRows(data);
      });
  
      return () => {
        fetchdata();
      };
    }, []);
  

      
      const handleDelete = async (row) => {
        try {
         
          const docRef = doc(db, 'allphoto', row.id);
      
          
          await deleteDoc(docRef);
      
          console.log('Row deleted successfully:', row);
        } catch (error) {
          console.error('Error deleting row:', error);
        }
      };
      
  
    const columns = [
      { field: 'description', headerName: 'Description', width: 200, resizable: true , className:"column"},
      { field: 'imageUrl', headerName: 'Image Url', width: 450, resizable: true ,className:"column"},


      {
        field: 'delete',
        headerName: 'Delete',
        width: 100,
        renderCell: (params) => (
          <button onClick={() => handleDelete(params.row)}>Delete</button>
        ),
      },
    ];
  
    return (
      <div className='container'>
        <div className='table'>
          <DataGrid 
          rows={rows} 
          columns={columns} pageSize={5} />
        </div>
      </div>
    );
  };
  
  export default Adminalltable;