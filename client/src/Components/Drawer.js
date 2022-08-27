import React from "react";
import PropTypes from "prop-types";
import clsx from "clsx";
import CloseIcon from "@material-ui/icons/Close";
import {
  makeStyles,
  Typography,
  Box,
  Drawer,
  IconButton,
  Divider,
  Grid,
  withStyles,
} from "@material-ui/core";
import { useTheme } from "@material-ui/core/styles";
import EditContact from "./EditContact";
import AddContact from "./AddContact";

const useStyles = makeStyles((theme) => ({
  paper: {
    width: ({ drawerWidth }) => drawerWidth,
    overflow: "auto",
    overflowX: "hidden",
    marginTop: "65px",
    display: "flex",
    height: `calc(100vh - 65px)`,
    boxShadow: "-7px 4px 15px 5px rgba(0,0,0,0.20)",
  },
  drawerHeader: {
    [theme.breakpoints.up("sm")]: {
      width: "100%",
    },
    minHeight: 47,
    display: "flex",
    alignItems: "center",
    maxHeight: "20px",
    padding: theme.spacing(0, 1),
    justifyContent: "space-between",
    borderBottom: "1px solid #DEEDED",
  },
  title: {
    fontSize: "120%",
    fontWeight: "bold",
    whiteSpace: "nowrap",
    width: "90%",
    overflow: "hidden",
    textOverflow: "ellipsis",
    [theme.breakpoints.down("xs")]: {
      maxWidth: "420px",
    },
    "@media (max-width: 500px)": {
      maxWidth: "360px",
    },
    "@media (max-width: 450px)": {
      fontSize: "90%",
      maxWidth: "320px",
    },
    "@media (max-width: 400px)": {
      maxWidth: "260px",
    },
    "@media (max-width: 350px)": {
      maxWidth: "220px",
    },
    "@media (max-width: 300px)": {
      maxWidth: "180px",
    },
  },
  drawer: {
    flexShrink: 0,
    width: theme.spacing(65),
  },
  content: {
    padding: 10,
    overflowY: "auto",
    maxHeight: "calc(100vh - 120px)",
    flexGrow: 1,
  },
}));

const DrawerRight = ({
  isOpen,
  isEdit,
  title,
  onClose,
  drawerWidth = 65,
  initialValues,
}) => {
  const theme = useTheme();
  const styleProps = {
    drawerWidth: theme.spacing(drawerWidth),
  };
  const classes = useStyles(styleProps);
  const handleClose = () => onClose();
  const OverrideStyles = withStyles(() => ({
    "@global": {
      ".MuiDrawer-paper": {
        [`@media (max-width: ${styleProps.drawerWidth}px)`]: {
          maxWidth: "100%",
        },
      },
    },
  }))(() => null);

  return (
    <Grid>
      <OverrideStyles />
      <React.Fragment>
        <Drawer
          anchor="right"
          className={classes.drawer}
          onClose={handleClose}
          open={isOpen}
          classes={{ paper: classes.paper }}
        >
          <Grid className={clsx(classes.list)} role="presentation">
            <Box className={classes.drawerHeader}>
              <Typography className={classes.title}>{title}</Typography>
              <IconButton onClick={handleClose}>
                <CloseIcon />
              </IconButton>
            </Box>
            <Divider />
            <Box className={classes.content}>
              {isEdit ? (
                <EditContact initialValues={initialValues} />
              ) : (
                <AddContact />
              )}
            </Box>
          </Grid>
        </Drawer>
      </React.Fragment>
    </Grid>
  );
};

DrawerRight.propTypes = {
  isOpen: PropTypes.bool.isRequired,
  title: PropTypes.string.isRequired,
  onClose: PropTypes.func,
  drawerWidth: PropTypes.number,
  isEdit: PropTypes.bool,
};

export default DrawerRight;
