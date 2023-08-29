const fibonacci = function(num) {
    const fibonacci = [1, 1];
    num = parseInt(num);

    if (num < 0) {
        return "OOPS";
    }


    for(let i = 2; i < num; i++) {
        let pointer = i; 
        fibonacci.push(fibonacci[pointer-1] + fibonacci[pointer-2]);
    }

    return fibonacci.pop();
};

// Do not edit below this line
module.exports = fibonacci;
