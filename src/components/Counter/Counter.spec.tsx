/* eslint-disable testing-library/no-render-in-setup */
import { render, screen } from "@testing-library/react";
import { Counter } from "./Counter";
import user from "@testing-library/user-event";
import React from "react";

describe("Counter", () => {
  describe("initialized with defaultCounter=10", () => {
    beforeEach(() => {
      render(<Counter description="WWW" defaultCount={10} />);
    });

    it('renders "Current count: 10"', () => {
      expect(screen.getByText("Current count: 10")).toBeInTheDocument();
    });

    it("renders title as WWW", () => {
      expect(screen.getByText(/WWW/)).toBeInTheDocument();
    });

    describe('When the incrementor changes to 5 "+" button is clicked', () => {
      beforeEach(() => {
        user.type(screen.getByLabelText(/Incrementor/), "{selectall}5");
        user.click(screen.getByRole("button", { name: "Increment" }));
      });

      it('renders "Current count: 15"', () => {
        expect(screen.getByText("Current count: 15")).toBeInTheDocument();
      });
    });

    describe('When the incrementor changes to 5 "-" button is clicked', () => {
      beforeEach(() => {
        user.type(screen.getByLabelText(/Incrementor/), "{selectall}5");
        user.click(screen.getByRole("button", { name: "Decrement" }));
      });

      it('renders "Current count: -5"', () => {
        expect(screen.getByText("Current count: 5")).toBeInTheDocument();
      });
    });
  });
  describe("initialized with defaultCounter=0", () => {
    beforeEach(() => {
      render(<Counter description="My Counter" defaultCount={0} />);
    });

    it('renders "Current count: 0"', () => {
      expect(screen.getByText("Current count: 0")).toBeInTheDocument();
    });

    describe('When the "+" button is clicked', () => {
      beforeEach(() => {
        user.click(screen.getByRole("button", { name: "Increment" }));
      });

      it('renders "Current count: 1"', () => {
        expect(screen.getByText("Current count: 1")).toBeInTheDocument();
      });
    });

    describe('When the "-" button is clicked', () => {
      beforeEach(() => {
        user.click(screen.getByRole("button", { name: "Decrement" }));
      });

      it('renders "Current count: 1"', () => {
        expect(screen.getByText("Current count: -1")).toBeInTheDocument();
      });
    });
  });
});
