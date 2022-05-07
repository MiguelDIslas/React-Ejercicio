import React from "react";

import "@testing-library/jest-dom/extend-expect";
import { render, screen, fireEvent } from "@testing-library/react";
import EditTask from "./EditTask";
import { BrowserRouter as Router } from "react-router-dom";

const AppRender = () => (
  <Router>
    <EditTask />
  </Router>
);

test("renders content", () => {
  render(<AppRender />);

  const titleLabel = screen.getByLabelText("Título");
  const titleInput = screen.getByLabelText("title-input");

  const descriptionLabel = screen.getByLabelText("Descripción");
  const descriptionInput = screen.getByLabelText("description-input");

  const projectIdLabel = screen.getByLabelText("Proyecto");
  const projectIdSelector = screen.getByLabelText("projectId-select");

  expect(titleLabel).toBeInTheDocument();
  expect(titleInput).toBeInTheDocument();
  expect(descriptionLabel).toBeInTheDocument();
  expect(descriptionInput).toBeInTheDocument();
  expect(projectIdLabel).toBeInTheDocument();
  expect(projectIdSelector).toBeInTheDocument();
});

test("submit form", async () => {
  render(<AppRender />);
  const button = await screen.findByRole("button");

  const handleSubmit = fireEvent.click(button);

  expect(handleSubmit).toBeTruthy();
});
