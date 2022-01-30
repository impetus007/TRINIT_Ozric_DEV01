import * as React from 'react'; 
import{ Box, Button, AppBar , Toolbar} from '@material-ui/core'; 
import { makeStyles } from '@material-ui/core/styles';
import {Link} from 'react-router-dom'


const useStyles = makeStyles({
  root: {
    background: 'linear-gradient(45deg, #E7D6CF 30%,#FBC390 90%)',
    border: 0,
    borderRadius: 3,
    boxShadow: '0 3px 5px 2px rgba(255, 105, 135, "#000000")',
    color: 'black',
    height: 48,
    padding: '0 30px',
    fontFamily:'Oxygen',
    fontWeight: '600'
    
     
    
  },
  tool:{
    background: 'linear-gradient(45deg, #FBC390 30%, #C5F1FE 90%)',
    // display:'flex',
    // flex: 'right'
     
  },
  comp:{
    marginLeft: 'auto',
   

  }
  
});
export default function Navbar() {
  const classes =  useStyles();
  return (
    <Box  >
      <AppBar position="sticky">
        <Toolbar className={classes.tool}>
          
          <Box className={classes.comp}>  

          <Link to="/" style={{textDecoration:'none'}}> <Button className={classes.root} color="inherit">Home </Button></Link>
          </Box>
        </Toolbar>
      </AppBar>
    </Box>
  );
}
