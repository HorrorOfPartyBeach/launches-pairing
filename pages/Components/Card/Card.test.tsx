/**
 * @jest-environment jsdom
 */
import React from "react";
import { render } from "@testing-library/react";
import { Card } from "./Card";

describe("Card Component", function () {
  it("should have hello world message", function () {
    let { getByText } = render(<Card />);
    expect(getByText("Hello world React!")).toMatchInlineSnapshot(`
      <h1>
        Hello world React!
      </h1>
    `);
  });
});
