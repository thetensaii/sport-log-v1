import { inject } from "@adonisjs/core";
import { CreatePlayerService } from "../services/CreatePlayerService.js";
import { Player } from "../domain/Player.js";
import { HttpContext } from "@adonisjs/core/http";
import { createPlayerControllerValidator } from "./validators/CreatePlayerControllerValidator.js";

@inject()
export class CreatePlayerController {
  constructor(protected createPlayerService: CreatePlayerService) {}

  async create({ request }: HttpContext) {
    const payload = await request.validateUsing(
      createPlayerControllerValidator,
    );

    const newPlayer = new Player({
      firstname: payload.firstname,
      lastname: payload.lastname,
      email: payload.email,
      phoneNumber: payload.phone_number,
      birthDate: payload.birth_date,
      gender: payload.gender,
      height: payload.height,
      positions: payload.positions,
      division: payload.division,
      currentClub: payload.current_club,
      currentCoachName: payload.current_coach_name,
      proResumeLink: payload.pro_resume_link,
      sportResumeLink: payload.sport_resume_link,
      proballersProfileLink: payload.proballers_profile_link,
      presentationVideoLink: payload.presentation_video_link,
      highlightsVideoLink: payload.highlights_video_link,
      socialNetworks: payload.social_networks,
    });

    const newPlayerId = await this.createPlayerService.create(newPlayer);

    return { newPlayerId };
  }
}
