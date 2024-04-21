import { defineConfig } from "@adonisjs/core/bodyparser";

const bodyParserConfing = defineConfig({
  allowedMethods: ["POST", "PUT", "PATCH", "DELETE"],

  json: {
    types: [
      "application/json",
      "application/json-patch+json",
      "application/vnd.api+json",
      "application/csp-report",
    ],
    convertEmptyStringsToNull: true,
  },
});

export default bodyParserConfing;
