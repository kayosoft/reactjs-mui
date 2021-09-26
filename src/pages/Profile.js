import { Icon } from "@iconify/react";
import plusFill from "@iconify/icons-eva/plus-fill";
import { Link as RouterLink } from "react-router-dom";
// material
import {
  Card,
 
  Stack,
  
  Button,
 
  Container,
  Typography,
 
} from "@mui/material";
// components
import Page from "../components/Page";

import Scrollbar from "../components/Scrollbar";
import { SettingTabs } from "../components/_dashboard/settings";


// ----------------------------------------------------------------------

export default function Profile() {
  return (
    <Page title="Settings | Tunzi Farm">
      <Container>
        <Stack
          direction="row"
          alignItems="center"
          justifyContent="space-between"
          mb={5}
        >
          <Typography variant="h4" gutterBottom>
            Profile Setting
          </Typography>
          <Button
            variant="contained"
            component={RouterLink}
            to="#"
            startIcon={<Icon icon={plusFill} />}
          >
            Enterprise
          </Button>
        </Stack>

        <Card>
          <Scrollbar>
            <SettingTabs />
          </Scrollbar>
        </Card>
      </Container>
    </Page>
  );
}
