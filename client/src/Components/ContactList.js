import { Button, CircularProgress, Grid } from "@material-ui/core";
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getAllContacts } from "../Redux/actions/contactActions";
import Contact from "./Contact";
import DrawerRight from "./Drawer";

const ContactList = () => {
  const dispatch = useDispatch();
  const contacts = useSelector((state) => state.contactReducer.allContacts);
  const isLoad = useSelector((state) => state.contactReducer.isLoad);
  const [open, setOpen] = useState(false);
  const [isEdit, setisEdit] = useState(false);
  const [initialValues, setinitialValues] = useState({});
  const handleClose = () => setOpen(false);
  const handleAdd = () => {
    setisEdit(false);
    setOpen(true);
  };
  const handleEdit = (el) => {
    setisEdit(true);
    setOpen(true);
    setinitialValues(el);
  };
  useEffect(() => {
    dispatch(getAllContacts());
  }, [dispatch]);

  return (
    <Grid container justifyContent="space-between">
      <Button size="medium" onClick={handleAdd}>
        Add Contact
      </Button>
      <DrawerRight
        title={isEdit ? "Edit" : "Add"}
        isOpen={open}
        onClose={handleClose}
        initialValues={initialValues}
        isEdit={isEdit}
      />
      {isLoad ? (
        <CircularProgress color="secondary" />
      ) : (
        contacts.map((el) => (
          <Grid item xs={12} md={4} key={el._id}>
            <Contact contact={el} onUpdate={handleEdit} />
          </Grid>
        ))
      )}
    </Grid>
  );
};

export default ContactList;
