function Book(title, author, pages, read) {
    this.title = title;
    this.author = author;
    this.pages = pages;
    this.read = read;
 }
 
 const myLibrary = [];
 
 function displayBooks() {
    const catalog = document.getElementById("book-catalog");
    catalog.innerHTML = '';
 
    myLibrary.forEach((book, index) => {
        const bookDiv = document.createElement("div");
        bookDiv.classList.add("book");
        bookDiv.textContent = `'${book.title}' by '${book.author}', ${book.pages} pages, ${book.read ? 'read' : 'not read yet'}`;
        catalog.appendChild(bookDiv);
    });
 }
 
 document.getElementById("new-book-button").addEventListener("click", () => {
    const form = document.getElementById("book-form");
    form.style.display = form.style.display === "none" ? "block" : "none";
 });
 
 document.getElementById("book-form").addEventListener("submit", function(event) {
    event.preventDefault();
 
    const title = document.getElementById("title").value;
    const author = document.getElementById("author").value;
    const pages = parseInt(document.getElementById("pages").value);
    const read = document.getElementById("read").checked;
 
    const newBook = new Book(title, author, pages, read);
    myLibrary.push(newBook);
 
    document.getElementById("book-form").reset();
    document.getElementById("book-form").style.display = "none";
 
    displayBooks();
 });
 