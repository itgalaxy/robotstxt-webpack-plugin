import path from "path";
import { webpack } from "./helpers";
import RobotstxtPlugin from "../src/RobotstxtPlugin";

describe("plugin", () => {
  it("should execute successfully", async () => {
    const { stats, compiler } = await webpack("entry.js");
    const { warnings, errors } = stats.compilation;

    expect(warnings).toMatchSnapshot("warnings");
    expect(errors).toMatchSnapshot("errors");
    expect(
      // eslint-disable-next-line no-sync
      compiler.outputFileSystem.readFileSync(
        path.resolve(compiler.outputPath, "robots.txt"),
        "utf-8"
      )
    ).toMatchSnapshot();
  });

  it("should execute successfully #2", async () => {
    const { stats, compiler } = await webpack("entry.js", {
      plugins: [new RobotstxtPlugin()],
    });

    const { warnings, errors } = stats.compilation;

    expect(warnings).toMatchSnapshot("warnings");
    expect(errors).toMatchSnapshot("errors");
    expect(
      // eslint-disable-next-line no-sync
      compiler.outputFileSystem.readFileSync(
        path.resolve(compiler.outputPath, "robots.txt"),
        "utf-8"
      )
    ).toMatchSnapshot();
  });

  it("should execute successfully with `filePath` option", async () => {
    const { stats, compiler } = await webpack("entry.js", {
      pluginOptions: {
        filePath: "robots.dev.txt",
      },
    });

    const { warnings, errors } = stats.compilation;

    expect(warnings).toMatchSnapshot("warnings");
    expect(errors).toMatchSnapshot("errors");
    expect(
      // eslint-disable-next-line no-sync
      compiler.outputFileSystem.readFileSync(
        path.resolve(compiler.outputPath, "robots.dev.txt"),
        "utf-8"
      )
    ).toMatchSnapshot();
  });

  it("should throw error on invalid `generate-robotstxt` options", async () => {
    const { stats } = await webpack("entry.js", {
      pluginOptions: {
        policy: {},
      },
    });

    const { warnings, errors } = stats.compilation;

    expect(warnings).toMatchSnapshot("warnings");
    expect(errors).toMatchSnapshot("errors");
  });
});
