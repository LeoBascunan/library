

//array simple para almacenar los libros
let myLibrary = [
    { title: 'Fausto', author: 'Goethe', pages: 544, read: false },
    { title: 'TLotR, Las dos torres', author: 'J.R.R. Tolkien', pages: 352, read: true }
];



//constructor 
function Book(title, author, pages, read) {
    this.title = title
    this.author = author
    this.pages = pages
    this.read = read
}

// console.table(myLibrary)
updateTable()

//funcion que recibe el input del usuario y lo almacena en el array "myLibrary"

function addBookToLibrary() {


    const title = document.getElementById('booktitle').value
    const author = document.getElementById('author').value
    const pages = document.getElementById('pages').value
    const alreadyRead = document.getElementById('alreadyread').checked
    const book = new Book(title, author, pages, alreadyRead)
    myLibrary.push(book)
    updateTable()





}
function updateTable() {
    const jsTable = document.getElementById('js-table')
    jsTable.innerHTML = ''
    for (let i = 0; i < myLibrary.length; i++) {
        let newRow = jsTable.insertRow(-1)

        let titleCell = newRow.insertCell(-1)
        let titleText = document.createTextNode(myLibrary[i].title)
        titleCell.appendChild(titleText)


        let authorCell = newRow.insertCell(-1)
        let authorText = document.createTextNode(myLibrary[i].author)
        authorCell.appendChild(authorText)


        let pagesCell = newRow.insertCell(-1)
        let pagesText = document.createTextNode(myLibrary[i].pages)
        pagesCell.appendChild(pagesText)

        let readCell = newRow.insertCell(-1);
        if (myLibrary[i].read == false) {
            readCell.innerHTML = '<button type="button" class="read-unread-button">❌</button>'
        } else {
            readCell.innerHTML = '<button type="button" class="read-unread-button">✔️</button>'
        }

        let deleteCell = newRow.insertCell(-1)
        deleteCell.innerHTML = '<button type="button class "delete-button">🗑️</button>'

    }
    console.table(myLibrary)

}

booktable.addEventListener("click", respondToClick);

function respondToClick(e) {
    const targetBook = e.target.parentNode.parentNode.childNodes[0].innerText
    //Aca se selecciona el elemento html (podria haberse tomado la class o la id)
    if (e.target.innerHTML == '🗑️') {
        myLibrary.splice(findBookArray(targetBook), 1)
        updateTable()
    }

    if (e.target.classList.contains("read-unread-button")) {
        markReadUnread(findBookArray(targetBook));
        updateTable();
    }
}


function markReadUnread(arrayIndex) {
    if (myLibrary[arrayIndex].read == false) {
        myLibrary[arrayIndex].read = true;
        return;
    } else {
        myLibrary[arrayIndex].read = false;
    }
}


function findBookArray(title) {
    for (let book of myLibrary) {
        if (book.title === title) {
            return myLibrary.indexOf(book)
        }
    }
}

//La cadena de caracteres que se pasa como argumento a querySelector debe seguir la sintaxis CSS.
//element es (h1)  class es (.box) y id es (#unique)
const form = document.querySelector('#mainform')
//se selecciona el nodo(form), se añade un evento "submit" el cual ejecuta la funcion(addBookToLibrary)
form.addEventListener("submit", function (event) {
    event.preventDefault()
    addBookToLibrary()
})


//al probar la funcion noté que el mensaje en console desaparece muy rapido, esto se debe a que:
//los inputs del tipo submit end their form whenever you click on them, so the script is getting called, 
//and you're seeing the output briefly, but then the page is getting reloaded and the console is getting 
//cleared

// function guardarNumeros(){

//     var items = [];
//     boxvalue = document.getElementById('box').value;
//     items.push(boxvalue);  
//     console.log(items);

//generar un listener con DOM que haga algo cuando se apreta el botón
//agregar 2 libros en el array LISTO
//crear funcion "addBookToLibrary" que añada libro al array "mylibrary" desde un textbox y un input con DOM
    //IDEA: probar en otro proyecto con 1 atributo y luego con más
//El array "myLibrary" se tiene que ver una tabla html 


//2.All of your book objects are going to be stored in a simple array, 
//so add a function to the script (not the constructor) that can take user’s 
//input and store the new book objects into an array. Your code should look something like this:

// 3. Write a function that loops through the array and displays each book on the page. 
// You can display them in some sort of table, or each on their own “card”. 
// It might help for now to manually add a few books to your array so you can see the display.