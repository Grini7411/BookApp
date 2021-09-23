
const API_KEY    = `AIzaSyBVAnGGcC1gB9A0H5rcvs-9nD_hfbRh-Tg`;
const BASE_URL   = `https://www.googleapis.com/books/v1/volumes?key=${API_KEY}&q=`;
const ERROR_MSGS = {
    NO_SEARCH_TERM: 'Need a search term!!',
    NO_RESULTS    : "I didn't find any results"
}


window.addEventListener('load', () => {
    // populateBookCards(mock.items);
})

function populateBookCards(books) {
    const cardList = document.getElementById('main');

    const template = document.getElementById('cardTemp').content;
    books.forEach(book => {
        const copyTemp = document.importNode(template, true);
        copyTemp.querySelector('img').setAttribute('src', book.volumeInfo.imageLinks.thumbnail);
        let fullTitle = book.volumeInfo.subtitle ? `${book.volumeInfo.title} - ${book.volumeInfo.subtitle}` : book.volumeInfo.title;
        if (fullTitle.length > 70) {
            fullTitle = fullTitle.substring(0,70) + '...';
        }
        copyTemp.querySelector('.book-name').textContent = fullTitle;
        if (book.volumeInfo.authors) {
            copyTemp.querySelector('.by i').textContent = 'by';
            copyTemp.querySelector('.book-author').textContent = `${book.volumeInfo.authors.join(' ,')}`;
        }

        cardList.appendChild(copyTemp);
    });
}


function removeBookResults() {
    document.querySelector('#main').innerHTML = '';
}

async function searchBooks() {
    const searchTerm = document.querySelector('#searchTerm').value;
    const dangerMsgDiv = document.querySelector('.danger');

    if (searchTerm) {
        dangerMsgDiv.style.display = 'none';
        removeBookResults();

        const data  = await fetch(BASE_URL + searchTerm);
        const books = await data.json();
        if (books.items && books.items.length > 0) {
            populateBookCards(books.items);
        }
    }
    else {
        dangerMsgDiv.style.display = 'block';
        setTimeout(() => dangerMsgDiv.style.display = 'none', 3000);

    }
}

