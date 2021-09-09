import React from "react";
// material-ui
import { Grid, Link } from "@material-ui/core";
import MuiTypography from "@material-ui/core/Typography";

// project imports
import SubCard from "../../ui-components/cards/SubCard";
import { gridSpacing } from "../../../redux/constant";

const PersonalDetails = () => {
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
      <Grid item xs={12} sm={6}>
        <SubCard title="Body">
          <Grid container direction="column" spacing={1}>
            <Grid item>
              <MuiTypography variant="body1" gutterBottom>
                body1. Lorem ipsum dolor sit connecter adieu siccing eliot. Quos
                blanditiis tenetur unde suscipit, quam beatae rerum inventore
                consectetur, neque doloribus, cupiditate numquam dignissimos
                laborum fugiat deleniti? Eum quasi quidem quibusdam.
              </MuiTypography>
            </Grid>
            <Grid item>
              <MuiTypography variant="body2" gutterBottom>
                body2. Lorem ipsum dolor sit connecter adieu siccing eliot. Quos
                blanditiis tenetur unde suscipit, quam beatae rerum inventore
                consectetur, neque doloribus, cupiditate numquam dignissimos
                laborum fugiat deleniti? Eum quasi quidem quibusdam.
              </MuiTypography>
            </Grid>
          </Grid>
        </SubCard>
      </Grid>
      <Grid item xs={12} sm={6}>
        <SubCard title="Extra">
          <Grid container direction="column" spacing={1}>
            <Grid item>
              <MuiTypography variant="button" display="block" gutterBottom>
                button text
              </MuiTypography>
            </Grid>
            <Grid item>
              <MuiTypography variant="caption" display="block" gutterBottom>
                caption text
              </MuiTypography>
            </Grid>
            <Grid item>
              <MuiTypography variant="overline" display="block" gutterBottom>
                overline text
              </MuiTypography>
            </Grid>
            <Grid item>
              <MuiTypography
                variant="body2"
                color="primary"
                component={Link}
                href="https://berrydashboard.io"
                target="_blank"
                display="block"
                gutterBottom
                underline="hover"
              >
                https://berrydashboard.io
              </MuiTypography>
            </Grid>
          </Grid>
        </SubCard>
      </Grid>
    </Grid>
  );
};

export default PersonalDetails;
