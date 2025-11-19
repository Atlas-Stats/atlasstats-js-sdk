import { defineConfig } from 'tsup';

export default defineConfig({
  entry: ['src/index.ts'],
  format: ['cjs', 'esm'], // Output both CommonJS (.js) and ESM (.mjs)
  target: 'node20',       // OPTIMIZATION: Tells bundler "Assume Node 20 environment"
  dts: true,              // Generate Type Definitions (.d.ts)
  splitting: false,
  sourcemap: true,        // Helps users debug errors in their own apps
  clean: true,            // Delete the /dist folder before every build
  minify: true,           // Shrink file size
});