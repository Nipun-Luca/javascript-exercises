const fibonacci = function(num) {
    const fibonacci = [1];

    for(let i = 1; i < num; i++) {
        fibonacci.push(fibonacci[i--] + i);
    }

    return fibonacci[fibonacci.pop()];
};

// Do not edit below this line
module.exports = fibonacci;
