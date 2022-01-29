import * as React from 'react'; 
import {Box , List  , Divider , makeStyles ,Typography ,Icon, Button  } from '@material-ui/core';
import {Link} from 'react-router-dom'

import logo from './home.svg';

const style = {
  width: '100%',
  maxWidth: 360,
  bgcolor: '#ffffff'
};
const useStyle= makeStyles({
    root:{
        color:'#161622',
        display: 'flex',
         justifyContent:'space-around',
        fontSize: '60px',
        marginTop:'2%',
        fontFamily:'Oxygen',
        lineHeight: '1',
        backgroundColor:'#ffffff',
         marginLeft:'1%'
        




    },
    
    component1:{
         marginLeft:0,
         textAlign:'left',
         marginTop: '5%'
    },
    component2:{
        float:'right'
    },
   btn:{
     background: 'linear-gradient(-45deg, #FBC390 10%, #C5F1FE 90%)',
    // padding: '20px 50px 20px 50px',
    padding:'3.5% 6%',
    fontSize:'50%',
    marginTop:'14%',
    fontFamily:'Oxygen',
    textDecoration:'none',
    boxShadow: '0 3px 5px 2px rgba(0, 0, 0, .3)',

   },

   root2:{
       backgroundColor:'#ffffff',
       fontFamily: 'Oxygen',
       

        
   },
   component3:{
        paddingTop: '10%',
        paddingBottom: '4%',
        marginLeft:'5%',
        marginRight:'5%'
   },
   component4:{
    backgroundColor:'#ffffff',
    fontFamily: 'Oxygen',
    display: 'flex',
    justifyContent:'left'
    
   },
   image:{
       maxWidth: '100%',
       height:'auto'
   }
   
})
export default function ListDividers() {
    const classes = useStyle();
  return (
     <List sx={style}   >

     {/* <Divider textAlign="left">LEFT</Divider> */}
   
     <Box className={classes.root}>
         <Box className={classes.component1}>
         Create Your 
         <Typography 
         className={classes.root}
         style = {{fontSize:'200%',  marginLeft:0 , fontFamily:'Viga'}}

         >Own Website</Typography> 


         <Link to="/project" style={{ textDecoration: 'none' }}> 
         <Button   variant='contained' className={classes.btn} >Get Started</Button></Link>

         </Box>
         <Box className={classes.component2}>
       
         <img  className={classes.image} src={logo} alt='logo'/>
        
 
         </Box>
        
     </Box>
 


      <Box className={classes.root2}>
          <Box className={classes.component3}> 
          <Typography variant='h3' style={{paddingBottom:'2%'}}>Lorem ipsum</Typography>
           
          
          <Typography>ie varius au leifend ac at elit. In hac habitasse platea dictumst. Duis convallis quam ac fermentum aliquam. Vivamus placerat malesuada tellus, a tincidunt nisi pellentesque in. Phasellus placerat eros pretium sapien consequat, gravida fermentum dolor vehicula. Nullam facilisis imperdiet elit nec aliquam. Vivamus auctor faucibus risus ut viverra. Sed vitae nulla in ex placerat condimentum. Phasellus convallis, nunc eget malesuada semper, lectus quam pretium nunc, in lobortis velit velit in turpis. Quisque ac sem sit amet elit pharetra gravida ut sit amet or</Typography>
          </Box>
       </Box>


       <Divider variant='middle'/>

       <Box className={classes.root2}>
          <Box className={classes.component3}> 
          <Typography variant='h3' style={{paddingBottom:'2%'}}>Lorem ipsum</Typography>
           
          
          <Typography>ie varius au leifend ac at elit. In hac habitasse platea dictumst. Duis convallis quam ac fermentum aliquam. Vivamus placerat malesuada tellus, a tincidunt nisi pellentesque in. Phasellus placerat eros pretium sapien consequat, gravida fermentum dolor vehicula. Nullam facilisis imperdiet elit nec aliquam. Vivamus auctor faucibus risus ut viverra. Sed vitae nulla in ex placerat condimentum. Phasellus convallis, nunc eget malesuada semper, lectus quam pretium nunc, in lobortis velit velit in turpis. Quisque ac sem sit amet elit pharetra gravida ut sit amet or</Typography>
          </Box>
       </Box>

    
       
        
      
       
      
     
     
     </List>
  );
}
