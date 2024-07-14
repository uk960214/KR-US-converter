import { render, screen } from "@testing-library/react";
import WeightConverter from "./WeightConverter";
import { describe, it, expect } from "vitest";

describe("WeightConverter", () => {
  it("renders the Weight Converter component", () => {
    render(<WeightConverter />);
    expect(screen.getByText("무게 변환기")).toBeInTheDocument();
  });
});
