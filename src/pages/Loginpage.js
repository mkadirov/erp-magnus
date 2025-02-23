import { Box, Typography } from '@mui/material';
import React from 'react'
import { useLocation, useNavigate } from "react-router-dom";



function Loginpage() {

  const navigate = useNavigate();
  
  return (
    <Box>
      <Typography variant='h5' onClick = {() => navigate('/home')}>
        HomePage
      </Typography>
    </Box>
  )
}

export default Loginpage