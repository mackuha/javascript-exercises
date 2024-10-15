const removeFromArray = function(array, ...remove) {
    const newArray = []
    
    for (let i = 0; i < remove.length; i++) {
        for(let j = 0; j < array.length; j++) {
            newArray.push(j)
        }
    }

    return newArray
};

// Do not edit below this line
module.exports = removeFromArray;
