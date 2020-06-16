# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)


jamie = Player.create(

{
    username: "Jamie",
    money: 5000,
    avatar: ""
})

thea = Player.create(
{
    username: "Thea",
    money: 5000,
    avatar: ""
}

)

game1 = Game.create(
    {
        game_key: "ShoeDogCaterpillar",
        player_count: 2,
        stake: 500,
        is_complete: false
    }
)

GameRecord.create({
    game: game1,
    player: jamie,
    payout: 0,
    player_number: 1
})

GameRecord.create({
    game: game1,
    player: thea,
    payout: 0,
    player_number: 2
})