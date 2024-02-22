import { randomBetween } from "./randomBetween";

const randomSpy = jest.spyOn(Math, "random");

describe("RandomBetween", () => {
  describe("when Math.random() returns 0", () => {
    beforeEach(() => {
      // find away to mock Math.random() to return 0
      randomSpy.mockClear().mockReturnValue(0);
    });
    it("called with min=3 and max=5 returns 3", () => {
      expect(randomBetween(3, 5)).toBeGreaterThanOrEqual(3);
      expect(Math.random).toHaveBeenCalledTimes(1);
    });
  });

  describe("when Math.random() returns 0.5", () => {
    beforeEach(() => {
      // find away to mock Math.random() to return 0
      randomSpy.mockClear().mockReturnValue(0.5);
    });
    it("called with min=3 and max=5 returns 4", () => {
      expect(randomBetween(3, 5)).toBeGreaterThanOrEqual(4);
      expect(Math.random).toHaveBeenCalledTimes(1);
    });
  });

  describe("when Math.random() returns 5", () => {
    beforeEach(() => {
      // find away to mock Math.random() to return 0
      randomSpy.mockClear().mockReturnValue(0.9999);
    });
    it("called with min=3 and max=5 returns 5", () => {
      expect(randomBetween(3, 5)).toBeGreaterThanOrEqual(5);
      expect(Math.random).toHaveBeenCalledTimes(1);
    });
  });
});
