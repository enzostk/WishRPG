class Fighter extends Character {
  constructor(hp = 12, dmg = 4, mana = 40, status = "playing", name) {
    super(hp, dmg, mana, status, name);
  }

  specialAttack = (victim) => this.darkVision(victim);

  darkVision = (victim) => {
    const specialDamage = 5;
    const manaCost = 20;
    if (manaCost <= this.mana) {
      victim.takeDamage(specialDamage);
      this.mana -= manaCost;
      console.log(`Le combattant utilise son attaque spéciale sur ${victim.name} ! \nIl lui inflige 5HP et perd 20 points de mana`)
    }
    else {
      this.dealDamage(victim);
      console.log("Pas assez de mana! Une attaque de base lui a été infligé.");
    }
  }

}