class Paladin extends Character {
  constructor(hp = 16, dmg = 3, mana = 160, status = "playing", name) {
    super(hp, dmg, mana, status, name);
  }

  specialAttack = (victim) => this.healingLighting(victim);

  healingLighting = (victim) => {
    const specialDamage = 4;
    const manaCost = 40;
    const specialHealing = 5;
    if (manaCost <= this.mana) {
      victim.takeDamage(specialDamage);
      this.hp += specialHealing;
      this.mana -= manaCost;
      console.log(`Le paladin utilise son attaque spéciale sur ${victim.name} ! \nIl lui inflige 4HP, perd 20 points de mana et se soigne de 5HP.`)
    }
    else {
      this.dealDamage(victim);
      console.log("Pas assez de mana! Une attaque de base lui a été infligé.");
    }
  }

}
