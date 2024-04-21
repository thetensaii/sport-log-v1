import router from "@adonisjs/core/services/router";
import server from "@adonisjs/core/services/server";

server.errorHandler(() => import("#app/exceptions/handler"));

router.use([() => import("@adonisjs/core/bodyparser_middleware")]);
