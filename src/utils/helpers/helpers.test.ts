import { getRandomNumber } from "./helpers"

describe("getRandomNumber function", () => {
  it("should return a random number between min and max", () => {
    expect(getRandomNumber(1, 10)).toBeGreaterThanOrEqual(1)
    expect(getRandomNumber(1, 10)).toBeLessThanOrEqual(10)
  })
})
