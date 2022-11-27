/*******************************************************************************
Write a function `minValueCallback` that accepts an array and an optional callback as arguments.
If a callback is not passed in, then the function should return the smallest
value in the array. If a callback is passed in, then the function should return
the result of the smallest value being passed into the given callback.

Examples:
console.log(minValueCallback([64, 25, 49, 9, 100]));             // 9
console.log(minValueCallback([64, 25, 49, 9, 100], Math.sqrt));  // 3

*******************************************************************************/

let minValue = function(arr){
    for (let i in arr){

    }
}
let minValueCallback = function(arr, cb) {
    arr.sort(function(a, b){return a - b});;  // sort array least to greatest

  let min = arr[0]  // get min value in array

   // if cb exists then pass the min value and return the result
    if(cb){
         return cb(min);
    }

    //else return min
    else {
        return min;
   }
};






/*****************DO NOT MODIFY ANYTHING UNDER THIS  LINE**********************/
module.exports = minValueCallback;
