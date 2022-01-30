import * as React from 'react';
// import Divider from '@mui/material/Divider';
import { Paper, Divider,makeStyles, styled , Grid , createTheme} from '@material-ui/core';
// import Stack from '@mui/material/Stack';
 
import FacebookIcon from '@material-ui/icons/Facebook';
import TwitterIcon from '@material-ui/icons/Twitter';
import InstagramIcon from '@material-ui/icons/Instagram';
import InfoIcon from '@material-ui/icons/Info';
import SecurityIcon from '@material-ui/icons/Security';
import AcUnitIcon from '@material-ui/icons/AcUnit';

const Item = styled(Paper)(({ theme }) => ({
//   ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: 'center',
  margin: 'auto',
  width: '100%',
  color: '#161622',
  backgroundColor:'rgba(22, 22, 34, 0.1)',
  fontFamily: 'Oxygen'
  
}));
const useStyle = makeStyles({
    root:{
        // position:'absolute',
        bottom:0,
        width:'100%',
        /* Height of the footer */
        
         


    },
    item1:{
      display:'flex',
      
    }
    
  

});
export default function DividerStack() {
  const classes = useStyle();
  return (
    <div className = {classes.root}>
      
     <Grid container spacing={0} className={classes.root}>
  <Grid item xs={8}>
       
    <Item  >
        <Item className={classes.item1}> <InfoIcon />  About </Item>
        <Item className={classes.item1}><SecurityIcon/>Terms of Use</Item>
        <Item className={classes.item1}><AcUnitIcon/> Privacy Policy</Item></Item>
  </Grid>
  <Grid item xs={4}>
        <Item>
        <Item><FacebookIcon/></Item>
        <Item><TwitterIcon/></Item>
        <Item><InstagramIcon/></Item>
        </Item>
  </Grid>
   
</Grid>
    </div>
  );
}
