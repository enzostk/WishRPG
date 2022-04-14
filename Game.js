class Game {
  constructor(turnsLeft = 10) {
    this.turnsLeft = turnsLeft;
  }

  newTurn = () => {
    this.turnsLeft -= 1;
    if (this.turnsLeft === 0) console.log("Dernier tour avant la fin du jeu!");
  }

  watchStats = (players) => {
    players.forEach(player => {
      console.log(`
      👉 Joueur ${player.name} de la classe ${player.constructor.name} (${player.status}) \n
      💘 Points de vie : ${player.hp} 
      💪 Dégats: ${player.dmg} 
      💧 Mana : ${player.mana}
      `);
    });
  }

  playersLeft = (players) => {
    const playersLeft = [];
    players.forEach(player => {
      if (player.status === "playing") playersLeft.push(player);
    });
    return playersLeft;
  }

}
