const removeFromArray = function(arr, ...items) {
    items.flat(Infinity).forEach(items => {
        if (arr.includes(items)) arr.splice(arr.indexOf(items), 1);
    });
    return arr;
}

removeFromArray([1, 2, 3, 4], 1, 2, 3);
// Do not edit below this line
module.exports = removeFromArray;
