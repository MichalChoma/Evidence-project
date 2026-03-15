import { describe, expect, it } from "vitest";
import { getSegments } from "./cistercian";

const mast = { x1: 60, y1: 20, x2: 60, y2: 160 };

describe("getSegments", () => {
  it("returns only the mast for 0", () => {
    expect(getSegments(0)).toEqual([mast]);
  });

  it("returns empty array for out-of-range values", () => {
    expect(getSegments(-1)).toEqual([]);
    expect(getSegments(10000)).toEqual([]);
  });

  it("ones digit — top-right quadrant (no mirror)", () => {
    const segments = getSegments(1);
    expect(segments).toContainEqual({ x1: 60, y1: 20, x2: 100, y2: 20 });
  });

  it("tens digit — top-left quadrant (mirrorX)", () => {
    const segments = getSegments(10);
    expect(segments).toContainEqual({ x1: 60, y1: 20, x2: 20, y2: 20 });
  });

  it("hundreds digit — bottom-right quadrant (mirrorY)", () => {
    const segments = getSegments(100);
    expect(segments).toContainEqual({ x1: 60, y1: 160, x2: 100, y2: 160 });
  });

  it("thousands digit — bottom-left quadrant (mirrorX + mirrorY)", () => {
    const segments = getSegments(1000);
    expect(segments).toContainEqual({ x1: 60, y1: 160, x2: 20, y2: 160 });
  });

  it("combines all four digits", () => {
    const segments = getSegments(1111);
    expect(segments.length).toBeGreaterThan(4);
  });

  it("always includes the mast", () => {
    [0, 1, 42, 9999].forEach((n) => {
      expect(getSegments(n)).toContainEqual(mast);
    });
  });
});
