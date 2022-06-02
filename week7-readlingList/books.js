class BookList {
    constructor() {
        this._bookList = []
        this._currentBook = 0
    }
    add(book) {
        //When last book is read, make new added book to be current book
        /*if (
            this._bookList.length > 0 &&
            this._currentBook === this._bookList.length-1 && 
            this._bookList[this._currentBook].isRead()
        ) {
            this._currentBook += 1
        }*/
        this._bookList.push(book)
    }

    finishCurrentBook() {
        this._bookList[this._currentBook].markRead()
        if (this._currentBook < this._bookList - 1) {
            this._currentBook += 1
        }

    }

    getReadBooksCount() {
        
    }

    getUnreadBooksCount() {

    }

}

class Book {
    constructor() {
        this._read = false
        this._readDate = null
        this._title = null
        this._genre = null
        this._author = null
    }
    markRead() {
        this._read = true
    }
    get read() {
        return this._read
    }
    set title(title) {
        this._title = title
    }
    set genre(genre) {
        this._genre = genre
    }
    set author(author) {
        this._author = author
    }
}

//1. Create class Book. Add data to the class
//2. Create book list. Initially book list can empty
//2.1. Add booklist data: booksArray, readCount, currentBookIndex
// hint: currentBookIndex can be index of an element in booksArray
//2.2 Add function getUnreadCount that should return number unread books
//2.3 Add a function add(book) this function should add a book object to booksArray
//2.4 Test in console that adding a book works


//Testing

const bookList = new BookList()

const book1 = (new Book())
book1.title = 'Dune'
book1.author = 'Frank Herbert'
book1.genre = 'SciFy'

const book2 = (new Book())
book2.title = 'Harry Potter'
book2.author = 'J K Rowling'
book2.genre = 'Fantasy'

bookList.add(book1)
bookList.add(book2)

console.log(bookList)
