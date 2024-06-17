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

addBookToLibrary('Sample Book 1', 'Author 1', 200, 'unread');
addBookToLibrary('Sample Book 2', 'Author 2', 200, 'unread');

addBookToLibrary('Sample Book 3', 'Author 3', 200, 'read');
addBookToLibrary('Sample Book 4', 'Author 4', 200, 'read');


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

    const buttonsContainer = document.createElement('div');
    buttonsContainer.setAttribute('class', 'buttonsContainer')
    newBookCard.appendChild(buttonsContainer);

    const readStatusButton = document.createElement('button');
    readStatusButton.textContent = (newBook.readStatus === 'read') ? 'unread' : 'read';
    readStatusButton.addEventListener('click', (event)=>{
        event.target.parentElement.parentElement.remove();
        newBook.readStatus = (newBook.readStatus === 'read') ? 'unread' : 'read';
        displayBook(newBook);
    });
    buttonsContainer.appendChild(readStatusButton);

    const deleteElement = document.createElement('button');
    deleteElement.textContent = 'Delete';
    deleteElement.addEventListener('click', function(event) {
        delete myLibrary[newBook.index];
        event.target.parentElement.parentElement.remove();
    });
    buttonsContainer.appendChild(deleteElement);

    newBookCard.setAttribute('class', 'card');
    if (newBook.readStatus === 'read') {
        readContainer.appendChild(newBookCard);
    } else {
        unreadContainer.appendChild(newBookCard);
    }
}