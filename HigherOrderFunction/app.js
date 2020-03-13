// Function #1: Array Slice
const foods = ['Pizza', 'Burger', 'FingerChips', 'Donuts', 'SpringRoll'];

function slice(start, end) {
    let modifiedFood = [];
    for (let i = start; i < end; i++) {
        modifiedFood.push(foods[i]);
    }
    return modifiedFood;
}

console.log(slice(1, 4));


// Function #2: Array Splice
var modifiedFood = foods;
modifiedFood.splice(2, 0, 'Noodles', 'Icecream');

console.log(modifiedFood);

// Function #3: Filter

const numberArray = [12, 324, 213, 4, 2, 3, 45, 4234, 3, 11, 13, 23, 37];
var numbers = [2, 3, 4, 5, 67, 8, 9, 32, 56];

function isEven(arr) {
    var Even = arr.filter(function (num) {
        if (num % 2 == 0) {
            return num;
        }
    });
    return Even;
}

console.log(isEven(numbers));

// Function #4: Reject

function isPrime(arr) {
    prime = arr.filter(function (num) {
        for (let i = 2; i <= Math.sqrt(num); i++) {
            if (num % i === 0) {
                return false;
            }
        }
        return true;
    });
    return prime;
}
console.log(isPrime(numberArray));



// Function #4: Reject
function nonPrime(arr) {
    nonprime = arr.filter(function (num) {
        for (let i = 2; i <= Math.sqrt(num); i++) {
            if (num % i === 0) {
                return true;
            }
        }
        return false;
    });
    return nonprime;
}
console.log(nonPrime(numberArray));



// Function #5: Lambda

var Even = numbers.filter((num) => { if (num % 2 == 0)  return num; });

console.log(Even);
     
         


// Function #6: Map
const myArray = [11, 34, 20, 5, 53, 16];

function findSquareOfNumbers(myArray) {
    let square = myArray.map(function (item,) {
        return item*item;
    });
    return square;
}

console.log(findSquareOfNumbers(myArray));



// Function #7: Reduce
let arr = [2, 3, 5, 10];

function multiply(arr){
    let mul = arr.reduce(function(init,item){
        return init*item;
    },1);
    return mul;
}

console.log(multiply(arr));
