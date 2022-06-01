class Car {
    constructor(name, color, isAutomatic = false) {
        this.name = name
        this.color = color
        this._gearbox = 'manual'
        this._speed = 0
        if (isAutomatic) {
            this._gearbox = 'automatic'
        }
    }

    accelerate(increase = 10) {
        if (this.color == 'silver') {
            console.log( this.name + " says: SILVER!!")
        } else {
            console.log( "My " + this.name + " says: WROOM ... WROOM")
        }
        this._speed += increase
        console.log('Speed is now: ' + this._speed)
    }

     breakSpeed(decrease = 10) {
        this._speed -= decrease
        if (this._speed < 0) {
            this._speed = 0
        }
        console.log('Breaking ... speed is now: ' + this._speed)
    }

    //add a function that prints out different messages for gearboxes
    // If _gearbox is 'automatic' lets console log 'This car has automatic gearbox'
    // if 'manual' then 'Changing gears'
    // lets create a function shiftGear that does that
    shiftGear() {
        if (this._gearbox === 'automatic') {
            console.log('This car has automatic gearbox')
            return
        }
        console.log('Changing gears')
    }

}

console.log(typeof Car)

const car1 = new Car('Ford', 'brown')

car1.engine = 'diesel'
console.log(car1)

console.log(car1.name)
console.log(car1.color)
car1.accelerate()

const car2 = new Car('Volvo', 'red')
console.log(car2)

const car3 = new Car('VW', 'silver', true)
console.log(car3)
car3.accelerate()

car1.shiftGear() //<- 'Changing gears'
car3.shiftGear() //<- 'This car has automatic gearbox'

car1.accelerate()
car1.breakSpeed()

///////////////////////////////////////////////
class FacebookUser {
    constructor(account, email, password) {
        this.account = account
        this.email = email
        this.password = password
    }

    greet() {
        console.log("Hello " + this.account)
    }
}

const facebookUser1 = new FacebookUser('kenn', 'kenn@email.yy', 'complicated')
const facebookUser2 = new FacebookUser('andres', 'andres@email.yy', 'complicated')

const facebookUsers = [facebookUser1, facebookUser2]
console.log(facebookUsers)

//GT Car

class SportsCar extends Car {
    openDoors() {
        console.log("Doors open now")
    }

    accelerate(increase = 10) {
        this._speed += increase * 2.5
        console.log( this.name + ' rallyspeed is now ' + this._speed)
    }

    breakSpeed(decrease) {
        this._speed -= 10
        super.breakSpeed(decrease)
    }


}


const sportsCar1 = new SportsCar('ToyotaGT', 'red and white')
sportsCar1.openDoors()
sportsCar1.accelerate(30)
sportsCar1.breakSpeed(100)