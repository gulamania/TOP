const myLibrary = [];

function Book(title, author, pages, read, index){
    this.title = title;
    this.author = author;
    this.pages = pages;
    this.read = read;
    this.index = index;
    this.info = function() {
        if (this.read == "true"){
            readString = "read";
        } else if (this.read == "false"){
            readString = "not read yet";
        } else {
            readString = "invalid read value";
        }
        return this.title + " by " + this.author + ", " + this.pages + " pages, " + readString
    }
}

function addBookToLibrary(library, title, author, pages, read){
    library.push(new Book(title, author, pages, read, library.length))
}

//Show Add Book Dialog
const dialog = document.querySelector("dialog");
const showButton = document.querySelector("#show")
showButton.addEventListener("click", () => {
    dialog.showModal();
});

//creates the book table
const fields = ['title', 'author', 'pages', 'read'];
const bookContainer = document.querySelector('table')
function makeBookTable(myLibrary, bookContainer, fields){
    for (const bookid in myLibrary){
        var book = myLibrary[bookid];
        updateBookTable(book, bookContainer, fields, Number(bookid));
    }
    rmButtons = document.querySelectorAll('.remove')
}

//Makes remove buttons
function makeRemoveButton(index){
    var rmButtonContainer = document.createElement('td');
    var rmButton = document.createElement('button');
    rmButton.className = "remove";
    rmButton.innerHTML = "remove";
    rmButton.id = index;
    rmButton.addEventListener('click', () => {
        var rowNode = rmButton.parentNode.parentNode;
        bookContainer.removeChild(rowNode);
    })
    rmButtonContainer.appendChild(rmButton);
    return rmButtonContainer
}

//Makes read buttons
function makeReadButton(index){
    var readButtonContainer = document.createElement('td');
    var readButton = document.createElement('button');
    readButton.className = "read";
    readButton.innerHTML = "read";
    readButton.id = index;
    readButton.addEventListener('click', () => {
        var rowNode = readButton.parentNode.parentNode;
        var statusNode = rowNode.childNodes[3]
        if (statusNode.innerHTML == "true")
            {statusNode.innerHTML = "false"
        } else if (statusNode.innerHTML == "false")
            {statusNode.innerHTML = "true"
        }
    })
    readButtonContainer.appendChild(readButton);
    return readButtonContainer
}

//Updates the book table by adding a row
function updateBookTable(book, bookContainer, fields, index){
    var entry = document.createElement('tr');
    for (const fieldid in fields){
        var field = fields[fieldid];
        var value = document.createElement('td');
        value.innerHTML = book[field];
        entry.appendChild(value);
    }
    rmButtonContainer = makeRemoveButton(index);
    readButtonContainer = makeReadButton(index);
    entry.appendChild(rmButtonContainer);
    entry.appendChild(readButtonContainer);
    bookContainer.appendChild(entry);
}

// Update myLibrary array when form submitted
const form = document.getElementById("form")
form.addEventListener('submit', (event) => {
    event.preventDefault();
    addBookToLibrary(myLibrary, form.elements['book-title'].value,
                                form.elements['author'].value, 
                                form.elements['pages'].value, 
                                form.elements['read-status'].value)
    updateBookTable(myLibrary.slice(-1)[0], bookContainer, fields, myLibrary.length - 1)
    rmButtons = document.querySelectorAll('.remove')
    dialog.close();
})


addBookToLibrary(myLibrary, "The Hobbit", "JRR Tolkien", "297", "false", 0);
makeBookTable(myLibrary, bookContainer, fields)
