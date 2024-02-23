import { render, screen } from "@testing-library/react";
import { MyDrawer } from "./Example3";
import user from "@testing-library/user-event";
import React from "react";

// eslint-disable-next-line @typescript-eslint/no-unsafe-return
jest.mock("@mui/material", () => ({
  ...jest.requireActual("@mui/material"),
  SwipeableDrawer: () => <div>lol</div>,
}));

describe("Drawer", () => {
  it('shows no "Hello YouTube!"', () => {
    render(<MyDrawer />);
    expect(screen.getByText("lol")).toBeInTheDocument();
  });

  it('clicking on "Open Drawer" Button shows "Hello YouTube!"', () => {
    render(<MyDrawer />);
    user.click(screen.getByRole("button", { name: "Open Drawer" }));
    expect(screen.getByText("lol")).toBeInTheDocument();
  });
});
