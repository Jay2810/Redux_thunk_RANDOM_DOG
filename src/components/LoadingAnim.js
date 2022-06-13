import * as React from 'react';
import CircularProgress from '@mui/material/CircularProgress';
import Box from '@mui/material/Box';

export default function CircularIndeterminate() {
  return (
    <div style={{margin:"0 100 auto",marginTop:"25%",marginBottom:"25%"}}>
          {/* <Box sx={{margin:"auto 0", display: 'flex' }}> */}
      <CircularProgress />
    {/* </Box> */}
    </div>

  );
}

