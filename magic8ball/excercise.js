//let userName = prompt('Your Name')
let userName = 'Your Name'
userName ? console.log(`Hello, ${userName}`) : console.log('Hello')

let userQuestion = "What is the meaning of life"
console.log(`${userName}, ${userQuestion}`)

let randomNumber = Math.floor(Math.random() * 8);
let eightBall = ""

/*Third alternative to if or switch */
let answers = [
  'It is certain',
'It is decidedly so',
'Reply hazy try again',
'Cannot predict now',
'Do not count on it',
'My sources say no',
'Outlook not so good',
'Signs point to yes'
]

console.log(answers[randomNumber])