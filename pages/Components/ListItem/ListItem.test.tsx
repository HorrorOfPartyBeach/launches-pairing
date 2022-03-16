/**
 * @jest-environment jsdom
 */
import React from "react";
import { render } from "@testing-library/react";
import { ListItem } from "./ListItem";
import { fetchLaunchData } from "../../../utils/helpers";

// jest.mock("../../../utils/helpers");

const launch = {
  mission_name: "Test Mission",
  launch_date_utc: "2006-03-24T22:30:00.000Z",
  mission_patch_small: "https://images2.imgbox.com/3c/0e/T8iJcSN3_o.png",
};

describe("ListItem Component", () => {
  test("should render a list of mission details", async () => {
    //(fetchLaunchData as jest.Mock).mockResolvedValueOnce(launch);
    let { getByText } = render(<ListItem launch={launch} />);
    //expect(fetchLaunchData).toHaveBeenCalledTimes(1);
    expect(getByText("Test Mission")).toBeInTheDocument();
  });
});
