class PlayersController < ApplicationController
    before_action :find_player, only: [:show]
    
    def index
        players = Player.all
        render json: players, except: [ :created_at, :updated_at, :id]
    end

    def show
    
    end
    
    def create
        player = Player.create(player_params)
        render json: player, except: [ :created_at, :updated_at, :id]
    end


    private
    def find_player
        player = Player.find(params[:id])
    end 

    def player_params
        params.require(:player).permit!
    end

end
