class Game < ApplicationRecord
    
    has_many :game_records
    has_many :players, through: :game_records

end
