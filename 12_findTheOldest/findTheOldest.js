const findTheOldest = function(array) {
    const oldAge = [];

    for(let i = 0; i < array.length; i++){
        if (typeof array[i].yearOfDeath === "undefined"){
            let currentOldest = array[i].yearOfBirth;
            let checkIfOldest = oldestStillLiving(currentOldest, i);
            if(checkIfOldest){
                return array[i];
            } else {
                oldAge.push(0);
            }
        } else {
            let age = array[i].yearOfDeath - array[i].yearOfBirth;
            oldAge.push(age);
        }
    }

    function oldestStillLiving(currentOldest, index){
        let stillLiving = true;
        for(let j = 0; j < array.length; j++) {
            if(currentOldest > array[j].yearOfBirth){
                stillLiving = false
            }
        }

        if(stillLiving){
            return true;
        } else {
            return false;
        }
    }

    const max = oldAge.reduce((a, b) => Math.max(a, b), -Infinity);
    let oldest = oldAge.indexOf(max);
    return array[oldest];
};

// Do not edit below this line
module.exports = findTheOldest;
