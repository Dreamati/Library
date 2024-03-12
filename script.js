const addButton = document.querySelector('.addNew');
const modal = document.querySelector('.modal');
const closer = document.querySelector('#closer');
const submit = document.querySelector('#Submit');
const bookTitle = document.querySelector('#Title');
const bookAuthor = document.querySelector('#Author');
const bookPages = document.querySelector('#Pages');
const bookRead = document.querySelector('#Read');
const section = document.querySelector('section');

let books = [];
function Book(name, author, pages, read) {
    this.bookName = name;
    this.bookAuthor = author;
    this.bookPages = pages;
    this.bookRead = read;
}


addButton.addEventListener('click', function(){
    modal.style.display = 'flex';
})

closer.addEventListener('click', function(){
    modal.style.display = 'none';
})
submit.addEventListener ('click', function() {

    var tempbook = new Book(bookTitle.value, bookAuthor.value, bookPages.value, bookRead.value);
    console.log(tempbook);
    books.push(tempbook);
    console.log(books);
    display(tempbook);
    clearInput();
})

function clearInput() {
    bookTitle.value = '';
    bookAuthor.value = '';
    bookPages.value = '';
    bookRead.value = '';
}

function display(obj) {
    let div = document.createElement('div');
    div.classList.add("bookBox");

    let h2 = document.createElement('h2');
    let para1 = document.createElement('p');
    let para2 = document.createElement('p');
    let button1 = document.createElement('button');
    let button2 = document.createElement('button');

    h2.textContent = `${obj.bookName}`;
    para1.textContent = "Author Name:" + obj.bookAuthor;
    para2.textContent = "Total Pages:" + obj.bookPages;
    console.log(obj.bookRead);
    if(Boolean(obj.bookRead))
    {
        button1.textContent = "Not - Read";
    }
    else {
        button1.textContent = "Read";
    }
    button2.textContent = "Delete";
    deleteButton(button2);

    button1.addEventListener('click', function() {
        if(Boolean(obj.bookRead))
        {
            obj.bookRead = false;
            button1.textContent = "Read";
        }
        else {
            obj.bookRead = true;
            button1.textContent = "Not - Read";
        }
    })
    
    section.appendChild(div);
    div.appendChild(h2);
    div.appendChild(para1);
    div.appendChild(para2);
    div.appendChild(button1);
    div.appendChild(button2);
}

function deleteButton(obj2) {
    obj2.addEventListener('click', function(){
        obj2.parentNode.remove();
    })
}