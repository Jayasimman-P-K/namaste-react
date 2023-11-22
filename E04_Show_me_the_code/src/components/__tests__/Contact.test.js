import { render, screen } from "@testing-library/react";
import { Contact } from "../../pages/Contact";
import "@testing-library/jest-dom";

test("Should load Contact us component", () => {
  render(<Contact />);

  const heading = screen.getByRole("heading");
  expect(heading).toBeInTheDocument();
});

test("Should load button inside the Contact us component", () => {
  render(<Contact />);

  const button = screen.getByRole("button");
  expect(button).toBeInTheDocument();
});
