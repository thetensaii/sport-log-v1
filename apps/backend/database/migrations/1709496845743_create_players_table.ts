import { BaseSchema } from "@adonisjs/lucid/schema";

export default class extends BaseSchema {
  protected usersTableName = "users";
  protected playersTableName = "players";

  async up() {
    this.schema.createTable(this.usersTableName, (table) => {
      table.increments("id").primary();

      table.enum("user_type", ["player", "coach"]);
      table.string("email");
      table.string("firstname");
      table.string("lastname");
      table.date("birth_date");
      table.enum("gender", ["man", "woman"]);
      table.string("phone_number");

      table.timestamp("created_at");
      table.timestamp("updated_at");
    });

    this.schema.createTable(this.playersTableName, (table) => {
      table.increments("id").primary();

      table
        .integer("user_id")
        .references("id")
        .inTable(this.usersTableName)
        .onDelete("CASCADE");

      table.integer("height");
      table.string("division");
      table.string("current_club");
      table.string("current_coach_name");
      table.string("pro_resume_link");
      table.string("sport_resume_link");
      table.string("presentation_video_link");
      table.string("highlights_video_link");
      table.string("proballers_profile_link");

      table.timestamp("created_at");
      table.timestamp("updated_at");
    });
  }

  async down() {
    this.schema.dropTable(this.playersTableName);
    this.schema.dropTable(this.usersTableName);
  }
}
