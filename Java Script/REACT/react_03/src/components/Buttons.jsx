import * as React from 'react';
import Button from '@mui/material/Button';

const Buttons = () =>{
    return (
        <>
        <Button variant="outlined" startIcon={<DeleteIcon />}>
        Delete
        </Button>
        <Button variant="contained" endIcon={<SendIcon />}>
        Send
        </Button>
        </>
    )
}

export default Buttons