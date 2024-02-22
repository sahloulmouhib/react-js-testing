/* eslint-disable testing-library/no-render-in-setup */
import {
  render,
  screen,
  waitFor,
  waitForElementToBeRemoved,
} from "@testing-library/react";
import { Counter } from "./Counter2";
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
      beforeEach(async () => {
        user.type(screen.getByLabelText(/Incrementor/), "{selectall}5");
        user.click(screen.getByRole("button", { name: "Increment" }));
        await screen.findByText("Current count: 15");
      });

      it('renders "Current count: 15"', () => {
        expect(screen.getByText("Current count: 15")).toBeInTheDocument();
      });

      it("renders too big, and disappear after 300 ms", async () => {
        await waitForElementToBeRemoved(() =>
          screen.queryByText("I am too small")
        );
        expect(screen.queryByText("I am too small")).not.toBeInTheDocument();
      });

      describe('when the incrementor changes to empty string and "+" button is clicked', () => {
        beforeEach(async () => {
          user.type(
            screen.getByLabelText(/Incrementor/),
            "{selectall}{delete}"
          );
          user.click(screen.getByRole("button", { name: "Increment" }));
          await screen.findByText("Current count: 16");
        });

        it('renders "Current Count: 16"', () => {
          expect(screen.getByText("Current count: 16")).toBeInTheDocument();
        });
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

      it('renders "Current count: 1"', async () => {
        await waitFor(() => {
          expect(screen.getByText("Current count: 1")).toBeInTheDocument();
        });
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
