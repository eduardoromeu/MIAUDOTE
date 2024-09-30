import * as React from 'react';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';

export default function FormPropsTextFields() {
  return (
    <Box
      component="form"
      sx={{ '& .MuiTextField-root': { m: 1, width: '25ch' } }}
      noValidate
      autoComplete="off"
    >
      <div>
        <TextField
          
          id="outlined"
          label="Nome"
          defaultValue=""
        /> <br></br>
        
        <TextField
          id="outlined-password-input"
          label="Password"
          type="password"
          autoComplete="current-password"
        /> <br></br>
        
        <TextField
          id="outlined-number"
          label="Numero"
          type="number"
        /> <br></br>
        
        <TextField 
        id="outlined-email" 
        label="Email" 
        type="mail" 
        />
      </div>
    </Box>
  );
}
