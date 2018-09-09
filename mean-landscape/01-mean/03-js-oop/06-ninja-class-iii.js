

// Define the object constructor
class Ninja{
    constructor(name) {
        this.privateSpeed = 3;
        this.privateStrength = 3;
        this.health = 100;
        this.name = name;
        this.sayName = function() {
            console.log("My name is " + this.name + " I'm a World Class Ninja!!");
        }
        this.showStats = function() {
            console.log("Name : " + this.name + ", " + "Health: " + this.health + ", " + "Speed: " + this.privateSpeed + ", " + "Strength: " + this.privateStrength);
        }
        this.drinkSake = function() {
            this.health = this.health + 10;
            console.log("Your health is increaed by 10");
            console.log("Health: " + this.health);
        }

    }

    
}

class Sensei extends Ninja {
    constructor(name){
        super(name);
        this.privateSpeed = 10;
        this.privateStrength = 10;
        this.health = 200;
        this.wisdom = 10;
    }
    speakWisdom() {
        this.drinkSake();
        console.log('What one programmer can do in one month, two programmers can do in two months');
    }
}

// var marco = new Ninja("Marco");

// marco.sayName();
// marco.showStats();
// marco.drinkSake();

var jun = new Sensei('Jun');
jun.showStats();
jun.speakWisdom();
jun.showStats();