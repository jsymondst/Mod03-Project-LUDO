class CreateGames < ActiveRecord::Migration[6.0]
  def change
    create_table :games do |t|
      t.string :game_key
      t.integer :player_count
      t.integer :stake
      t.boolean :is_complete
      t.integer :current_turn
      t.string :player1_state
      t.string :player2_state
      t.string :player3_state
      t.string :player4_state
      t.integer :turn_number, default: 0

      t.timestamps
    end
  end
end
