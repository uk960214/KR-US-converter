import { render, screen } from "@testing-library/react";
import TemperatureConverter from "./TemperatureConverter";
import { describe, it, expect } from "vitest";

describe("TemperatureConverter", () => {
  it("renders the Temperature Converter component", () => {
    render(<TemperatureConverter />);
    expect(screen.getByText("온도 변환기")).toBeInTheDocument();
  });
});
