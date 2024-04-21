import { ApplicationService } from "@adonisjs/core/types";
import { PlayerRepository } from "./domain/PlayerRepository.js";
import { DatabasePlayerRepository } from "./infra/DatabasePlayerRepository.js";

export default class PlayerProvider {
  constructor(protected app: ApplicationService) {}

  register() {
    this.app.container.bind(
      PlayerRepository,
      () => new DatabasePlayerRepository(),
    );
  }
}
