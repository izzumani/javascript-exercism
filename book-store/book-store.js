//
// This is only a SKELETON file for the 'BookStore' exercise. It's been provided as a
// convenience to get you started writing code faster.
//
//
// This is only a SKELETON file for the 'BookStore' exercise. It's been provided as a
// convenience to get you started writing code faster.
//

const BOOK_PRICE = 800
const PERCENTS = [0, 0, 5, 10, 20, 25]

export const cost = (books) => {
    return discount(bookCount(books))
}

function bookCount(books) {
    return books.reduce((counts, book) => {
            counts[book] = (counts[book] ?? 0) + 1
            return counts 
        }, [])
        .filter(c => c)
        .sort((a, b) => b - a)
}

function discount(counts) {
    switch (counts.length) {
        case 0: return 0
        case 1: return counts[0] * BOOK_PRICE
        default: return Math.min(
            ...Array(counts.length).fill(0)
                .map((_, i) =>
                    (i + 1) * BOOK_PRICE * (100 - PERCENTS[i + 1]) / 100
                    + discount(remainingBookCount(counts, i + 1))
                )
        )
    }
}

function remainingBookCount(counts, n) {
    return counts.map((count, i) => i < n ? count - 1 : count)
        .filter(n => n)
        .sort((a, b) => b - a)
}


// const books = [1,1,2,2,3,3,4,5]


// console.log(cost(books));

//const basket = [1];//800
//const basket = [2, 2];
//const basket = [];
//const basket = [1, 2];
//const basket = [1, 1, 2, 2, 3, 3, 4, 5];
//const basket = [1, 1, 2, 2, 3, 4];
const basket = [1, 1, 2, 2, 3, 3, 4, 4, 5, 5, 1, 2]; //7520
//const basket = [1, 1, 2, 2, 3, 3, 4, 5, 1, 1, 2, 2, 3, 3, 4, 5]; // 10240
//const basket = [1, 1, 1, 2, 2, 2, 3, 3, 3, 4, 4, 5, 5]; // 8120
//const basket = [1, 2, 3, 4, 5, 1, 2, 3, 4, 5, 1, 2, 3]; //8120
console.log(cost(basket));
