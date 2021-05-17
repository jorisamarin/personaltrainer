import React, { useState, useEffect } from 'react';
import { AgGridReact } from 'ag-grid-react';
import IconButton from '@material-ui/core/IconButton';
import DeleteIcon from '@material-ui/icons/Delete';
import 'ag-grid-community/dist/styles/ag-grid.css';
import 'ag-grid-community/dist/styles/ag-theme-material.css';


function Traininglist() {
  const [trainings, setTrainings] = useState([]);

  useEffect(() => {
    fetchTrainings();
  }, []);


  const fetchTrainings = () => {
    fetch('https://customerrest.herokuapp.com/api/trainings')
    .then(response => response.json())
    .then(data => setTrainings(data.content))
    .catch(error => console.error(error))
  }

  
  
  const columns = [
    { field: 'date', sortable: true, filter: true },
    { field: 'duration', sortable: true, filter: true },
    { field: 'activity', sortable: true, filter: true }
   
    
    
    
  ]

  return(
    <div className="ag-theme-material" style={{ height: 600, width: '95%', margin: 'auto' }}>
      <AgGridReact
        rowData={trainings}
        columnDefs={columns}
       d pagination={true}
        paginationPageSize={20}
        floatingFilter={true}
        suppressCellSelection={true}
      />
  </div>
  
  
  )
}

export default Traininglist;