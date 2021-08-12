import React from "react";

import { Navbar, Nav, NavItem } from "reactstrap";

import SourceLink from "../SourceLink";

const Footer = () => {
  return (
    <Navbar>
      <Nav navbar>
        <NavItem>
          Blazing Technologies<SourceLink>tunzi.com</SourceLink>
        </NavItem>
      </Nav>
    </Navbar>
  );
};

export default Footer;
