/* 
    3) Write a program gather and display infromation from an object like the reading status (i.e. display book name, author name and reading status) of books and check book are reading or not in console."
*/

class Book {
    constructor(bookName, authorName, readingStatus) {
        this.bookName = bookName;
        this.authorName = authorName;
        this.readingStatus = readingStatus;
    }

    displayInfo() {
        console.log('Book Name : ', this.bookName);
        console.log('Book Author Name : ', this.authorName);
        console.log(`Book Reading Status : ${this.readingStatus}%`);
    }
}

const btnAddBook = document.getElementById('btn');

btnAddBook.addEventListener('click', function () {
    const bookName = prompt('Enter Book Name : ');
    const authorName = prompt('Enter Book Author Name : ');
    const readingStatus = parseInt(prompt('Enter Book Reading Status : '));

    const book = new Book(bookName, authorName, readingStatus);
    book.displayInfo();
});
