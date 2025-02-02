import { defineConfig } from "@adonisjs/core/app";

export default defineConfig({
  /*
  |--------------------------------------------------------------------------
  | Commands
  |--------------------------------------------------------------------------
  |
  | List of ace commands to register from packages. The application commands
  | will be scanned automatically from the "./commands" directory.
  |
  */
  commands: [
    () => import("@adonisjs/core/commands"),
    () => import("@adonisjs/lucid/commands"),
  ],

  /*
  |--------------------------------------------------------------------------
  | Service providers
  |--------------------------------------------------------------------------
  |
  | List of service providers to import and register when booting the
  | application
  |
  */
  providers: [
    () => import("@adonisjs/core/providers/app_provider"),
    () => import("@adonisjs/lucid/database_provider"),
    () => import("@adonisjs/core/providers/vinejs_provider"),
    () => import("#players/provider"),
  ],

  /*
  |--------------------------------------------------------------------------
  | Preloads
  |--------------------------------------------------------------------------
  |
  | List of modules to import before starting the application.
  |
  */
  preloads: [() => import("#start/kernel"), () => import("#start/routes")],

  /*
  |--------------------------------------------------------------------------
  | Tests
  |--------------------------------------------------------------------------
  |
  | List of test suites to organize tests by their type. Feel free to remove
  | and add additional suites.
  |
  */
});
