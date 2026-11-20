import { defineConfig } from "tsdown"

export default defineConfig({
  entry: ["src/axsuz.ts", "src/core/index.ts"],
  platform: "node",
  exports: true,
  dts: true
})
