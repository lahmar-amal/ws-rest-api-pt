import axios from "axios";
import { ALL_CONTACTS, ERROR, LOAD, ONE_CONTACT } from "../constants";

//get : getAllContacts
export const getAllContacts = () => async (dispatch) => {
  dispatch({ type: LOAD });
  try {
    let res = await axios.get("http://localhost:5500/api/contact/allContacts");
    dispatch({ type: ALL_CONTACTS, payload: res.data.allContacts }); // res.data = { msg: "all contacts", allContacts }
  } catch (err) {
    dispatch({ type: ERROR });
  }
};

// get : getOneContact
export const getOneContact = (id) => async (dispatch) => {
  dispatch({ type: LOAD });
  try {
    let res = await axios.get(
      `http://localhost:5500/api/contact/oneContact/${id}`
    );
    dispatch({ type: ONE_CONTACT, payload: res.data }); // res.data = oneContact
  } catch (err) {
    dispatch({ type: ERROR });
  }
};

// post : addContact
export const addContact = (newContact) => async (dispatch) => {
  dispatch({ type: LOAD });
  try {
    await axios.post("http://localhost:5500/api/contact/add", newContact);
    dispatch(getAllContacts());
    // dispatch({ type: ADD_CONTACT, payload: res.data }); // res.data = newContact
  } catch (err) {
    dispatch({ type: ERROR });
  }
};

// put : updateContact
export const updateContact = (id, updatedContact) => async (dispatch) => {
  dispatch({ type: LOAD });
  try {
    await axios.put(
      `http://localhost:5500/api/contact/updateContact/${id}`,
      updatedContact
    );
    dispatch(getAllContacts());
    // dispatch({ type: UPDATE_CONTACT, payload: res.data }); // res.data = updatedContact
  } catch (err) {
    dispatch({ type: ERROR });
  }
};

// delete : deleteContact
export const deleteContact = (id) => async (dispatch) => {
  dispatch({ type: LOAD });
  try {
    await axios.delete(`http://localhost:5500/api/contact/deleteContact/${id}`);
    dispatch(getAllContacts());
    // dispatch({ type: DELETE_CONTACT, payload: res.data }); // res.data = deletedContact
  } catch (err) {
    dispatch({ type: ERROR });
  }
};
