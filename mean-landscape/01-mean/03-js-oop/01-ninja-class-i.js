

// Define the object constructor
function Ninja(name) {

    var privateSpeed = 3;
    var privateStrength = 3;
    var health = 100;
    this.name = name;
    this.sayName = function() {
        console.log("My name is " + this.name + " I'm a World Class Ninja!!");
    }
    this.showStats = function() {
        console.log("Name : " + this.name + ", " + "Health: " + health + ", " + "Speed: " + privateSpeed + ", " + "Strength: " + privateStrength);
    }
    this.drinkSake = function() {
        health = health + 10;
        console.log("Your health is increaed by 10");
        console.log("Health: " + health);
    }
}

var marco = new Ninja("Marco");

marco.sayName();
marco.showStats();
marco.drinkSake();