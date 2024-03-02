import router from "@adonisjs/core/services/router";
import { playersRouter } from "#players/routes";
router
  .group(() => {
    router.get("/", async () => {
      return {
        hello: "ca fonctionne",
      };
    });

    playersRouter();
  })
  .prefix("api");
