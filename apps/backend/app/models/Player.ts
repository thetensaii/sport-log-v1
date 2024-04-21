import { DateTime } from "luxon";
import { BaseModel, belongsTo, column } from "@adonisjs/lucid/orm";
import User from "./User.js";
import type { BelongsTo } from "@adonisjs/lucid/types/relations";

export default class Player extends BaseModel {
  @column({ isPrimary: true })
  declare id: number;

  @column()
  declare userId: string;

  @belongsTo(() => User)
  declare user: BelongsTo<typeof User>;

  @column()
  declare height: number;

  @column()
  declare currentClub: string | null;

  @column()
  declare division: string | null;

  @column()
  declare currentCoachName: string | null;

  @column()
  declare proballersProfileLink: string | null;

  @column()
  declare proResumeLink: string | null;

  @column()
  declare sportResumeLink: string | null;

  @column()
  declare presentationVideoLink: string | null;

  @column()
  declare highlightsVideoLink: string | null;

  @column.dateTime({ autoCreate: true })
  declare createdAt: DateTime;

  @column.dateTime({ autoUpdate: true })
  declare updatedAt: DateTime | null;
}
