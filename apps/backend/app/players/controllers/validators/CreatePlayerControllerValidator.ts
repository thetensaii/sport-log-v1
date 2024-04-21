import vine from "@vinejs/vine";

export const createPlayerControllerValidator = vine.compile(
  vine.object({
    firstname: vine.string(),
    lastname: vine.string(),
    email: vine.string().email(),
    phone_number: vine.string().mobile(),
    birth_date: vine.date(),
    gender: vine.enum(["man", "woman"]),
    height: vine.number().positive(),
    positions: vine.array(vine.string()),
    current_coach_name: vine.string().optional(),
    division: vine.string().optional(),
    current_club: vine.string().optional(),
    proballers_profile_link: vine.string().url().optional(),
    presentation_video_link: vine.string().url().optional(),
    pro_resume_link: vine.string().url().optional(),
    sport_resume_link: vine.string().url().optional(),
    highlights_video_link: vine.string().url().optional(),
    social_networks: vine
      .array(
        vine.object({
          type: vine.string(),
          link: vine.string().url(),
        }),
      )
      .optional(),
  }),
);
