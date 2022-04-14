class Assassin extends Character {
  constructor(hp = 6, dmg = 6, mana = 20, status = "playing", name) {
    super(hp, dmg, mana, status, name);
  }

  specialAttack = (victim) => this.shadowHit(victim);

  shadowHit = (victim) => {
    const specialDamage = 7;
    const manaCost = 20;
    if (manaCost <= this.mana) {
      victim.takeDamage(specialDamage);
      this.mana -= manaCost;
      console.log(`L'assassin utilise sa compétence spéciale, il inflige 7 points de dégâts à ${victime.name}.'`)
    }
    else {
      this.dealDamage(victim);
      console.log("Pas assez de mana! Une attaque de base lui a été infligé.");
    }
  }

}