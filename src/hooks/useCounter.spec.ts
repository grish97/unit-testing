import { renderHook, act } from "@testing-library/react";
import { useCounter } from "./useCounter";

describe("useCounter", () => {
  it("should have initially zero count", () => {
    const { result } = renderHook(useCounter);
    expect(result.current.count).toBe(0);
  });

  it("should accept initial value", () => {
    const { result } = renderHook(useCounter, {
      initialProps: {
        initialCount: 45,
      }
    });
    expect(result.current.count).toBe(45);
  });

  it("should increment count", () => {
    const { result } = renderHook(useCounter);

    act(() => result.current.increment());

    expect(result.current.count).toBe(1);
  });

  it("should decrement count", () => {
    const { result } = renderHook(useCounter);

    act(() => result.current.decrement());

    expect(result.current.count).toBe(-1);
  });
});
