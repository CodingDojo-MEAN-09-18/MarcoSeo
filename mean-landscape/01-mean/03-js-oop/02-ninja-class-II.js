

// Define the object constructor
function Ninja(name) {

    var privateSpeed = 3;
    var privateStrength = 3;
    this.health = 100;
    this.name = name;

    this.sayName = function() {
        console.log("My name is " + this.name + " I'm a World Class Ninja!!");
    }
    this.showStats = function() {
        console.log("Name : " + this.name + ", " + "Health: " + this.health + ", " + "Speed: " + privateSpeed + ", " + "Strength: " + privateStrength);
    }
    this.drinkSake = function() {
        this.health = this.health + 10;
        console.log("Your health is increaed by 10");
        console.log("Health: " + this.health);
    }
    this.punch = function(enemy) {
        console.log(enemy instanceof Ninja);
        if (enemy instanceof Ninja){
            enemy.health -= 5;
            console.log(enemy.name + " was punched by " + this.name + " and lost 5 health!");
            console.log(enemy.health);
        } else {
            console.log(enemy + " is not a Ninja!!");
        }
    }

    this.kick = function(enemy) {
        if (enemy instanceof Ninja){
            enemy.health -= privateStrength * 15;
            console.log(enemy.name + " was kicked by " + this.name + " and lost " + (privateStrength * 15) + " health!");
            console.log(enemy.health);
        } else {
            console.log(enemy + " is not a Ninja!!")
        }
    }
}

var marco = new Ninja("Marco");
var jun = new Ninja("Jun");
marco.sayName();
marco.showStats();
marco.drinkSake();
marco.punch(jun);
marco.kick(jun);

jun.sayName();
jun.showStats();
jun.kick("who");