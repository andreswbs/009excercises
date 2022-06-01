class Cat {
    constructor(name) {
        this.name = name
        this.tiredness = 5
        this.hunger = 5
        this.loneliness = 0
        this.happiness = 5
    }

    feed() {
        this.hunger -= 1
        this.happiness += 1
        if (this.hunger < 0) {
            this.hunger = 0
        }
        
    }
    sleep() {
        this.tiredness -= 1
        this.happiness += 1
        if (this.tiredness < 0) {
            this.tiredness = 0
        }
    }
    pet() {
        this.loneliness -= 1
        this.happiness += 1
        if (this.loneliness < 0) {
            this.loneliness = 0
        }
    }

    timePasses() {
        this.happiness -= 3
        this.loneliness += 1
        this.hunger += 1
        this.tiredness += 1
    }

    getCatDescription() {
        return `
        tiredness: ${this.tiredness},
        hunger: ${this.hunger},
        loneliness: ${this.loneliness},
        happiness: ${this.happiness},
        `
    }

    outputCat() {
        console.log(this.getCatDescription())
    }
}

const myCat = new Cat('Neti')
myCat.outputCat()