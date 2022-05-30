const books = [
    {
        title: 'Dune',
        author: 'Frank Herbert',
        category: 'sci-fi'
    },
    {
        title: 'Dune Messiah',
        author: 'Frank Herbert',
        category: 'sci-fi'
    },
    {
        title: "Harry Potter and the Philosopher's stone",
        author: 'J K Rowling',
        category: 'fantasy'
    },
    {
        title: "Harry Potter and the Chamber of Secrets",
        author: 'J K Rowling',
        category: 'fantasy'
    }
]


function returnBookHtml(book) {
    return `
    <div class="row">
        <div class="col-12">
            <h4>${book.title}</h4>
        </div>
        <div class="col-6">
            ${book.author}
        </div>
        <div class="col-6">
            ${book.category}
        </div>
    </div>
    `
}

function renderBooks() {
    const booksElement = document.getElementById("books")
    booksElement.innerHTML = ""
    for (let bookObj of books) {
        booksElement.innerHTML += returnBookHtml(bookObj)
    }   
}

renderBooks()


