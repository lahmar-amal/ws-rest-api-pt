import { CircularProgress, Grid } from "@material-ui/core";
import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getAllContacts } from "../Redux/actions/contactActions";
import Contact from "./Contact";

const ContactList = () => {
  const dispatch = useDispatch();
  const contacts = useSelector((state) => state.contactReducer.allContacts);
  const isLoad = useSelector((state) => state.contactReducer.isLoad);

  useEffect(() => {
    dispatch(getAllContacts());
  }, [dispatch]);

  return (
    <Grid container justifyContent="space-between">
      {isLoad ? (
        <CircularProgress color="secondary" />
      ) : (
        contacts.map((el) => (
          <Grid item xs={12} md={4} key={el._id}>
            <Contact contact={el} />
          </Grid>
        ))
      )}
    </Grid>
  );
};

export default ContactList;
