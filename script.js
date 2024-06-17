const myLibrary = [];
const readContainer = document.querySelector('#read-container');
const unreadContainer = document.querySelector('#unread-container');

const newBookDialogOpener = document.querySelector('#newBookDialogOpener');
const addBookDialog = document.querySelector('#addBookDialog');
const cancelDialog = document.querySelector('#cancel');

const newBookForm = document.querySelector('form');

newBookDialogOpener.addEventListener('click', ()=>addBookDialog.showModal());

cancelDialog.addEventListener('click', (event)=>{
    event.preventDefault();
    addBookDialog.close();
});

newBookForm.addEventListener('submit', ()=>{
    let title = document.querySelector('#title').value;
    let author= document.querySelector('#author').value;
    let pages = document.querySelector('#pages').value;
    let readStatus = document.querySelector('input[name="readStatus"]:checked').value;
    let book = new Book(title, author, pages, readStatus, myLibrary.length);
    addBookToLibrary(title, author, pages, read);
    displayBook(book);
    newBookForm.reset();
});

addBookToLibrary('Fake Book1', 'Fake Author', 200, 'unread');
addBookToLibrary('Fake Book2', 'Fake Author', 200, 'unread');
addBookToLibrary('Fake Book3', 'Fake Author', 200, 'unread');
addBookToLibrary('Fake Book4', 'Fake Author', 200, 'unread');
addBookToLibrary('Fake Book5', 'Fake Author', 200, 'unread');
addBookToLibrary('Fake Book6', 'Fake Author', 200, 'unread');

addBookToLibrary('Fake Read Book7', 'Fake Author', 200, 'read');
addBookToLibrary('Fake Read Book8', 'Fake Author', 200, 'read');
addBookToLibrary('Fake Read Book9', 'Fake Author', 200, 'read');
addBookToLibrary('Fake Read Book10', 'Fake Author', 200, 'read');
addBookToLibrary('Fake Read Book11', 'Fake Author', 200, 'read');
addBookToLibrary('Fake Read Book12', 'Fake Author', 200, 'read');


myLibrary.forEach(displayBook);

function Book(title, author, pages, readStatus, index) {
    this.title = title;
    this.author = author;
    this.pages = pages;
    this.readStatus = readStatus;
    this.index = index;
}

function addBookToLibrary(title, author, pages, readStatus) {
    const book = new Book(title, author, pages, readStatus, myLibrary.length);
    myLibrary.push(book);
}

function displayBook(newBook) {
    const newBookCard = document.createElement('div');

    const title = document.createElement('div');
    title.setAttribute('class', 'title');
    title.textContent = newBook.title;
    newBookCard.appendChild(title);

    const author = document.createElement('div');
    author.setAttribute('class', 'author');
    author.textContent = newBook.author;
    newBookCard.appendChild(author);

    const pages =  document.createElement('div');
    pages.setAttribute('class','pages');
    pages.textContent = newBook.pages + ' pages';
    newBookCard.appendChild(pages);

    const deleteElement = document.createElement('button');
    deleteElement.textContent = 'Delete';
    deleteElement.addEventListener('click', function(event) {
        delete myLibrary[newBook.index];
        event.target.parentElement.remove();
    });
    newBookCard.appendChild(deleteElement);

    newBookCard.setAttribute('class', 'card');
    if (newBook.readStatus === 'read') {
        readContainer.appendChild(newBookCard);
    } else {
        unreadContainer.appendChild(newBookCard);
    }
}