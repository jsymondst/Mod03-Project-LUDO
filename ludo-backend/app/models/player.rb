class Player < ApplicationRecord

    has_many :game_records
    has_many :games, through: :game_records


    validates :username, uniqueness: true
    validates :username, presence: true

end
