class Turn {
  constructor(game, players) {
    this.game = game;
    this.players = players;
  }

  startTurn = () => {
    console.log(`C'est le tour ${11 - game.turnsLeft}! Encore ${game.turnsLeft} avant la fin de partie!`);
    game.newTurn();

    const playersLeft = game.playersLeft(players);
    playersLeft.forEach(player => {

      if (player.status === "loser") return;

      const victimName = prompt(`${player.name}, qui souhaitez-vous attaquer?`);
      const victim = players.find(player => player.name === victimName);
     
      if (victim.status === "loser") { 
        return console.log(`Ce joueur est déja mort!\nDommage, tu perds ton tour!`);
      }
      
      const attackType = prompt("Appuyez sur B pour une attaque basique et S pour une attaque spéciale");

      if (attackType === "B") {
        player.dealDamage(victim);
        console.log(`${player.name} attaque ${victimName} et lui inflige ${player.dmg} HP.`);
      }  else if (attackType === "S") {
         player.specialAttack(victim);
      } 

      if (victim.status === "loser") {
        console.log(`Ce fut le coup fatal pour ${victim.name}, il a été tué!`)
      } else {
        console.log(`${victim.name} a maintenant ${victim.hp}HP.`);
      }
      game.watchStats(players);
    });
  }

}