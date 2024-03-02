import router from "@adonisjs/core/services/router";

export const playersRouter = () =>
  router
    .group(() => {
      router.get("/", () => {
        return {
          ok: "ca marche",
        };
      });
    })
    .prefix("players");
