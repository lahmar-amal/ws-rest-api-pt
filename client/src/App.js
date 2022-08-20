import { Grid } from "@material-ui/core";
import React from "react";
import { Route, Routes } from "react-router-dom";
import "./App.css";
import AddUpdateForm from "./Components/AddUpdateForm";
import ContactList from "./Components/ContactList";
import NavBar from "./Components/NavBar";

function App() {
  return (
    <Grid container>
      <Grid item xs={12} sm={12} md={12} lg={12}>
        <NavBar />
      </Grid>
      <Routes>
        <Route path="/" element={<ContactList />} />
        <Route path="/addUpdate" element={<AddUpdateForm />} />
      </Routes>
    </Grid>
  );
}

export default App;
