// Purpose: Remix build configuration kept minimal and readable.
/** @type {import('@remix-run/dev').AppConfig} */
export default {
  appDirectory: "app",
  ignoredRouteFiles: ["**/*.test.*", "**/*.spec.*"],
  serverModuleFormat: "esm",
  serverDependenciesToBundle: [],
  future: {}
};
