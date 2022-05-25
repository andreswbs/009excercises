

console.log(
    document.getElementById('myId').innerHTML
)

console.log(
    document.querySelector('#myId').innerHTML
)

console.log(
    document.querySelector('li').innerHTML
)


console.log(
    document.querySelector('.tasty').innerHTML
)



const tastyElements = document.querySelectorAll('.tasty')
console.log(tastyElements[0].innerHTML)

const myIdElement = document.getElementById('myId')

myIdElement.style.fontSize = "2rem"
myIdElement.innerHTML = "Rate the fruits"

const fruitsList = document.getElementById("fruits")
fruitsList.innerHtml += "<li>Mango</li>"

function enableStarring() {
    const allFruitElements = document.querySelectorAll('li')
    allFruitElements.forEach((fruitElement) => {
        console.log(fruitElement.innerHTML)
        fruitElement.addEventListener('click', () => {
            console.log('clicked ' + fruitElement.innerText)
            fruitElement.innerText += '*'
        } )
    })
}

function addFruit() {
    console.log('addFruit function called')
    const inputElement = document.getElementById('fruitInput')
    const newFruit = inputElement.value
    const fruitsList = document.getElementById('fruits')
    fruitsList.innerHTML += '<li>' + newFruit + '</li>'
    enableStarring()
}

//document.getElementById('addButton').addEventListener('click', addFruit)
enableStarring()











