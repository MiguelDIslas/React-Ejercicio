import React from "react";

import "@testing-library/jest-dom/extend-expect";
import { render, screen } from "@testing-library/react";
import ShowTaks from "./ShowTaks";
import { BrowserRouter as Router } from "react-router-dom";

const AppRender = () => (
  <Router>
    <ShowTaks />
  </Router>
);

test("renders content", () => {
  render(<AppRender />);

  const titleLabel = screen.getByLabelText("new-link");

  expect(titleLabel).toBeInTheDocument();
});
