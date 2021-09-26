import React from "react";
// material-ui
import { Grid } from "@mui/material";

// project imports
import SubCard from "../../ui-components/cards/SubCard";
import { gridSpacing } from "../../../redux/constant";

// Components
import ChangePasswordForm from "./forms/ChangePasswordForm";

const ChangePassword = () => {
  return (
    <Grid container spacing={gridSpacing}>
      <Grid item xs={12} sm={12}>
        <SubCard title="Change password">
          <Grid container direction="column" spacing={1}>
            <ChangePasswordForm />
          </Grid>
        </SubCard>
      </Grid>
    </Grid>
  );
};

export default ChangePassword;
