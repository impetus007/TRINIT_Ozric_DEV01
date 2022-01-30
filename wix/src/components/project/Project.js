import React from "react";

import {Box} from '@material-ui/core'

import Navbar from "../home/Navbar";
import Grapes from "../Grapes/Grapes";

function Project(){
    return(
       <Box>
           <Navbar/>
           <Grapes />
       </Box>
    )
}

export default Project;
