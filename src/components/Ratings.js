import * as React from 'react';
import Box from '@mui/material/Box';
import Rating from '@mui/material/Rating';
import Typography from '@mui/material/Typography';

export default function Ratings() {
  const [value, setValue] = React.useState(2);

  return (
    <Box
      sx={{'& > legend': { mt: 0.5 }, color:"blue" }}>
        
      <Typography component="legend"></Typography>
      <Rating
        name="simple-controlled"
        value={value}
        onChange={(event, newValue) => {
          setValue(newValue);
        }}
      />
      
    </Box>
  );
}
