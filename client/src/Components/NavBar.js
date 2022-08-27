import { Grid } from "@material-ui/core";
import React from "react";
import { Link } from "react-router-dom";

const NavBar = () => {
  return (
    <Grid container justifyContent="center" alignItems="center">
      <Grid item>
        <Link to="/"> Home</Link>
      </Grid>
    </Grid>
  );
};

export default NavBar;
