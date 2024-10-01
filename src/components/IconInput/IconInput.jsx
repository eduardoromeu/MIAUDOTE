import * as React from 'react';
import InputAdornment from '@mui/material/InputAdornment';
import TextField from '@mui/material/TextField';
import AccountCircle from '@mui/icons-material/AccountCircle';

export default function InputWithIcon({id, label, icon, placeholder, type}) {
  return (
        <TextField
        id={id ?? "input-with-icon"}
        label={label ?? ""}
        placeholder={placeholder}
        type={type ?? "text"}
        slotProps={{
          input: {
            startAdornment: (
              <InputAdornment position="start">
                {icon ?? <AccountCircle />}
              </InputAdornment>
            ),
          },
        }}
        variant="outlined"
      />
  );
}
