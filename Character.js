class Character {
  constructor(hp, dmg, mana, status, name) {
    this.hp = hp;
    this.dmg = dmg;
    this.mana = mana;
    this.status = status;
    this.name = name;
  }

  takeDamage = (dmgReceived) => {
    this.hp -= dmgReceived;
    if (this.hp <= 0) {
      this.loser();
    }  
  }

  dealDamage = (victim) => {
    victim.takeDamage(this.dmg);
    if (victim.status === "loser") {
      const manaBonus = 20;
      this.mana += manaBonus;
    }
  }

  loser = () => {
    this.status = "loser";
  }

}

