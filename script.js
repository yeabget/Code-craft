/*part 1 
57
false
8
true 
false
false
5true
10
true 
false
*/
//part 2
//1
var num=10;
if(num>0){
  console.log("the number is positive");
}
else if(num<0){
  console.log("the number is negative");
}
else{
  console.log("the number is zero");
}
//2
var age=16;
if(age>=18){
  console.log("the person is eligible for vote");
}
else{
  console.log("the person is not eligible for vote");
}
  //part 3
  //task 1
let r=1; 
for(let i=5;i>0;i--){
  r*=i;
}
    console.log(r);
    //task 2
    
    var n=10; 

if (n === 0) {
  console.log([0]);
} else if (n === 1) {
  console.log([0, 1]);
} else {
  var num = [0, 1];
  for (let i = 2; i < n; i++) {
    num[i] = num[i - 1] + num[i - 2];
  }
  console.log(num); 
}
//task 3
var y=7;
var count=0;
for(let i=1;i<=y;i++){
  if(y%i==0){
    count++;
    if(count>2){
      console.log("the number is composite");
    }
    else if (count==2){
      console.log("the number is prime");
    }
    
  }
}
//part 4
//task 1

function average(a, b)
{
  if(typeof a!=='number'||typeof b!=='number'){
    return "error has occured";
  }
  return (a+b)/2;
  
}
  console.log(average(2,8));


//task 2


  const factorial = (num) => {
  if (typeof num !== 'number') {
    return "error has occured";
  } else if (num < 0) {
    return "error has occured";
  } else {
    var result = 1;
    for (let i = num; i > 0; i--) {
      result *= i;  
    }
    return result; 
  }
}

console.log(factorial(5)); 
//task 3

const isPrime = (x) => {
    if (typeof x !== 'number' || x < 0 || !Number.isInteger(x)) {
        return "error: Invalid input";
    } else {
        if (x <= 1) {  
            return false;
        }
        for (let i = 2; i <= Math.sqrt(x); i++) {  
            if (x % i === 0) {
                return "composite";  
            }
        }
        return "prime";  
    }
};

console.log(isPrime(7)); 
var numbers=[1,3,,4,2,5,6,7,8,9];  

numbers.forEach(number => {
  console.log(number);
});


let squaredNumbers = numbers.map(number => number * number);
console.log(squaredNumbers);

let oddNumbers = numbers.filter(number => number % 2 !== 0);
console.log(oddNumbers);


let sum = numbers.reduce((accumulator, currentValue) => accumulator + currentValue, 0);
console.log(sum);


let greaterThan10 = numbers.find(number => number > 10);
console.log(greaterThan10);


let indexOfFirstEvenNumber = numbers.findIndex(number => number % 2 === 0);
console.log(indexOfFirstEvenNumber);


let hasNumber15 = numbers.includes(15);
console.log(hasNumber15);


let firstThreeElements = numbers.slice(0, 3);
console.log(firstThreeElements);


let removedNumber = numbers.splice(numbers.length - 1, 1, 25);  // Remove last and add 25
console.log("Original array after splice:", numbers);
console.log( removedNumber);



numbers.sort((a, b) => a - b);
console.log(numbers);  


let commaSeparatedString = numbers.join(", ");
console.log(commaSeparatedString);
