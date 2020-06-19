class GamesController < ApplicationController
    before_action :find_game, only: [:show]
    
    def index
        games = Game.all
        render json: games, except: [ :created_at, :updated_at, :id]
    end

    def show
    
    end
    
    def create
        
        game = Game.create(game_params)
        game.is_complete = false
        
        player_1 = Player.find_by(id: params[:player_1_id])
        player_2 = Player.find_by(id: params[:player_2_id])

        GameRecord.create(player: player_1, game:game)
        GameRecord.create(player: player_2, game:game)
        
        
        game_info ={
            game_id: game.id,
            game_stake: game.stake,
            player_1_info:{
                id: player_1.id,
                username: player_1.username,
                avatar: player_1.avatar,
                money: player_1.money
            },
            player_2_info:{
                id: player_2.id,
                username: player_2.username,
                avatar: player_2.avatar,
                money: player_2.money
            }

        }

        render json: game_info
    end


    private
    def find_game
        game = Game.find(params[:id])
    end 

    def game_params
        params.require(:game).permit(:stake, :player_count)
    end
end
