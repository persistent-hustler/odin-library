const myLibrary = [];
let readContainer = document.querySelector('#read');
let unreadContainer = document.querySelector('#unread');

function Book(title, author, pages, readStatus) {
    this.title = title;
    this.author = author;
    this.pages = pages;
    this.readStatus = readStatus;
}

function addBookToLibrary(title, author, pages, readStatus) {
    myLibrary.push(new Book(title, author, pages, readStatus));
}

function displayBook(newBook) {
    let newBookCard = document.createElement('div');

    let title = document.createElement('div');
    title.setAttribute('class', 'title');
    title.textContent = newBook.title;
    newBookCard.appendChild(title);

    let author = document.createElement('div');
    author.setAttribute('class', 'author');
    author.textContent = newBook.author;
    newBookCard.appendChild(author);

    let pages =  document.createElement('div');
    pages.setAttribute('class','pages');
    pages.textContent = newBook.pages;
    newBookCard.appendChild(pages);

    newBookCard.setAttribute('class', 'card');
    if (newBook.readStatus === 'read') {
        readContainer.appendChild(newBookCard);
    } else {
        unreadContainer.appendChild(newBookCard);
    }
}

addBookToLibrary('Fake Book', 'Fake Author', 200, 'unread');
addBookToLibrary('Fake Book', 'Fake Author', 200, 'unread');
addBookToLibrary('Fake Book', 'Fake Author', 200, 'unread');
addBookToLibrary('Fake Book', 'Fake Author', 200, 'unread');
addBookToLibrary('Fake Book', 'Fake Author', 200, 'unread');
addBookToLibrary('Fake Book', 'Fake Author', 200, 'unread');

addBookToLibrary('Fake Read Book', 'Fake Author', 200, 'read');
addBookToLibrary('Fake Read Book', 'Fake Author', 200, 'read');
addBookToLibrary('Fake Read Book', 'Fake Author', 200, 'read');
addBookToLibrary('Fake Read Book', 'Fake Author', 200, 'read');
addBookToLibrary('Fake Read Book', 'Fake Author', 200, 'read');
addBookToLibrary('Fake Read Book', 'Fake Author', 200, 'read');


myLibrary.forEach(displayBook);