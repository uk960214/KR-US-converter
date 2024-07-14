import { render, screen } from "@testing-library/react";
import SpeedConverter from "./SpeedConverter";
import { describe, it, expect } from "vitest";

describe("SpeedConverter", () => {
  it("renders the Speed Converter component", () => {
    render(<SpeedConverter />);
    expect(screen.getByText("속도 변환기")).toBeInTheDocument();
  });
});
