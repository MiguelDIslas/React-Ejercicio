import React from "react";

import "@testing-library/jest-dom/extend-expect";
import { render, screen, fireEvent } from "@testing-library/react";
import EditProject from "./EditProject";
import { BrowserRouter as Router } from "react-router-dom";

const AppRender = () => (
  <Router>
    <EditProject />
  </Router>
);

test("renders content", () => {
  render(<AppRender />);

  const titleLabel = screen.getByLabelText("Título");
  const titleInput = screen.getByLabelText("title-input");

  const descriptionLabel = screen.getByLabelText("Descripción");
  const descriptionInput = screen.getByLabelText("description-input");

  expect(titleLabel).toBeInTheDocument();
  expect(titleInput).toBeInTheDocument();
  expect(descriptionLabel).toBeInTheDocument();
  expect(descriptionInput).toBeInTheDocument();
});

test("submit form", async () => {
  render(<AppRender />);
  const button = await screen.findByRole("button");

  const handleSubmit = fireEvent.click(button);

  expect(handleSubmit).toBeTruthy();
});
