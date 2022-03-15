let i = 1;

while(i < 100) { // condicion

    if(i % 15 === 0) {
        console.log(`${i}-FizzBuzz`)
    }
    else if(i % 5 === 0) {
        console.log(`${i}-Fizz`)
    }
    else if(i % 3 === 0 ) {
        console.log(`${i}-Buzz`)
    } else
    console.log(`${i} - No FissBuzz`)

    i ++ // incremento
}