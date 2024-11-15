
class Character {
    constructor(name, type) {
        this.name = name;
        this.type = type;
        this.health = 100;
        this.inventory = [];
    }

    
    roll() {
        return Math.floor(Math.random() * 20) + 1;
    }

    addItem(item) {
        this.inventory.push(item);
    }
}




class Adventurer extends Character {
    constructor(name, role) {
        super(name, "Adventurer");
        this.role = role;
        this.inventory.push("Bedroll", "50 gold coins");

    }

    
    scout() {
        return `${this.name} scouts the area and finds something interesting!`;
    }
}


class Companion extends Character {


    constructor(name, species) {
        super(name, "Companion");
        this.species = species;
        this.inventory.push("Small hat", "Sunglasses");
    }


    help() {
        return `${this.name} the ${this.species} helps in the adventure!`;
    }
}


function startGame() {
    console.log("Game started!"); 

    
    const adventurer = new Adventurer("Robin", "Fighter");
    const companion = new Companion("Leo", "Cat");
    adventurer.companion = companion;

    
    let messages = [];
    messages.push(`Welcome, ${adventurer.name} the ${adventurer.role}!`);
    messages.push(`You are starting your adventure with ${adventurer.health} health.`);
    messages.push(`Your inventory: ${adventurer.inventory.join(", ")}`);
    messages.push(`${adventurer.companion.name} the ${adventurer.companion.species} is your loyal companion.`);
    messages.push(`${adventurer.companion.name}'s inventory: ${adventurer.companion.inventory.join(", ")}`);

    
    messages.push(adventurer.scout());
    messages.push(companion.help());
    messages.push(`You roll a dice: ${adventurer.roll()}`);
    messages.push(`${adventurer.companion.name} rolls a dice: ${companion.roll()}`);

    


    const outputDiv = document.getElementById("output");
    outputDiv.innerHTML = messages.map(msg => `<p>${msg}</p>`).join("");
}


document.addEventListener("DOMContentLoaded", () => {
    console.log("DOM fully loaded"); 

    
    const startButton = document.getElementById("startButton");

    if (startButton) {
        startButton.addEventListener("click", startGame);
    } else {
        console.error("Start button not found");
    }
});
