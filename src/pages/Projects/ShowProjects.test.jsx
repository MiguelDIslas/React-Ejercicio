import React from "react";

import "@testing-library/jest-dom/extend-expect";
import { render, screen } from "@testing-library/react";
import ShowProjects from "./ShowProjects";
import { BrowserRouter as Router } from "react-router-dom";

const AppRender = () => (
  <Router>
    <ShowProjects />
  </Router>
);

test("renders content", () => {
  render(<AppRender />);

  const titleLabel = screen.getByLabelText("new-link");

  expect(titleLabel).toBeInTheDocument();
});
