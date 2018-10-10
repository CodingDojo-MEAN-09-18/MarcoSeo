
interface Bike{
    price?: string;
    max_speed?: string;
    miles?: number;
    total_miles?: number;
}
var ride_miles = 0
class Bikes implements Bike {
    constructor(public price?: string, public max_speed?: string, public miles = 0, public total_miles?: number){
        
    }
    info(price?: string, max_speed?: string, miles?): void{
        console.log(`price = ${price}, max_speed = ${max_speed}, miles = ${miles}`);
        
    }
    ride(total_miles): void{
        total_miles = ride_miles
        ride_miles = total_miles + 10;
        console.log(`You just drove 10 miles`);
        console.log(`Miles = ${ride_miles}`);
        
    }
    reverse(total_miles): void{
        total_miles = ride_miles
        ride_miles = ride_miles - 5;
        console.log(`You just reversed 5 miles`);
        console.log(`Miles = ${ride_miles}`);
        
    }
}
const bike2 = new Bikes('$5,000', '200mph');

bike2.info(bike2.price, bike2.max_speed, bike2.miles);
bike2.ride(bike2.total_miles);
bike2.ride(bike2.total_miles);
bike2.reverse(bike2.total_miles);


// class displayInfo extends Bikes {
//     constructor(price: string, max_speed: string, miles = 0){
//         super(price, max_speed, miles);
//     }
//     info(price: string, max_speed: string, miles): void{
//         console.log(`price = ${price}, max_speed = ${max_speed}, miles = ${miles}`);
//     }
    
//     reverse(miles): void{
//         miles = miles - 5;
//         console.log(`You just reversed ${miles}miles`);
//         console.log(`Miles = ${miles}`);
//     }
    
// }
// class displayride extends displayInfo {
//     constructor(price?, max_speed?, miles?){
//         super(price, max_speed, miles);
//     }
//     ride(miles): void{
//         miles = miles + 10;
//         console.log(`You just drove ${miles}miles`);
//         console.log(`Miles = ${miles}`);
//     }
// }
// const bike1 = new Bikes('$5000', '200mph');
// const info1 = new displayInfo(bike1.price, bike1.max_speed);
// const ride1 = new displayride(info1.miles);
// info1.info(bike1.price, bike1.max_speed, bike1.miles);
// ride1.ride(info1.miles);
// ride1.ride(info1.miles);

// bike1.info(bike1.max_speed, bike1.max_speed, bike1.miles);
// bike1.ride(bike1.miles);
// bike1.reverse(bike1.miles);


// class displayRide extends Bikes {
//     constructor(price: string, max_speed: string, miles = 0){
//         super(price, max_speed, miles);
//         }
//         ride(miles = 0): void{
//             miles = miles + 10;
//             console.log(`${miles}`);
//         }
    
// }


