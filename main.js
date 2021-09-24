
const API_KEY    = `AIzaSyBVAnGGcC1gB9A0H5rcvs-9nD_hfbRh-Tg`;
const BASE_URL   = `https://www.googleapis.com/books/v1/volumes?key=${API_KEY}&q=`;
const ERROR_MSGS = {
    NO_SEARCH_TERM: 'Need a search term!!',
    NO_RESULTS    : "I didn't find any results"
}


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
        if (book.volumeInfo.description) {
            copyTemp.querySelector('.book-desc').textContent = `${book.volumeInfo.description}`;
        }
        else {
            copyTemp.querySelector('.book-desc').textContent = `No description`
        }

        cardList.appendChild(copyTemp);
    });
}

async function searchBooks() {
    const searchTerm = document.querySelector('#searchTerm').value;
    const errMsgContainer = document.querySelector('#errMsg');

    if (searchTerm) {
        activateSpinner();
        errMsgContainer.style.display = 'none';
        removeBookResults();

        const data  = await fetch(BASE_URL + searchTerm);
        const books = await data.json();
        clearSpinner();
        if (books.items && books.items.length > 0) {
            populateBookCards(books.items);
        }
        else {
            showErrorMsg(errMsgContainer, ERROR_MSGS.NO_RESULTS);
        }
    }
    else {
        showErrorMsg(errMsgContainer, ERROR_MSGS.NO_SEARCH_TERM);
    }
}

function removeBookResults() {
    document.querySelector('#main').innerHTML = '';
}

function showErrorMsg(errMsgContainer, content) {
    errMsgContainer.textContent   = content;
    errMsgContainer.style.display = 'flex';
    setTimeout(() => errMsgContainer.style.display = 'none', 3000);
}

function activateSpinner() {
    document.querySelector('.lds-ring').style.display = 'inline-block';
}

function clearSpinner() {
    document.querySelector('.lds-ring').style.display = 'none';

}




