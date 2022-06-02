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
        this.outputCat()
    }
    sleep() {
        this.tiredness -= 1
        this.happiness += 1
        if (this.tiredness < 0) {
            this.tiredness = 0
        }
        this.outputCat()
    }
    pet() {
        this.loneliness -= 1
        this.happiness += 1
        if (this.loneliness < 0) {
            this.loneliness = 0
        }
        this.outputCat()
    }

    timePasses() {
        console.log("Tine passes ...")
        this.happiness -= 3
        this.loneliness += 1
        this.hunger += 1
        this.tiredness += 1
        this.outputCat()
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
        const catElement = document.getElementById('catdisplay')
        catElement.innerHTML = `
        <div>tiredness: ${this.tiredness}</div>
        <div>hunger: ${this.hunger}</div>
        <div>loneliness: ${this.loneliness}</div>
        <div>happiness: ${this.happiness}</div>
        `
    }
}

const myCat = new Cat('Neti')
myCat.outputCat()
setInterval(() => {myCat.timePasses()}, 5000)

//1. Render cat status as html page at the start
// 1.1 create html for each state variable <- modify function output cat
// hint: 
//2. Create html buttons and add event listeners 
// to them that will call cat methods (feed, sleep, pet)
// myCat.feed() Example: <a href="#" onclick="myCat.feed()" >Feed</a>
// 2.1 After call to cat methods render cat status data again
// hint: inside of the cat methods feed, sleep, pet call rendering function 
//       from object itself: this.outputCat()
//3. create interval that calls timePasses in every 3 seconds and renders all cat data again