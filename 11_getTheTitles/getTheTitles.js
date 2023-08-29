const getTheTitles = function(books) {
    const booksToReturn = [];

    for(let i = 0; i < books.length; i++) {
        booksToReturn.push(books[i].title);
    }

    return booksToReturn;
};

// Do not edit below this line
module.exports = getTheTitles;
