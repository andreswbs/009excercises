let string1 = "This is a string"

let string2 = string1
string2 = string2 + " more words"
console.log("String2:")
console.log(string2)
console.log("Original string:")
console.log(string1) // <- remains unchanged

let object1 = {
    name: 'John Smith',
    age: 33
}

let object2 = object1

object2.age = 43
object2.email = 'added@email.rr'
console.log("Original object1:")
console.log(object1) // <- change will be visible, too 

// Only primary data types (string, number, boolean) are passed by value
// Complex data types are passed as references

//We can use spread operator to copy object 
//Lets make copy of object1
let object3 = {
    name: object1.name,
    age: object1.age
}

object3.age = 53
console.log("Object 1 remains unchanged:")
console.log(object1) // <- change will not be visible in original object

console.log("Object 3 is changed:")
console.log(object3) // <- change will be visible, too 

//Another way to make copy of an object is to use spread operator
let object4 = {...object1}

object4.name = "Spread Specialist"
console.log("Object 1 remains unchanged:")
console.log(object1) // <- change will not be visible in original object

console.log("Object 4 is changed:")
console.log(object4) // <- change will be visible, too 

let array1 = [object1, object3]
let array2 = array1
array2.push(object4)

//Original array is chaged, too
console.log(array1)

let array3 = [...array1]

delete array3[0]
console.log("Original array after spread operation")
console.log(array1)

console.log("New  array after spread operation")
console.log(array3)

//Destructuring

let colors = ['red', 'green', 'yellow', 'pink']
//let firstColor = colors[0]
//let secondColor = colors[1]

const [firstColor, secondColor] = colors

console.log("First color: " + firstColor)
console.log("Second color: " + secondColor)

function getUser() {
    return {
        name: 'John Smith',
        age: 33,
        lastSeen: '2022-06-09 20:30'
    }
}


//Instead of this:
//const newUser = getUser()
//const name = newUser.name
//const age = newUser.age
const {name, age, email="default@email.com", lastSeen="never"} = getUser()

console.log('Receives name: ' + name)
console.log('Receives age: ' + age)
console.log('Receives email: ' + email)
console.log('Receives lastSeen: ' + lastSeen)

function outputUser({name, age, email="default@email.com", lastSeen}) {
    document.getElementById('output').innerHTML = `
    <div>User: ${name}</div>
    <div>Age: ${age}</div>
    <div>Email: ${email}</div>
    <div>Last Seen: ${lastSeen}</div>
    `
}

const newUser = getUser()
outputUser(newUser)

