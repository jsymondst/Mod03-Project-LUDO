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
        render json: game, except: [ :created_at, :updated_at, :id]
    end


    private
    def find_game
        game = Game.find(params[:id])
    end 

    def game_params
        params.require(:game).permit!
    end
end
