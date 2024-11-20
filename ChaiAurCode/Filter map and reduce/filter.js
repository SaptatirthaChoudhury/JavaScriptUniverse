const myNums = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

// const newNums = myNums.filter((num) => {
//    return num > 4
// })

const newNums = []
myNums.forEach((num) => {
    if (num > 4) {
        newNums.push(num)
    }
})

//console.log(newNums);

const books = [
    { name: "To Kill a Mockingbird", genre: "Fiction", publish: 1960 },
    { name: "1984", genre: "Dystopian", publishYear: 1949 },
    { name: "Pride and Prejudice", genre: "Romance", publish: 1813 },
    { name: "The Great Gatsby", genre: "Fiction", publish: 1925 },
    { name: "Moby-Dick", genre: "Adventure", publish: 1851 },
    { name: "War and Peace", genre: "Historical", publish: 1869 },
    { name: "The Catcher in the Rye", genre: "Fiction", publish: 1951 },
    { name: "The Hobbit", genre: "Fantasy", publish: 1937 },
    { name: "Crime and Punishment", genre: "Crime", publish: 1866 },
    { name: "The Odyssey", genre: "Epic", publish: -800 },
    { name: "One Hundred Years of Solitude", genre: "Magical Realism", publish: 1967 },
    { name: "Brave New World", genre: "Dystopian", publish: 1932 },
    { name: "Harry Potter and the Sorcerer's Stone", genre: "Fantasy", publish: 1997 },
    { name: "The Lord of the Rings", genre: "Fantasy", publish: 1954 },
    { name: "Jane Eyre", genre: "Romance", publish: 1847 }
];

let userBooks = books.filter( (bk) => bk.genre === "Fantasy" && bk.publish >= 1940)


console.log(userBooks);
