import React from "react";
// material-ui
import { Grid } from "@mui/material";
import MuiTypography from "@mui/material/Typography";

// project imports
import SubCard from "../../ui-components/cards/SubCard";
import { gridSpacing } from "../../../redux/constant";

//Components
import PersonalInfo from "./forms/PersonalInfo";
import ContactDetail from "./forms/ContactDetail";
import NotificationSettings from "./NotificationSettings";

const PersonalDetails = () => {
  return (
    <Grid container spacing={gridSpacing}>
      <Grid item xs={12} sm={6}>
        <SubCard title="Personal Information">
          <Grid container direction="column" spacing={1}>
            <PersonalInfo />
          </Grid>
        </SubCard>
      </Grid>
      <Grid item xs={12} sm={6}>
        <SubCard title="Contact Information">
          <Grid container direction="column" spacing={1}>
            <Grid item>
              <MuiTypography variant="subtitle1" gutterBottom>
                <ContactDetail />
              </MuiTypography>
            </Grid>
            <Grid item>
              
            </Grid>
          </Grid>
        </SubCard>
        
      </Grid>
      <Grid item xs={12} sm={12}>
        
          <Grid container direction="column" spacing={1}>
          <NotificationSettings />
          </Grid>
        
      </Grid>
    </Grid>
  );
};

export default PersonalDetails;
