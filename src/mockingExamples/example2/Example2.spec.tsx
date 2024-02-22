import { fireEvent, render, screen } from "@testing-library/react";
import { Example2, rows } from "./Example2";
import React from "react";
import { DataGrid } from "@mui/x-data-grid";
jest.mock("@mui/x-data-grid", () => ({
  DataGrid: jest.fn(() => <div>table</div>),
}));

const mockedDataGrid = jest.mocked(DataGrid);

describe("My Component", () => {
  beforeEach(() => {
    mockedDataGrid.mockClear();
  });
  it("renders Material ui grid with columnDefs and rowData", () => {
    const onMoney = jest.fn();
    render(<Example2 onMoney={onMoney} />);
    fireEvent.click(screen.getByRole("button", { name: "Give me 33 dollars" }));
    expect(onMoney).toHaveBeenCalledTimes(1);
    expect(onMoney).toHaveBeenCalledWith(33);
  });

  it("renders table passing the expected props", () => {
    render(<Example2 onMoney={jest.fn()} />);
    expect(mockedDataGrid).toHaveBeenCalledTimes(1);
    // the first argument is the props, the second is the context
    expect(mockedDataGrid).toHaveBeenCalledWith(
      {
        rows: rows,
        columns: [
          // the expect.objectContaining is used to check if the object contains the expected properties
          expect.objectContaining({ field: "id" }),
          expect.objectContaining({ field: "firstName" }),
          expect.objectContaining({ field: "lastName" }),
          expect.objectContaining({ field: "age" }),
        ],
        checkboxSelection: true,
        pageSizeOptions: [5, 10, 100],
      },
      {}
    );
  });
});
