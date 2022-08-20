import { ALL_CONTACTS, ERROR, LOAD, ONE_CONTACT } from "../constants";

const initialState = {
  isLoad: false,
  allContacts: [],
  contact: {},
  isError: false,
};
// functional programming
const contactReducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case LOAD:
      return { ...state, isLoad: true, isError: false };
    case ALL_CONTACTS:
      return { ...state, allContacts: payload, isLoad: false, isError: false };
    case ONE_CONTACT:
      return { ...state, contact: payload, isLoad: false, isError: false };
    case ERROR:
      return { ...state, isError: true, isLoad: false };
    default:
      return state;
  }
};
export default contactReducer;
