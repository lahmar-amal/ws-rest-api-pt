import React, { useState } from "react";
import { Button, FormControl, TextField } from "@material-ui/core";
import PropTypes from "prop-types";

const AddUpdateForm = ({ initialValues = {}, onSubmit }) => {
  const [values, setValues] = useState({
    name: initialValues.name || "",
    email: initialValues.email || "",
    phone: initialValues.phone || "",
  });
  const handleChange = (e) =>
    setValues({ ...values, [e.target.name]: e.target.value });
  return (
    <FormControl>
      <TextField
        name="name"
        id="standard-basic"
        label="Name"
        value={values.name}
        onChange={handleChange}
      />
      <TextField
        name="email"
        id="standard-basic"
        label="Email"
        value={values.email}
        onChange={handleChange}
      />
      <TextField
        name="phone"
        id="standard-basic"
        label="Phone"
        value={values.phone}
        onChange={handleChange}
      />
      <Button onClick={() => onSubmit(values)}>Save</Button>
    </FormControl>
  );
};
AddUpdateForm.propTypes = {
  onSubmit: PropTypes.func.isRequired,
};
export default AddUpdateForm;
