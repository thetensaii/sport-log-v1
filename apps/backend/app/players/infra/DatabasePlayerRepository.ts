import { inject } from "@adonisjs/core";
import { Player } from "../domain/Player.js";
import { PlayerRepository } from "../domain/PlayerRepository.js";
import db from "@adonisjs/lucid/services/db";
import User from "#app/models/User";
import { DateTime } from "luxon";

@inject()
export class DatabasePlayerRepository implements PlayerRepository {
  async createPlayer(player: Player): Promise<string> {
    const newPlayerId = await db.transaction(async (trx) => {
      const user = new User();
      user.userType = "player";
      user.gender = player.gender;
      user.email = player.email;
      user.firstname = player.firstname;
      user.lastname = player.lastname;
      user.birthDate = DateTime.fromJSDate(player.birthDate);
      user.phoneNumber = player.phoneNumber;

      user.useTransaction(trx);
      const { id: newPlayerId } = await user.save();

      await user.related("player").create({
        height: player.height,
        currentClub: player.currentClub,
        currentCoachName: player.currentCoachName,
        division: player.division,
        proballersProfileLink: player.proballersProfileLink,
        proResumeLink: player.proResumeLink,
        sportResumeLink: player.sportResumeLink,
        presentationVideoLink: player.presentationVideoLink,
        highlightsVideoLink: player.highlightsVideoLink,
      });

      return newPlayerId;
    });

    return `${newPlayerId}`;
  }
}
