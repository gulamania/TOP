class Book{
    constructor(title, author, pages, read, index){
        this.title = title;
        this.author = author;
        this.pages = pages;
        this.read = read;
        this.index = index;
    }

    get info() {
        if (this.read == "true"){
            var readString = "read";
        } else if (this.read == "false"){
            var readString = "not read yet";
        } else {
            var readString = "invalid read value";
        }
        return this.title + " by " + this.author + ", " + this.pages + " pages, " + readString
    }
}

class Library{
    bookList = [];

    addBookToLibrary(title, author, pages, read){
        this.bookList.push(new Book(title, author, pages, read, this.bookList.length));
    }

    get bookList() {
        return this.bookList;
    }
}

class DOMInterfacer{
    myLibrary = new Library;
    fields = ['title', 'author', 'pages', 'read'];
    bookContainer = document.querySelector('table');
    rmButtons = [];
    dialog = document.querySelector("dialog");

    updateBookTable(book, index){
        var entry = document.createElement('tr');
        for (const fieldid in this.fields){
            var field = this.fields[fieldid];
            var value = document.createElement('td');
            value.innerHTML = book[field];
            entry.appendChild(value);
        }
        let rmButtonContainer = this.makeRemoveButton(index);
        let readButtonContainer = this.makeReadButton(index);
        entry.appendChild(rmButtonContainer);
        entry.appendChild(readButtonContainer);
        this.bookContainer.appendChild(entry);
    }

    //Makes remove buttons
    makeRemoveButton(index){
        var rmButtonContainer = document.createElement('td');
        var rmButton = document.createElement('button');
        rmButton.className = "remove";
        rmButton.innerHTML = "remove";
        rmButton.id = index;
        rmButton.addEventListener('click', () => {
            var rowNode = rmButton.parentNode.parentNode;
            this.bookContainer.removeChild(rowNode);
        })
        rmButtonContainer.appendChild(rmButton);
        return rmButtonContainer
    }

    //Makes read buttons
    makeReadButton(index){
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

    //Show Add Book Dialog
    initialiseAddBookDialog(){
        const showButton = document.querySelector("#show")
        showButton.addEventListener("click", () => {
            this.dialog.showModal();
        });
    };

    // Update myLibrary array when form submitted
    initialiseLibraryAddition(){
        const form = document.getElementById("form")
        form.addEventListener('submit', (event) => {
            event.preventDefault();
            this.myLibrary.addBookToLibrary(form.elements['book-title'].value,
                                            form.elements['author'].value, 
                                            form.elements['pages'].value, 
                                            form.elements['read-status'].value);
            this.updateBookTable(this.myLibrary.bookList.slice(-1)[0], this.myLibrary.bookList.length - 1);
            this.rmButtons = document.querySelectorAll('.remove');
            this.dialog.close();
        })
    }
    initialise(){
        for (const bookid in this.myLibrary.bookList){
            var book = this.myLibrary.bookList[bookid];
            this.updateBookTable(book, Number(bookid));
        }
        this.rmButtons = document.querySelectorAll('.remove');
        this.initialiseAddBookDialog();
        this.initialiseLibraryAddition();
    }
    
}

const DOMInterface = new DOMInterfacer();

DOMInterface.myLibrary.addBookToLibrary("The Hobbit", "JRR Tolkien", "297", "false", 0);
DOMInterface.initialise();
