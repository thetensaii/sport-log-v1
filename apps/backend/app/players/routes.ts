import router from "@adonisjs/core/services/router";

router.get("/players", async () => {
  return {
    hello: "ca fonctionne",
  };
});
