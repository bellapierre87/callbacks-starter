/*******************************************************************************
Write a function `suffixCipher` that accepts a sentence and object as arguments.
The object contains suffixes as keys and callbacks as values. The `suffixCipher`
function should return a new sentence where words of the original sentence are
modified according to the callback that corresponds with the suffix that the word
ends with. If the word does not end in any of the suffix keys, then it should not
be modified. You can assume that only one suffix of the object will match a word.

Examples:

let cipher1 = {
    ly: function(word) {
        return word.slice(0, -1) + 'ee';
    },
    ize: function(word) {
        return word + 'r';
    }
};
console.log(suffixCipher('quietly and gently visualize', cipher1));
// quietlee and gentlee visualizer

let cipher2 = {
    tal: function(word) {
        return word.toUpperCase();
    },
    s: function(word) {
        return word + 'th';
    }
};
console.log(suffixCipher('incremental progress is very instrumental', cipher2));
// INCREMENTAL progressth isth very INSTRUMENTAL
*******************************************************************************/

let suffixCipher = function(s, obj) {
    let arr = s.split(" "); //convert string to array to split words

    let newArr = []; //create a new array

    // iterate through the array arr
    arr.forEach(function (el){
        //for each key in the object
        //check if it's part word (element of the array)
        for(key in obj){
            //if it the suffix key is there, then pass that el (word) into the value(function for the key)
            // and set el to be the result
            if(el.includes(key)){
               el = obj[key](el);

            }
        }
        newArr.push(el);  //add el to the new array

    });

    let newSentence = newArr.join(" ")   //join array back with space to a new sentence
    return newSentence;  //return the new sentence

};






/*****************DO NOT MODIFY ANYTHING UNDER THIS  LINE**********************/
module.exports = suffixCipher;
