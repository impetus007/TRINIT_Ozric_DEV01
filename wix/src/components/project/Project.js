import React from "react";

import { Box, makeStyles } from "@material-ui/core";
import Grapes from "../Grapes/Grapes";

import Navbar from "../home/Navbar";
const useStyles = makeStyles({
  root: {
    margin: "0px",
  },
});

function Project() {
  const classes = useStyles();

  return (
    <Box>
      <Navbar />
      <Box className={classes.root}>
        <Grapes />
      </Box>
    </Box>
  );
}

export default Project;
