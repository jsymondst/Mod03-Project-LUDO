class CreateGameRecords < ActiveRecord::Migration[6.0]
  def change
    create_table :game_records do |t|
      t.references :player, null: false, foreign_key: true
      t.references :game, null: false, foreign_key: true
      t.integer :position, default: 0
      t.integer :payout
      t.integer :player_number

      t.timestamps
    end
  end
end
