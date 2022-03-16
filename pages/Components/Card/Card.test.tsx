/**
 * @jest-environment jsdom
 */
import React from "react";
import { render } from "@testing-library/react";
import { Card } from "./Card";
import { fetchLaunchData } from "../../../utils/helpers";

jest.mock("../../../utils/helpers");

const launch = {
  mission_name: "Test Mission",
  launch_date_utc: "2006-03-24T22:30:00.000Z",
  mission_patch_small: "https://images2.imgbox.com/3c/0e/T8iJcSN3_o.png",
};

describe("Card Component", () => {
  test("should render a list of products", async () => {
    (fetchLaunchData as jest.Mock).mockResolvedValueOnce(launch);
    let { getByText } = render(<Card />);
    expect(fetchLaunchData).toHaveBeenCalledTimes(1);
    expect(getByText("Test Mission")).toBeInTheDocument();
  });
});

// describe("Card Component", () => {
//   it("should display at least one card component with a list of mission details", () => {
//     let { getAllByRole } = render(<Card launch={launch} />);
//     expect(getAllByRole("listitem")).toMatchInlineSnapshot(`
// Array [
//   <li>
//     Mission Name: "Test Mission",
//     Launch Date: "2006-03-24T22:30:00.000Z",
//   </li>,
// ]
// `);
//   });
// });
