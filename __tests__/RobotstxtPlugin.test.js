import { webpack } from "./helpers";
import RobotstxtPlugin from "../src/RobotstxtPlugin";

describe("plugin", () => {
  it("should execute successfully", async () => {
    const stats = await webpack("entry.js");

    const { warnings, errors, assets } = stats.compilation;

    expect(warnings).toMatchSnapshot("warnings");
    expect(errors).toMatchSnapshot("errors");
    expect(assets["robots.txt"].source()).toMatchSnapshot();
  });

  it("should execute successfully #2", async () => {
    const stats = await webpack("entry.js", {
      plugins: [new RobotstxtPlugin()]
    });

    const { warnings, errors, assets } = stats.compilation;

    expect(warnings).toMatchSnapshot("warnings");
    expect(errors).toMatchSnapshot("errors");
    expect(assets["robots.txt"].source()).toMatchSnapshot();
  });

  it("should execute successfully with `filePath` option", async () => {
    const stats = await webpack("entry.js", {
      pluginOptions: {
        filePath: "robots.dev.txt"
      }
    });

    const { warnings, errors, assets } = stats.compilation;

    expect(warnings).toMatchSnapshot("warnings");
    expect(errors).toMatchSnapshot("errors");
    expect(assets["robots.dev.txt"].source()).toMatchSnapshot();
  });

  it("should throw error on invalid `generate-robotstxt` options", async () => {
    const stats = await webpack("entry.js", {
      pluginOptions: {
        policy: {}
      }
    });

    const { warnings, errors } = stats.compilation;

    expect(warnings).toMatchSnapshot("warnings");
    expect(errors).toMatchSnapshot("errors");
  });
});
