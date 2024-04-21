import { DateTime } from "luxon";
import { BaseModel, column, hasOne } from "@adonisjs/lucid/orm";
import Player from "./Player.js";
import type { HasOne } from "@adonisjs/lucid/types/relations";

export default class User extends BaseModel {
  @column({ isPrimary: true })
  declare id: number;

  @column()
  declare userType: string;

  @hasOne(() => Player)
  declare player: HasOne<typeof Player>;

  @column()
  declare email: string;

  @column()
  declare firstname: string;

  @column()
  declare lastname: string;

  @column.date()
  declare birthDate: DateTime;

  @column()
  declare gender: string;

  @column()
  declare phoneNumber: string;

  @column.dateTime({ autoCreate: true })
  declare createdAt: DateTime;

  @column.dateTime({ autoCreate: false, autoUpdate: true })
  declare updatedAt: DateTime;
}
