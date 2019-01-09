import RobotstxtPlugin from "../src/RobotstxtPlugin";
import CJSRobotstxtPlugin from "../src/cjs";

describe("cjs", () => {
  it("should exported plugin", () => {
    expect(CJSRobotstxtPlugin).toEqual(RobotstxtPlugin);
  });
});
