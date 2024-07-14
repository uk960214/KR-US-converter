import { render, screen } from "@testing-library/react";
import CurrencyConverter from "./CurrencyConverter";
import { describe, it, expect } from "vitest";

describe("CurrencyConverter", () => {
  it("renders the Currency Converter component", () => {
    render(<CurrencyConverter />);
    expect(screen.getByText("통화 변환기")).toBeInTheDocument();
  });
});
