// Pseudocode:
// 1. Create a function that accepts an array of numbers as an argument.
// 2. Initialize an empty array for odd numbers.
// 3. Loop through the array.
// 4. Check if the current number is odd.
// 5. If it is, add to the odd numbers array.
// 6. Return the odd numbers array.
function filterOddNumbers(arr) {
    let oddNumbers = [];

    for(let num of arr) {
        if(num % 2 !== 0) {
            oddNumbers.push(num);
        }
    }

    return oddNumbers;
}

console.log(filterOddNumbers([2, 4, 6, 8, 11, 20, 15, 22]));  // [11, 15]
console.log(filterOddNumbers([1, 2, 3, 4, 5, 6, 7, 8, 9, 10]));  // [1, 3, 5, 7, 9]
console.log(filterOddNumbers([70, 42, 55, 81, 21, 91, 34]));  // [55, 81, 21, 91]
console.log(filterOddNumbers([2, 4, 6, 8, 10, 11, 12]));  // [11]
