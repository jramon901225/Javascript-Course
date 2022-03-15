//Fizz buzz

for(let i = 1; i <= 100; i++ ){

    if(i % 15 === 0) {
        console.log(`${i}-FizzBuzz`)
        continue
    }
    if(i % 5 === 0) {
        console.log(`${i}-Fizz`)
        continue
    }
    if(i % 3 === 0 ) {
        console.log(`${i}-Buzz`)
        continue
    }
  
    console.log(`${i} - No FissBuzz`)
}

// for(let i = 0; i <= 100; i++ ) {
//     console.log(
//      i % 3 === 0 && i % 5 !== 0 ? `${i}-Fizz`:
//      i % 3 !== 0 && i % 5 === 0 ? `${i}-Buzz`: 
//      i % 3 === 0 && i % 5 === 0 ? `${i}-FizzBuzz`:
//      `${i} - No FissBuzz`)
// }