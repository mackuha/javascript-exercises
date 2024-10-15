const repeatString = function(word, times) {
    if (times < 0) return "ERROR"
    let outputString = ""
    for (let i = 0; i < times; i++) {
        outputString += word
    }
    return outputString
};

// Do not edit below this line
module.exports = repeatString;
