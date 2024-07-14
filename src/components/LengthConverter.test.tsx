import { render, screen } from "@testing-library/react";
import LengthConverter from "./LengthConverter";
import { describe, it, expect } from "vitest";

describe("LengthConverter", () => {
  it("renders the Length Converter component", () => {
    render(<LengthConverter />);
    expect(screen.getByText("길이 변환기")).toBeInTheDocument();
  });
});
