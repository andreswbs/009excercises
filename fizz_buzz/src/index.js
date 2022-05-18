function fizzbuzz(number) {
    if (number % 15 === 0) {
        console.log("Fizz Buzz")
        return
    }
    if (number % 3  === 0) {
        console.log("Fizz")
        return
    }
    if (number % 5 === 0) {
        console.log("Buzz")
        return
    }
    console.log(number)
}

for (let i = 0; i < 20; i++) {
    fizzbuzz(i)
}
