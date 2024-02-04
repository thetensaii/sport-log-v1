import * as esbuild from "esbuild";

const sharedOptions = {
  logLevel: "info",
  entryPoints: ["src/index.ts"],
  bundle: true,
  target: "esnext",
  sourcemap: true,
  external: ["react", "react-dom"],
} satisfies esbuild.SameShape<esbuild.BuildOptions, esbuild.BuildOptions>;

const build = async () => {
  await esbuild.build({
    ...sharedOptions,
    format: "esm",
    outfile: "dist/index.js",
  });
};

build();
