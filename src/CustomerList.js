import React, { useState, useEffect } from 'react';
import { AgGridReact } from 'ag-grid-react';
import IconButton from '@material-ui/core/IconButton';
import DeleteIcon from '@material-ui/icons/Delete';
import 'ag-grid-community/dist/styles/ag-grid.css';
import 'ag-grid-community/dist/styles/ag-theme-material.css';

function Customerlist() {
  const [customers, setCustomers] = useState([]);
  
  

  useEffect(() => {
    fetchCustomers();
  }, []);

  const fetchCustomers = () => {
    fetch('https://customerrest.herokuapp.com/api/customers')
    .then(response => response.json())
    .then(data => setCustomers(data.content))
    .catch(error => console.error(error))
  }

  
  
  const columns = [
    { field: 'firstname', sortable: true, filter: true },
    { field: 'lastname', sortable: true, filter: true },
    { field: 'streetaddress', sortable: true, filter: true },
    { field: 'postcode', sortable: true, filter: true },
    { field: 'city', sortable: true, filter: true },
    { field: 'email', sortable: true, filter: true },
    { field: 'phone', sortable: true, filter: true }
    
  ]

  return(
    <div className="ag-theme-material" style={{ height: 600, width: '95%', margin: 'auto' }}>
      <AgGridReact
        rowData={customers}
        columnDefs={columns}
       d pagination={true}
        paginationPageSize={20}
        floatingFilter={true}
        suppressCellSelection={true}
      />
  </div>
  )
}

export default Customerlist;