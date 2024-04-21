import router from "@adonisjs/core/services/router";
import { CreatePlayerController } from "./controllers/CreatePlayerController.js";

export const playersRouter = () =>
  router
    .group(() => {
      router.post("/", [CreatePlayerController, "create"]);
    })
    .prefix("players");
