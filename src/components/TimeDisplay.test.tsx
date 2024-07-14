import { render, screen } from "@testing-library/react";
import TimeDisplay from "./TimeDisplay";
import { describe, it, expect } from "vitest";

describe("TimeDisplay", () => {
  it("renders the Time Display component", () => {
    render(<TimeDisplay />);
    expect(screen.getByText("현재 시간")).toBeInTheDocument();
    expect(screen.getByText(/한국 시간:/)).toBeInTheDocument();
    expect(screen.getByText(/뉴욕 시간:/)).toBeInTheDocument();
  });
});
