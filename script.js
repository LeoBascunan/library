// Your book objects should have the book’s title, author, the number of pages, and whether or not you have read the book

function Book(title, author, pages, read) {
    this.title = title
    this.author = author
    this.pages = pages
    this.read = read

    this.info = function () {
        return (title + ' by ' + author + ', ' + pages + ' pages ' + ', ' + read)
    }

}


const theHobbit = new Book('The Hobbit', 'J.R.R. Tolkien', '295', 'no read yet')

console.log(theHobbit.info())

// theHobbit.info() // "The Hobbit by J.R.R. Tolkien, 295 pages, not read yet"


// function Player(name, marker) {
//     this.name = name
//     this.marker = marker
//     this.sayName = function() {
//       console.log(name)
//     }
//   }

//   const player1 = new Player('steve', 'X')
//   const player2 = new Player('also steve', 'O')
//   player1.sayName() // logs 'steve'
//   player2.sayName() // logs 'also steve'