import { useState, useEffect } from 'react';
import { DataGrid } from '@mui/x-data-grid';

const Adminalltable = () => {
  const [rows, setRows] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        // Make a GET request to the external API
        const response = await fetch('https://benevolent-kitsune-f1c5de.netlify.app/api/all-photo');

        if (!response.ok) {
          throw new Error('Failed to fetch data');
        }

        const data = await response.json();

        // Add a unique ID to each row
        const rowsWithId = data.map((row, index) => ({ id: index, ...row }));
        setRows(rowsWithId);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    fetchData();
  }, []);

  const handleDelete = async (row) => {
    try {
      // Your delete logic here
      console.log('Row deleted successfully:', row);
    } catch (error) {
      console.error('Error deleting row:', error);
    }
  };

  const columns = [
    { field: 'description', headerName: 'Description', width: 100, resizable: true, className: 'column' },
    { field: 'imageUrl', headerName: 'Image Url', width: 350, resizable: true, className: 'column' },
    { field: 'baseurl', headerName: 'Base Url', width: 950, resizable: true, className: 'column' },
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
    <div className="container">
      <div className="table">
        <DataGrid rows={rows} columns={columns} pageSize={5} getRowId={(row) => row.id} />
      </div>
    </div>
  );
};

export default Adminalltable;
