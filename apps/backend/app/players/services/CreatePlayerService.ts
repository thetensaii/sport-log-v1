import { inject } from "@adonisjs/core";
import { Player } from "../domain/Player.js";
import { PlayerRepository } from "../domain/PlayerRepository.js";

@inject()
export class CreatePlayerService {
  constructor(protected playerRepository: PlayerRepository) {}

  async create(player: Player): Promise<NonNullable<Player["id"]>> {
    const newPlayerId = await this.playerRepository.createPlayer(player);

    return newPlayerId;
  }
}
