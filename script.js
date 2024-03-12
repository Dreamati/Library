let books = [];
function Book(name, author, pages, read) {
    this.bookName = name;
    this.bookAuthor = author;
    this.bookPages = pages;
    this.bookRead = read;
}
const addButton = document.querySelector('.addNew');
const modal = document.querySelector('.modal');
const closer = document.querySelector('#closer');

addButton.addEventListener('click', function(){
    modal.style.display = 'flex';
})

closer.addEventListener('click', function(){
    modal.style.display = 'none';
})
