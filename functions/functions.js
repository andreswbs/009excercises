function greetSomeone(name = "John Smith") {
    console.log("Hello " + name)
    const contentElement = document.getElementById("content")
    contentElement.innerHTML += "<div>Hello " + name + "</div>"
}

function multiply(a, b = 1) {
    if ( !a ) {
        console.log("Show at least one parameter")
        return 0
    }

    if (typeof a != 'number') {
        console.log('parameter a is not a number')
        return 0
    }

    if (typeof b != 'number') {
        console.log('parameter b is not a number')
        return 0
    }

    const result = a * b 
    console.log(result )
    return result
}

greetSomeone()

multiply(3 * 4)
const bigNumber = 434534534534
multiply(bigNumber, 6)

const greeting2 = (name = "John Smith") => {
    console.log("Worm welcome " + name)
}


setTimeout(greeting2, 5000)
setTimeout( function() {
    console.log('Delayed welcome to you')
} , 3000 )


function greetAllMyFriends() {
    let myFriends = [
        'John',
        'Jane',
        'UmpaLumpa'
    ]

    //for (let i= 0; i < myFriends.length; i++) {
    //    greeting2(myFriends[i])
    //}

    const greet3 = (name) => {
        console.log("Another warm greeting, dear friend " + name)
    }

    myFriends.forEach((name) => console.log("Hi " + name))
}

const task1 = {
    description: "Take a shower",
    done: true,
    importance: 7,
    action: () => {console.log("Hills are alive with a sound of music")}
}

const task2 = {
    description: "Walk the dog",
    done: false,
    importance: 9,
    action: () => {console.log("Here's the good spot!")}
}

const tasks = [task1, task2]

tasks.forEach((task) => task.action())





