# This file is auto-generated from the current state of the database. Instead
# of editing this file, please use the migrations feature of Active Record to
# incrementally modify your database, and then regenerate this schema definition.
#
# This file is the source Rails uses to define your schema when running `rails
# db:schema:load`. When creating a new database, `rails db:schema:load` tends to
# be faster and is potentially less error prone than running all of your
# migrations from scratch. Old migrations may fail to apply correctly if those
# migrations use external dependencies or application code.
#
# It's strongly recommended that you check this file into your version control system.

ActiveRecord::Schema.define(version: 2020_06_16_141427) do

  create_table "game_records", force: :cascade do |t|
    t.integer "player_id", null: false
    t.integer "game_id", null: false
    t.integer "position", default: 0
    t.integer "payout"
    t.integer "player_number"
    t.datetime "created_at", precision: 6, null: false
    t.datetime "updated_at", precision: 6, null: false
    t.index ["game_id"], name: "index_game_records_on_game_id"
    t.index ["player_id"], name: "index_game_records_on_player_id"
  end

  create_table "games", force: :cascade do |t|
    t.string "game_key"
    t.integer "player_count"
    t.integer "stake"
    t.boolean "is_complete"
    t.integer "current_turn"
    t.string "player1_state"
    t.string "player2_state"
    t.string "player3_state"
    t.string "player4_state"
    t.integer "turn_number", default: 0
    t.datetime "created_at", precision: 6, null: false
    t.datetime "updated_at", precision: 6, null: false
  end

  create_table "players", force: :cascade do |t|
    t.string "username"
    t.string "avatar"
    t.integer "money"
    t.datetime "created_at", precision: 6, null: false
    t.datetime "updated_at", precision: 6, null: false
  end

  add_foreign_key "game_records", "games"
  add_foreign_key "game_records", "players"
end
