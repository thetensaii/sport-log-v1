import { inject } from "@adonisjs/core";
import { Player } from "./Player.js";

@inject()
export abstract class PlayerRepository {
  abstract createPlayer: (player: Player) => Promise<NonNullable<Player["id"]>>;
}
