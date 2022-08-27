import React from "react";
import { useDispatch } from "react-redux";
import { updateContact } from "../Redux/actions/contactActions";
import AddUpdateForm from "./AddUpdateForm";

const EditContact = ({ initialValues }) => {
  const dispatch = useDispatch();
  const handleSave = (values) => {
    return dispatch(updateContact(initialValues._id, values));
  };
  return <AddUpdateForm initialValues={initialValues} onSubmit={handleSave} />;
};

export default EditContact;
