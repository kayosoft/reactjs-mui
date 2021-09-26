import React from "react";
import PropTypes from "prop-types";
import { makeStyles } from "@mui/styles";
import AppBar from "@mui/material/AppBar";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import PhoneIcon from "@mui/icons-material/Phone";
import FavoriteIcon from "@mui/icons-material/Favorite";
import PersonPinIcon from "@mui/icons-material/PersonPin";
import HelpIcon from "@mui/icons-material/Help";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";

// Components
import UserProfile from "./UserProfile";
import Settings from "./Settings";
import PersonalDetails from "./PersonalDetails";
import ChangePassword from "./ChangePassword";

function TabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`scrollable-force-tabpanel-${index}`}
      aria-labelledby={`scrollable-force-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box p={3}>
          <Typography>{children}</Typography>
        </Box>
      )}
    </div>
  );
}

TabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.any.isRequired,
  value: PropTypes.any.isRequired,
};

function a11yProps(index) {
  return {
    id: `scrollable-force-tab-${index}`,
    "aria-controls": `scrollable-force-tabpanel-${index}`,
  };
}

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    width: "100%",
    backgroundColor: theme.palette.background.paper,
  },
}));

export default function ScrollableTabsButtonForce() {
  const classes = useStyles();
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <div className={classes.root}>
      <AppBar position="static" color="default">
        <Tabs
          value={value}
          onChange={handleChange}
          variant="scrollable"
          scrollButtons="on"
          indicatorColor="primary"
          textColor="primary"
          aria-label="scrollable force tabs example"
        >
          <Tab label="Profile" icon={<PhoneIcon />} {...a11yProps(0)} />
          <Tab
            label="Personal Details"
            icon={<FavoriteIcon />}
            {...a11yProps(1)}
          />
          <Tab
            label="Change Password"
            icon={<PersonPinIcon />}
            {...a11yProps(2)}
          />
          <Tab label="Settings" icon={<HelpIcon />} {...a11yProps(3)} />
        </Tabs>
      </AppBar>
      <TabPanel value={value} index={0}>
        <UserProfile />
      </TabPanel>
      <TabPanel value={value} index={1}>
        <PersonalDetails />
      </TabPanel>
      <TabPanel value={value} index={2}>
        <ChangePassword />
      </TabPanel>
      <TabPanel value={value} index={3}>
        <Settings />
      </TabPanel>
    </div>
  );
}
