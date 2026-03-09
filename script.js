// Book search functionality
function searchBooks() {
    const input = document.getElementById('search').value.toLowerCase();
    const books = document.getElementById('book-list').getElementsByTagName('li');

    for (let i = 0; i < books.length; i++) {
        const bookName = books[i].textContent.toLowerCase();
        if (bookName.includes(input)) {
            books[i].style.display = "";
        } else {
            books[i].style.display = "none";
        }
    }
}

// Contact form submission
function submitForm(event) {
    event.preventDefault();
    alert('Thank you! Your message has been sent.');
    document.getElementById('contact-form').reset();
}
