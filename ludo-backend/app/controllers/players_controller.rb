class PlayersController < ApplicationController

    def index
        players = Player.all
        render json: players, except: [ :created_at, :updated_at, :id]
    end

    
    def create
        player = player.create(player_params)
        render json: player, except: [ :created_at, :updated_at, :id]
    end


    private
    
    def player_params
        params.require(:player).permit!
    end
end
