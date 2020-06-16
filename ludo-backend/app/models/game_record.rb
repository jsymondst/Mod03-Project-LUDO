class GameRecord < ApplicationRecord
  
  belongs_to :player
  belongs_to :game

  # validates :player, uniqueness: {scope: :game_id}
  # validates :player_number, uniqueness: {scope: :game_id}
  
end
