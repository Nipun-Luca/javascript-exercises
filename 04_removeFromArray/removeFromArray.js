const removeFromArray = function() {
    let testArray = arguments[0];

    for(let i = 1; i < arguments.length; i++) {
        if(testArray.includes(arguments[i])){
            let index = testArray.indexOf(arguments[i]);
            testArray.splice(index, 1);
        }
    }

    return testArray;
};

// Do not edit below this line
module.exports = removeFromArray;
