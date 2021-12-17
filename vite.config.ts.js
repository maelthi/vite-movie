var __require = /* @__PURE__ */ ((x) => typeof require !== "undefined" ? require : typeof Proxy !== "undefined" ? new Proxy(x, {
  get: (a, b) => (typeof require !== "undefined" ? require : a)[b]
}) : x)(function(x) {
  if (typeof require !== "undefined")
    return require.apply(this, arguments);
  throw new Error('Dynamic require of "' + x + '" is not supported');
});

// vite.config.ts
import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
var path = __require("path");
var vite_config_default = defineConfig({
  resolve: {
    alias: {
      "@molecules": path.resolve("C:\\laragon\\www\\vite", "./src/components/molecules"),
      "@organisms": path.resolve("C:\\laragon\\www\\vite", "./src/components/organisms"),
      "@pages": path.resolve("C:\\laragon\\www\\vite", "./src/pages"),
      "@assets": path.resolve("C:\\laragon\\www\\vite", "./src/assets"),
      "@services": path.resolve("C:\\laragon\\www\\vite", "./src/services"),
      "@helpers": path.resolve("C:\\laragon\\www\\vite", "./src/utils/helpers")
    }
  },
  plugins: [react()]
});
export {
  vite_config_default as default
};
//# sourceMappingURL=data:application/json;base64,ewogICJ2ZXJzaW9uIjogMywKICAic291cmNlcyI6IFsidml0ZS5jb25maWcudHMiXSwKICAic291cmNlc0NvbnRlbnQiOiBbImltcG9ydCB7IGRlZmluZUNvbmZpZyB9IGZyb20gXCJ2aXRlXCJcbmltcG9ydCByZWFjdCBmcm9tIFwiQHZpdGVqcy9wbHVnaW4tcmVhY3RcIlxuXG5jb25zdCBwYXRoID0gcmVxdWlyZShcInBhdGhcIilcblxuLy8gaHR0cHM6Ly92aXRlanMuZGV2L2NvbmZpZy9cbmV4cG9ydCBkZWZhdWx0IGRlZmluZUNvbmZpZyh7XG4gIHJlc29sdmU6IHtcbiAgICBhbGlhczoge1xuICAgICAgXCJAbW9sZWN1bGVzXCI6IHBhdGgucmVzb2x2ZShcIkM6XFxcXGxhcmFnb25cXFxcd3d3XFxcXHZpdGVcIiwgXCIuL3NyYy9jb21wb25lbnRzL21vbGVjdWxlc1wiKSxcbiAgICAgIFwiQG9yZ2FuaXNtc1wiOiBwYXRoLnJlc29sdmUoXCJDOlxcXFxsYXJhZ29uXFxcXHd3d1xcXFx2aXRlXCIsIFwiLi9zcmMvY29tcG9uZW50cy9vcmdhbmlzbXNcIiksXG4gICAgICBcIkBwYWdlc1wiOiBwYXRoLnJlc29sdmUoXCJDOlxcXFxsYXJhZ29uXFxcXHd3d1xcXFx2aXRlXCIsIFwiLi9zcmMvcGFnZXNcIiksXG4gICAgICBcIkBhc3NldHNcIjogcGF0aC5yZXNvbHZlKFwiQzpcXFxcbGFyYWdvblxcXFx3d3dcXFxcdml0ZVwiLCBcIi4vc3JjL2Fzc2V0c1wiKSxcbiAgICAgIFwiQHNlcnZpY2VzXCI6IHBhdGgucmVzb2x2ZShcIkM6XFxcXGxhcmFnb25cXFxcd3d3XFxcXHZpdGVcIiwgXCIuL3NyYy9zZXJ2aWNlc1wiKSxcbiAgICAgIFwiQGhlbHBlcnNcIjogcGF0aC5yZXNvbHZlKFwiQzpcXFxcbGFyYWdvblxcXFx3d3dcXFxcdml0ZVwiLCBcIi4vc3JjL3V0aWxzL2hlbHBlcnNcIiksXG4gICAgfSxcbiAgfSxcbiAgcGx1Z2luczogW3JlYWN0KCldLFxufSlcbiJdLAogICJtYXBwaW5ncyI6ICI7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFFQSxJQUFNLE9BQU8sVUFBUTtBQUdyQixJQUFPLHNCQUFRLGFBQWE7QUFBQSxFQUMxQixTQUFTO0FBQUEsSUFDUCxPQUFPO0FBQUEsTUFDTCxjQUFjLEtBQUssUUFBUSwwQkFBMEI7QUFBQSxNQUNyRCxjQUFjLEtBQUssUUFBUSwwQkFBMEI7QUFBQSxNQUNyRCxVQUFVLEtBQUssUUFBUSwwQkFBMEI7QUFBQSxNQUNqRCxXQUFXLEtBQUssUUFBUSwwQkFBMEI7QUFBQSxNQUNsRCxhQUFhLEtBQUssUUFBUSwwQkFBMEI7QUFBQSxNQUNwRCxZQUFZLEtBQUssUUFBUSwwQkFBMEI7QUFBQTtBQUFBO0FBQUEsRUFHdkQsU0FBUyxDQUFDO0FBQUE7IiwKICAibmFtZXMiOiBbXQp9Cg==
