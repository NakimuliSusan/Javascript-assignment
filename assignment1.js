//1. Write a JavaScript program which iterates the integers from 1 to 100. But for
// multiples of three print "Fizz" instead of the number and for the multiples of five print
// "Buzz". For numbers which are multiples of both three and five print "FizzBuzz".

for (let i = 0; i <= 100; i++) {
  if ([i] % 3 === 0) {
    console.log("Fizz");
  } else if ([i] % 5 === 0) {
    console.log("Buzz");
  } else {
    console.log(i);
  }
}

// 2. Write a JavaScript program to sum the multiples of 3 and 5 under 1000.

let sum = 0;
for (var p = 0; p < 1000; p++) {
  if ([p] % 3 === 0 && [p] % 5 === 0) {
    sum += p;
  }
}
console.log(sum);


// 3. Write a JavaScript for loop that will iterate from 0 to 20. For each iteration, it will
// check if the current number is odd or even, and display a message to the screen.
// Sample Output :
// "0 is even"
// "1 is odd"
// "2 is even"

for (let z= 0; z <= 20; z++) {
    if ([z]% 2 === 0) {
        console.log(`${z} is even`);
    }
    else{
        console.log(`${z} is odd`);
    }
}

// 4. Write a JavaScript conditional statement to find the largest of five numbers in the
// given array.
// Let num = [-2, 4,-5, 6,0]

num = [-2,4,-5,6,0];
let biggest = 0;
for (let i = 0; i < num.length; i++) {
    if (num[i] > biggest) {
       biggest = num[i];
    }
}
console.log(biggest);

// 5. Using conditional statements, write a JavaScript program to find the largest of the
// following two numbers: 10 & 40

let number1 = 10;
let number2 = 40;

if (number1> number2){
   console.log(number1);
}
else{
    console.log(number2);
}


// 6. Write a JavaScript program to find leap years from 2000 to 2022

for (let year = 2000; year <= 2022; year++) {
    if (year % 4 === 0 && year % 100 !== 0 || year % 400 === 0) {
        console.log(year);
    }
    else{
        null
    }
}

