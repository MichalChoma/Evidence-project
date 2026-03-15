import { describe, expect, it } from "vitest";
import { isInputInvalid, MAX, MIN, parseInput } from "./validation";

describe("parseInput", () => {
  it("returns null for empty string", () => {
    expect(parseInput("")).toBeNull();
  });

  it("returns the number for valid input", () => {
    expect(parseInput("0")).toBe(0);
    expect(parseInput("1")).toBe(1);
    expect(parseInput("9999")).toBe(9999);
    expect(parseInput("1234")).toBe(1234);
  });

  it("returns null below MIN", () => {
    expect(parseInput("-1")).toBeNull();
  });

  it("returns null above MAX", () => {
    expect(parseInput("10000")).toBeNull();
  });

  it(`accepts boundary values ${MIN} and ${MAX}`, () => {
    expect(parseInput(String(MIN))).toBe(MIN);
    expect(parseInput(String(MAX))).toBe(MAX);
  });
});

describe("isInputInvalid", () => {
  it("returns false for empty string", () => {
    expect(isInputInvalid("")).toBe(false);
  });

  it("returns false for valid input", () => {
    expect(isInputInvalid("42")).toBe(false);
    expect(isInputInvalid("0")).toBe(false);
    expect(isInputInvalid("9999")).toBe(false);
  });

  it("returns true for out-of-range input", () => {
    expect(isInputInvalid("-1")).toBe(true);
    expect(isInputInvalid("10000")).toBe(true);
  });
});
