const myArray = ["one", "two", "three"];


let allElements = ""
const outputValue = function (x, i) {
    console.log(i + '. ' +x)
    allElements +=  x + "<br>"
}


//forEach; give me a function that I will call for each element of myArray
myArray.forEach(outputValue)
console.log(allElements)

console.log("-->Now for our own forEach:")

//We require that myForEach have to paramete
function myForEach(parameterArray, iteratorFunction) {
    for (let i=0; i<parameterArray.length; i++ ) {
        //We demand, that iteratorFunction must have two parameters: value, index
        iteratorFunction(parameterArray[i], i)
    }
}


myForEach(myArray, outputValue)
