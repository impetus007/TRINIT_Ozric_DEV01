import React from "react";
import { makeStyles } from "@material-ui/core";
 
import Navbar from './Navbar'
import Footer from './Footer'
import Header from "./Header"
import Content from './Content'
const useStyle = makeStyles({
    root:{
        background:'#161622',
        height:'100vh',
        backgroundColor:' #ffffff',
//         backgroundImage: `url(${"https://transparenttextures.com/patterns/3px-tile.png"})`
// /* This is mostly intended for prototyping; please download the pattern and re-host for production environments. Thank you! */
        
    }
}) 
function Home(){
    const classes= useStyle();
    return(
        <div className={classes.root}> 
        <Navbar/>
        <Header/> 
        <Footer/>

        
        </div>
    )
}



export default Home;