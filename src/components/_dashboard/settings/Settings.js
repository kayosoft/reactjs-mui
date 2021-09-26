import React from "react";
// material-ui
import { Grid, Link } from "@mui/material";
import MuiTypography from "@mui/material/Typography";

// project imports
import SubCard from "../../ui-components/cards/SubCard";
import { gridSpacing } from "../../../redux/constant";

const Settings = () => {
  return (
    <Grid container spacing={gridSpacing}>
      <Grid item xs={12} sm={12}>
        <SubCard title="Settings">
          <Grid container direction="column" spacing={1}>
            Farm Settings
          </Grid>
        </SubCard>
      </Grid>
    </Grid>
  );
};

export default Settings;
