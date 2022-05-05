reverseString("big boom");

function reverseString (word) {
    let newString = word.split('');

    stringReverse = newString.reverse();

    return stringReverse.join('');
}


// Do not edit below this line
module.exports = reverseString;
