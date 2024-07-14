import { render, screen } from "@testing-library/react";
import ShoeSizeConverter from "./ShoeSizeConverter";
import { describe, it, expect } from "vitest";

describe("ShoeSizeConverter", () => {
  it("renders the Shoe Size Converter component", () => {
    render(<ShoeSizeConverter />);
    expect(screen.getByText("신발 사이즈 변환기")).toBeInTheDocument();
  });
});
