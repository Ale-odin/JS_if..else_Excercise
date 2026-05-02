const removeFromArray = function(array, ...item) {

let clearedArray = array.filter((value) => !item.includes(value))
return clearedArray;

};

// Do not edit below this line
module.exports = removeFromArray;
