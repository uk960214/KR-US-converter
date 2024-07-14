import { render, screen } from "@testing-library/react";
import VolumeConverter from "./VolumeConverter";
import { describe, it, expect } from "vitest";

describe("VolumeConverter", () => {
  it("renders the Volume Converter component", () => {
    render(<VolumeConverter />);
    expect(screen.getByText("부피 변환기")).toBeInTheDocument();
  });
});
