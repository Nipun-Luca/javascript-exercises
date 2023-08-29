const repeatString = function(phrase, repeatTimes) {
    let repeatedPhrase = ""

    if(repeatTimes < 0){
        return "ERROR";
    }

    for(let i = 0; i < repeatTimes; i++){
        repeatedPhrase += phrase;
    }
    return repeatedPhrase;
};

// Do not edit below this line
module.exports = repeatString;
