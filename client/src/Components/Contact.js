import {
  Button,
  Card,
  CardActions,
  CardContent,
  makeStyles,
  Typography,
} from "@material-ui/core";
import PropTypes from "prop-types";
import React from "react";
import { useDispatch } from "react-redux";
import { deleteContact, getOneContact } from "../Redux/actions/contactActions";

const useStyles = makeStyles({
  root: {
    minWidth: 275,
  },
  title: {
    fontSize: 14,
  },
  pos: {
    marginBottom: 12,
  },
  cardActions: {
    display: "flex",
    justifyContent: "space-around",
  },
});
const Contact = ({ contact }) => {
  const classes = useStyles();
  const dispatch = useDispatch();
  return (
    <Card className={classes.root}>
      <CardContent>
        <Typography
          className={classes.title}
          color="textSecondary"
          gutterBottom
        >
          {contact.name}
        </Typography>
        <Typography variant="h5" component="h5">
          {contact.email}
        </Typography>

        <Typography variant="body2" component="h5">
          {contact.phone || "please update your phone"}
        </Typography>
      </CardContent>
      <CardActions className={classes.cardActions}>
        <Button
          size="small"
          onClick={() => dispatch(deleteContact(contact._id))}
        >
          Delete
        </Button>
        <Button size="small">Update</Button>
        <Button
          size="small"
          onClick={() => dispatch(getOneContact(contact._id))}
        >
          Show
        </Button>
      </CardActions>
    </Card>
  );
};
Contact.propTypes = {
  contact: PropTypes.object,
};
export default Contact;
