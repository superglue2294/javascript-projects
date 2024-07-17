// Define your Book class here:

class Book {
    constructor(title, author, copyrightDate, iSBN, pages, numCheckout, discarded) {
        this.title = title;
        this.author = author;
        this.copyrightDate = copyrightDate;
        this.iSBN = iSBN;
        this.pages = pages;
        this.numCheckout = numCheckout;
        this.discarded = discarded;
    }

    checkout(num) {
        this.numCheckout += num;
    }
}

// Define your Manual and Novel classes here:

class Manual extends Book {
    constructor(title, author, copyrightDate, iSBN, pages, numCheckout, discarded) {
        super(title, author, copyrightDate, iSBN, pages, numCheckout, discarded);
    }

    dispose(year) {
        if (year - this.copyrightDate > 5) {
            this.discarded = 'Yes';
        }
    }
}

class Novel extends Book {
    constructor(title, author, copyrightDate, iSBN, pages, numCheckout, discarded) {
        super(title, author, copyrightDate, iSBN, pages, numCheckout, discarded);
    }

    dispose() {
        if (this.numCheckout > 100) {
            this.discarded = 'Yes';
        }
    }
}

// Declare the objects for exercises 2 and 3 here:

let novel1 = new Novel('Pride and Prejudice', 'Jane Austen', 1813, '1111111111111', 432, 32, 'No');
let manual1 = new Manual('Top Secret Shuttle Building Manual', 'Redacted', 2013, '0000000000000', 1147, 1, 'No');

// Code exercises 4 & 5 here:

console.log(`Has the novel '${novel1.title}' by ${novel1.author} been disposed?: ${novel1.discarded}`);
console.log(`Has the novel '${manual1.title}' by ${novel1.author} been disposed?: ${manual1.discarded}`);

novel1.dispose();
manual1.dispose(2024);

console.log(`Has the novel '${novel1.title}' by ${novel1.author} been disposed?: ${novel1.discarded}`);
console.log(`Has the novel '${manual1.title}' by ${novel1.author} been disposed?: ${manual1.discarded}`);

console.log(`Number of times '${novel1.title}' by ${novel1.author} has been checked out: ${novel1.numCheckout}`);

novel1.checkout(5);

console.log(`Number of times '${novel1.title}' by ${novel1.author} has been checked out: ${novel1.numCheckout}`);

novel1.dispose();

console.log(`Has the novel '${novel1.title}' by ${novel1.author} been disposed?: ${novel1.discarded}`);