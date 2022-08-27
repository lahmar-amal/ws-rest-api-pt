import React from "react";
import { useDispatch } from "react-redux";
import { addContact } from "../Redux/actions/contactActions";
import AddUpdateForm from "./AddUpdateForm";

const AddContact = () => {
  const dispatch = useDispatch();
  const handleSave = (values) => dispatch(addContact(values));
  return <AddUpdateForm onSubmit={handleSave} />;
};

export default AddContact;
