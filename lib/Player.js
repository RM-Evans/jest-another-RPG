const Potion = require('../lib/Potion');
const Character = require('./Character')

class Player extends Character {
    constructor(name = '') {
        super(name)

    
        this.inventory = [new Potion('health'), new Potion()];
    }

    getStats() {
        return {
            potions: this.inventory.length,
            health: this.health,
            strength: this.strength,
            agility: this.agility
        };
    }

    getInventory() {
        if (this.inventory.length) {
            return this.inventory;
        }
        return false;
    }

    addPotion(potion){
        this.inventory.push(potion);
    }

    usePotion(index) {
        const potion = this.inventory.splice(index, 1)[0];

        switch (potion.name) {
            case 'agility':
                this.agility += potion.value;
                break;
            case 'health':
                this.health += potion.value;
                break;
            case 'strength':
                this.strength += potion.value;
                break;
        }
    }
    }

    
    //* BEFORE ES6 SYNTAX
    //inherit prototype methods from the Character HERE - pass in method to Object.create so you can transform it
    // Player.prototype = Object.create(Character.prototype)
    
// Player.prototype.getStats = function () {
//     return {
//         potions: this.inventory.length,
//         health: this.health,
//         strength: this.strength,
//         agility: this.agility
//     };
// };

// Player.prototype.getInventory = function () {
//     if (this.inventory.length) {
//         return this.inventory;
//     }
//     return false;
// };

// Player.prototype.addPotion = function (potion) {
//     this.inventory.push(potion);
// };

// Player.prototype.usePotion = function (index) {
//     const potion = this.inventory.splice(index, 1)[0];

//     switch (potion.name) {
//         case 'agility':
//             this.agility += potion.value;
//             break;
//         case 'health':
//             this.health += potion.value;
//             break;
//         case 'strength':
//             this.strength += potion.value;
//             break;
//     }
// };


module.exports = Player;