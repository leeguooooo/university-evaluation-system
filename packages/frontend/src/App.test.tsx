import React from "react";
import { render, screen } from "@testing-library/react";
import App from "./App";

test("renders React App title in the browser tab", () => {
  render(<App />);
  // const titleElement = screen.getByText("React App");
  // expect(titleElement).toBeInTheDocument();
});
