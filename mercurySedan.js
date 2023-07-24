//this includes the vehicle class as a module
const VehicleModule = require("./vehicleBaseClass")

//this shows how to call from this module...
let v = new VehicleModule.Vehicle("Mercury", "Sedan", "1965", "color", "mileage");
console.log(v.make)

class Car extends VehicleModule{
    constructor(make, model, color, year, milelage){
        super(make,model,color,year,milelage)
        this.maximumPassengers=5
        this.passengers=0
        this.numberOfWheels=4
        this.maximumSpeed=160
        this.fuel=10
        this.scheduleService=false
    }
    loadPassenger(num){
        if(this.passengers <= this.maxPassengers){
            this.passengers = num
            return this.passengers
        }else{
            console.log('to many passengers')
        }
    }
    start(){
        if (this.fuel > 0){
            console.log("started")
            return this.started = false
        }
    }
    checkService(){
    if(this.milelage > 300000){
        this.scheduleService = true
        return this.scheduleService
    }
    }
}

let newCar = new Car('Aura','four door', '2007', 'white', '237456')

newCar.loadPassenger(9)
newCar.start()
newCar.checkService()

console.log(newCar)
//After you write the derived Car class, you should test it out.

//Note: You can code your derived Car class here or make a file named index.js and do it there.


//TO DO: Code the Car subclass here or in index.js file, i.e. class Car extends Vehicle ...












//TO DO: Creating Instances and Testing Them

//You can use the same instance "v" of the Vehicle class above for the base class.





//Create at least two new instances of the Car class and test them here:
