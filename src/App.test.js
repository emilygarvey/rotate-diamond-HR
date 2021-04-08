import React from "react";
//import { render, fireEvent } from "react-dom";
import { render, fireEvent } from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";
import App from "./App";

/**************************************************************************************************
 * Volunteers: add your tests here. They should be failing, but the students should be able to make
 * them pass by editing the other files.
 **************************************************************************************************/

describe("when rendering the App component", () => {
  test("diamond spinner clicked the first time should spin diamond to the right", () => {
    const container = render(<App />);
    const textElement = container.getByText("diamond spinner");
    fireEvent.click(textElement);
    const diamond = container.getByTestId("diamond");
    expect(diamond.className).toEqual("rotate-right");
  });
  test("diamond spinner clicked the second time should spin diamond to the left", () => {
    const container = render(<App />);
    const textElement = container.getByText("diamond spinner");
    fireEvent.click(textElement);
    fireEvent.click(textElement);
    const diamond = container.getByTestId("diamond");
    expect(diamond.className).toEqual("rotate-left");
  });
});

/**
 * test('loads and displays greeting', async () => {
  render(<Fetch url="/greeting" />)

  fireEvent.click(screen.getByText('Load Greeting'))

  await waitFor(() => screen.getByRole('heading'))

  expect(screen.getByRole('heading')).toHaveTextContent('hello there')
  expect(screen.getByRole('button')).toHaveAttribute('disabled')
})
 */
