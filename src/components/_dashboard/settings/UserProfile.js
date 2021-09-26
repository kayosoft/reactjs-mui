import React from "react";
// material-ui
import { Grid } from "@mui/material";
import MuiTypography from "@mui/material/Typography";

// project imports
import SubCard from "../../ui-components/cards/SubCard";
import { gridSpacing } from "../../../redux/constant";

const UserProfile = () => {
  return (
    <Grid container spacing={gridSpacing}>
      <Grid item xs={12} sm={4}>
        <SubCard title="Profile">
          <Grid container direction="column" spacing={1}>
            User profile
          </Grid>
        </SubCard>
      </Grid>
      <Grid item xs={12} sm={8}>
        <SubCard title="About me">
          <Grid container direction="column" spacing={1}>
            <Grid item>
              <MuiTypography variant="subtitle1" gutterBottom>
                subtitle1. Lorem ipsum dolor sit connecter adieu siccing eliot.
                Quos blanditiis tenetur
              </MuiTypography>
            </Grid>
            <Grid item>
              <MuiTypography variant="subtitle2" gutterBottom>
                subtitle2. Lorem ipsum dolor sit connecter adieu siccing eliot.
                Quos blanditiis tenetur
              </MuiTypography>
            </Grid>
          </Grid>
        </SubCard>
      </Grid>
    </Grid>
  );
};

export default UserProfile;
