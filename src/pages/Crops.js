// material
import { Container } from "@material-ui/core";
// components
import Page from "../components/Page";
import Scrollbar from "../components/Scrollbar";
import Header from "../components/_dashboard/crop/Header";
import Content from "../components/_dashboard/crop/Content";

export default function Crops() {
  return (
    <Page title="Crops | Tunzi Farm">
      <Scrollbar />
      <Container>
        <Header />
        <Content />
      </Container>
    </Page>
  );
}
