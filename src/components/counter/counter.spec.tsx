import {act, render, screen} from "@testing-library/react";
import user from "@testing-library/user-event";
import { CounterComponent } from "./counter.component.tsx";

describe("Counter", () => {
  test("renders correctly", () => {
    render(<CounterComponent />);

    const countHeader = screen.getByRole("heading");
    expect(countHeader).toBeInTheDocument();

    const incrementButton = screen.getByRole("button", {
      name: "Increment"
    });
    expect(incrementButton).toBeInTheDocument();
  });

  test("renders counters of 0", () => {
    render(<CounterComponent />);
    const countHeader = screen.getByRole("heading");
    expect(countHeader).toHaveTextContent("0");
  });

  test("renders count is 1 after clicking the increment button", async () => {
    user.setup();

    render(<CounterComponent />);
    const incrementButton = screen.getByRole("button", {
      name: "Increment"
    });

    await act(async () => {
      await user.click(incrementButton);
    });

    const countHeader = screen.getByRole("heading");
    expect(countHeader).toHaveTextContent("1");
  });

  test("renders count of 2 after clicking the increment button twice", async () => {
    user.setup();

    render(<CounterComponent />);

    const incrementElement = screen.getByRole("button", {
      name: "Increment"
    });

    await user.click(incrementElement);
    await user.click(incrementElement);

    const countElement = screen.getByRole("heading");
    expect(countElement).toHaveTextContent("2");
  });

  test("renders a count of 10 after clicking the set button", async () => {
    user.setup();

    render(<CounterComponent />);

    const amountInput = screen.getByRole("spinbutton");

    await act(async () => {
      await user.type(amountInput, "10");
    });

    expect(amountInput).toHaveValue(10);

    const setCountElement = screen.getByRole("button", {
      name: "Set"
    });

    await act(async () => {
      await user.click(setCountElement);
    });

    const countElement = screen.getByRole("heading");
    expect(countElement).toHaveTextContent("10");
  });
});
