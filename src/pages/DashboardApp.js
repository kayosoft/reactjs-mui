// material
import { Box, Grid, Container, Typography } from "@material-ui/core";
// components
import Page from "../components/Page";
import {
  Crops,
  AppCurrentVisits,
  AppWebsiteVisits,
} from "../components/_dashboard/app";

// ----------------------------------------------------------------------

export default function DashboardApp() {
  return (
    <Page title="Dashboard | Tunzi Farm">
      <Container maxWidth="xl">
        <Box sx={{ pb: 5 }}>
          <Typography variant="h4">Hi, Welcome back</Typography>
        </Box>
        <Grid container spacing={3}>
          <Grid item xs={12} sm={6} md={8}>
            <Crops />
          </Grid>

          <Grid item xs={12} md={6} lg={8}>
            <AppWebsiteVisits />
          </Grid>

          <Grid item xs={12} md={6} lg={4}>
            <AppCurrentVisits />
          </Grid>
        </Grid>
      </Container>
    </Page>
  );
}
