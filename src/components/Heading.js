import * as React from 'react';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';

export default function Types() {
  return (
    <Box sx={{ marginLeft:"25%",marginTop:"10%",marginBottom:"10%",width: '50%', textAlign:"center"}}>
      <Typography variant="h4" gutterBottom component="div">
        This App Generates Random Dog Images and Provide Certain Customization.
      </Typography>
      
    </Box>
  );
}
