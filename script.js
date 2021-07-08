

//array simple para almacenar los libros
let myLibrary = [
    {title: 'Fausto', author: 'Goethe', pages: 544,read: false},
    {title: 'TLotR, Las dos torres', author: 'J.R.R. Tolkien', pages: 352,read: true}
];



//constructor 
function Book(title, author, pages, read) {
    this.title = title
    this.author = author
    this.pages = pages
    this.read = read
}




//funcion que recibe el input del usuario y lo almacena en el array "myLibrary"

function addBookToLibrary(){


    //y si junto en un objecto todo los valores para que sean un solo objecto y los envío asi?
    // const title = document.getElementById('booktitle').value
    // const author = document.getElementById('author').value
    // const pages = document.getElementById('pages').value
    // const alreadyRead = document.getElementById('alreadyread').checked
    // myLibrary.push(titulo,author,pages,alreadyRead)
    

//al probar la funcion  noté que el mensaje en console desaparece muy rapido, esto se debe a que:
//los inputs del tipo submit end their form whenever you click on them, so the script is getting called, 
//and you're seeing the output briefly, but then the page is getting reloaded and the console is getting 
//cleared

    // const x = document.getElementById('booktitle').value;
}

console.table(myLibrary)
 
//La cadena de caracteres que se pasa como argumento a querySelector debe seguir la sintaxis CSS.
//element es (h1)  class es (.box) y id es (#unique)
const form = document.querySelector('#mainform')
//se selecciona el nodo(form), se añade un evento "submit" el cual ejecuta la funcion(addBookToLibrary)
form.addEventListener("submit",addBookToLibrary)

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