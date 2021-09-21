// material
import { Container, Box, Grid } from "@material-ui/core";
// components
import Page from "../components/Page";
import Scrollbar from "../components/Scrollbar";
import AccountProfile from "../components/_dashboard/account/AccountProfile";
import AccountDetails from "../components/_dashboard/account/AccountDetails";

export default function Account() {
  return (
    <Page title="Account | Tunzi Smart Farm">
      <Scrollbar />
      <Container>
      <Box
      sx={{
        backgroundColor: 'background.default',
        minHeight: '100%',
        py: 3
      }}
    >
      <Container maxWidth="lg">
        <Grid
          container
          spacing={3}
        >
          <Grid
            item
            lg={4}
            md={6}
            xs={12}
          >
            <AccountProfile />
          </Grid>
          <Grid
            item
            lg={8}
            md={6}
            xs={12}
          >
            <AccountDetails />
          </Grid>
        </Grid>
      </Container>
    </Box>
      </Container>
    </Page>
  );
}
