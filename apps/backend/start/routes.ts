import router from "@adonisjs/core/services/router";
import { playersRouter } from "#players/routes";

router
  .group(() => {
    playersRouter();
  })
  .prefix("api");
