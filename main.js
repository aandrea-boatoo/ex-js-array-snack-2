const books = [
    {
        title: "React Billionaire",
        pages: 250,
        author: {
            name: 'Alice',
            age: 35
        },
        available: false,
        price: '101€',
        tags: ['advanced', 'js', 'react', 'senior']
    },
    {
        title: "Advanced JS",
        pages: 500,
        author: {
            name: 'Bob',
            age: 20
        },
        available: true,
        price: "25 ",
        tags: ['advanced', 'js', 'mid-senior']
    },
    {
        title: "CSS Secrets",
        pages: 320,
        author: {
            name: 'Alice',
            age: 17
        },
        available: true,
        price: '8€',
        tags: ['html', 'css', 'junior']
    },
    {
        title: "HTML Mastery",
        pages: 200,
        author: {
            name: 'Charlie',
            age: 50
        },
        available: false,
        price: '48€',
        tags: ['html', 'advanced', 'junior', 'mid-senior']
    },
];

// SNACK 1
// const longBooks = books.filter((book) => book.pages > 300)
// console.log(longBooks);
// const longBooksTitles = longBooks.map((book) => book.title);
// longBooksTitles.forEach((title) => console.log(title));
// SNACK 2
const availableBooks = books.filter((book) => book.available = true);
console.log(availableBooks);
const discountedBooks = availableBooks.map((book) => {
    const price = book.price.replace('€', '');
    const discountedPrice = (parseFloat(price) * 0.8).toFixed(2)
    return {
        ...book,
        price: `${discountedPrice} €`
    }
})
console.log(discountedBooks);

const fullPricedBook = discountedBooks.find((book) => {
    const price = book.price.replace('€', '');
    const numPrice = parseFloat(price);
    return numPrice % 1 === 0
})
console.log(fullPricedBook);