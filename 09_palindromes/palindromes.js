const palindromes = function (str) {
    let cleanedStr = str.replace(/\W|\s+/g, '');
    cleanedStr = cleanedStr.toLowerCase();

    let reversedStr = "";

    for(let i = cleanedStr.length - 1; i >= 0; i--){
        reversedStr += cleanedStr[i];
    }

    if(cleanedStr == reversedStr) {
        return true;
    } else {
        return false;
    }
};

// Do not edit below this line
module.exports = palindromes;
