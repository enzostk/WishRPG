const players = [];
const Grace = new Fighter();
Grace.name = "Grace";
const Ulder = new Paladin();
Ulder.name = "Ulder";
const Moana = new Monk();
Moana.name = "Moana";
const Draven = new Berzerker();
Draven.name = "Draven";
const Carl = new Assassin();
Carl.name = "Carl";
players.push(Grace, Ulder, Moana, Draven, Carl);

const game = new Game();
console.log(`Bienvenue dans notre super jeu de la mort qui pue.
Les règles sont simples: réussir à tuer les 4 autres joueurs ou survivre jusqu'à la fin des 10 tours ! 
Bon chance!`)
console.log(`Voici nos 5 combattants :`)
game.watchStats(players);

while (game.turnsLeft > 0 && game.playersLeft(players).length > 1) {
  const turn = new Turn(game, players);
  turn.startTurn();
}

console.log("La partie est terminée! Les gagnants sont:");
game.playersLeft(players).forEach(player => {
  console.log(`⭐ ${player.name}`);
});