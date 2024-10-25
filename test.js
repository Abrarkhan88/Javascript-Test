function Book(title, author, pages, read) {
    this.title = title;
    this.author = author;
    this.pages = pages;
    this.read = read;
    this.info = function() {
        if(this.read === false){
            return `${this.title} by ${this.author}, ${this.pages} pages, not read yet`;
        }
        else {
            return `${this.title} by ${this.author}, ${this.pages} pages, read`;
        }
    };
};


const theHobbit = new Book('The Hobbit', 'J.R.R Tolkien', 295, false);
theHobbit.info(); // "The Hobbit by J.R.R. Tolkien, 295 pages, not read yet"
console.log(theHobbit.info());