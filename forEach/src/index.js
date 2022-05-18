const myArray = ["one", "two", "three"];


let allElements = ""
const outputValue = function (x) {
    console.log(x)
    allElements += x + "<br>"
}


//forEach; give me a function that I will call for each element of myArray
myArray.forEach(outputValue)
console.log(allElements)
