const atTheOldToad = {
  potions: [
    { name: 'Speed potion', price: 460 },
    { name: 'Dragon breath', price: 780 },
    { name: 'Stone skin', price: 520 },
  ],
  // Change code below this line
  getPotions() {
    return this.potions;
  },
  addPotion(newPotion) {
    for (i = 0; i < this.potions.length; i += 1) {
      if ((this.potions.name = newPotion.name)) {
        return `Error! Potion ${newPotion} is already in your inventory!`;
      }
    }
    this.potions.push(newPotion);
  },
  removePotion(potionName) {
    for (i = 0; i < this.potions.length; i += 1) {
      if (potionName === this.potions[i].name) {
        console.log(potionName);
        console.log(this.potions[i].name);
        console.log(i);
        this.potions.splice(i, 1);
      }
    }
    return `Potion ${potionName} is not in inventory!`;
  },
  updatePotionName(oldName, newName) {
    for (i = 0; i < this.potions.length; i += 1) {
      const potionIndex = this.potions[i].indexOf(oldName);
      if (potionIndex === -1) {
        return `Potion ${oldName} is not in inventory!`;
      }
    }

    this.potions.splice(potionIndex, 1, newName);
  },
  // Change code above this line
};

// atTheOldToad.addPotion({ name: 'Invisibility', price: 620 });
// console.log(atTheOldToad);
// atTheOldToad.removePotion('Dragon breath');
// console.log(atTheOldToad);
atTheOldToad.updatePotionName('Dragon breath', 'Polymorth');
console.log(atTheOldToad);
