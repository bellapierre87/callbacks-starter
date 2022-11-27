/*******************************************************************************
Write a function `none` that accepts an array and a callback as arguments.
The function should call the callback for each element of the array, passing in
the element. The function should return true if all
elements of the array result to false when passed into the callback. Otherwise,
the method should return false.

Examples:

let result1 = none(['ruby', 'topaz', 'opal'], function(w) {
    return w.includes('e');
});
console.log(result1);   // true

let result2 = none(['ruby', 'topaz', 'sapphire', 'opal'], function(w) {
    return w.includes('e');
});
console.log(result2);   // false

let result3 = none([4, 5, 7, 1], function(n) {
    return n < 0;
});
console.log(result3);   // true

let result4 = none([4, -5, 7, -1], function(n) {
    return n < 0;
});
console.log(result4);   // false
*******************************************************************************/

let none = function(arr, cb) {


    let newArr = arr.filter(cb);   //return array of all elements that are true after passing them in cb function

    //if there's no element in new array, return true as that mean they all returned false in cb
    //else return false
    if(newArr.length <= 0){
        return true;
    }
    else return false;

};






/*****************DO NOT MODIFY ANYTHING UNDER THIS  LINE**********************/
module.exports = none;
