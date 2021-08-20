import React from "react";
import { render, screen } from "@testing-library/react";
import App from "./components/App";

it("renders welcome message", () => {
  render(<App />, document.getElementById("root"));
});
