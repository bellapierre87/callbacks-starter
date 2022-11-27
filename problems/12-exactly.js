/*******************************************************************************
Write a function `exactly` that accepts an array, a number, and a callback as
arguments. The function should return a boolean indicating whether or not there are
exactly `number` elements of the array that return true when passed into the callback.

Examples:

let result1 = exactly([18, 5, 32, 7, 100], 3, function (n) {
    return n % 2 === 0;
});
console.log(result1); // true

let result2 = exactly([18, 5, 32, 7, 100], 2, function (n) {
    return n % 2 === 0;
});
console.log(result2); // false

let result3 = exactly(['follow', 'the', 'yellow', 'brick', 'road'], 1, function (str) {
    return str.includes('x');
});
console.log(result3); // false

let result4 = exactly(['follow', 'the', 'yellow', 'brick', 'road'], 0, function (str) {
    return str.includes('x');
});
console.log(result4); // true

*******************************************************************************/

//const { compareByInspect } = require("chai/lib/chai/utils");

// arr must have n amount(s) of element(s)that are true when passed in function f
//if so return true, else return false
let exactly = function(arr, n, cb) {
    let counter = 0;

    //iterate through array arr
    for(let i in arr){

        el = arr[i];   // get element at index i

        //if cb is true after passing element
        //increment counter by 1
        if(cb(el)){
            counter++;
        }
    }

    //if counter is same as n, return true
    //else return false
    if (counter === n){
        return true;
    }
    else{
     return false;
    }

};






/*****************DO NOT MODIFY ANYTHING UNDER THIS  LINE**********************/
module.exports = exactly;
