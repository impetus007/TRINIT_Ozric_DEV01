import * as React from 'react';
 
// import Box from '@mui/material/Box';
// import Card from '@mui/material/Card';
// import CardContent from '@mui/material/CardContent';
import {  CardContent, Card,Box, Typography} from '@material-ui/core';

 

export default function Content() {
  

  return (
    
    <Card sx={{ display: 'flex',justifyContent:'apace-around' }}>
      <Box sx={{ display: 'flex', flexDirection: 'column', width:'50%' }}>
        <CardContent sx={{ flex: '1 0 auto' }}>
          <Typography component="div" variant="h5">
            Live From Space
          </Typography>
          <Typography variant="subtitle1" color="text.secondary" component="div">
          etra pharetra. Etiam auctor velit ac libero viverra rhoncus. Nunc efficitur tempor leo, sed pulvinar felis eleifend faucibus. Ut ante nibh, luctus nec est quis, rhoncus semper dui. Aenean dignissim pharetra nunc in rhoncus. Vestibulum vehicula, nisl sagittis tincidunt facilisis, magna tortor tincidunt odio, non rhoncus diam nunc non augue. Nam dui velit, ornare et egestas tincidunt, consequat aliquam velit. Ut sollicitudin, erat nec suscipit mattis, lacus justo lacinia dui, eget imperdiet tellus tellus in felis. Morbi mollis mauris erat. Mauris mollis lacus eget sapien pretium, eget elementum dui c
          </Typography>
        </CardContent>
      
      </Box>
      
    </Card>
 
 
  );
}
