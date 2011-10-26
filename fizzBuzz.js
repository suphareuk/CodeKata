function fizzBuzz(num) {
    if (num % 3 === 0 && num % 5 === 0) {
        num = "fizz buzz";
    } else if (num % 3 === 0) {
        num = "fizz";
    } else if (num % 5 === 0) { 
        num = "buzz";
    } 
    return num;
}

console.log(fizzBuzz(num));