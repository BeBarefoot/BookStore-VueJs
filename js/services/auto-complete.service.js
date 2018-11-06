export function autoCompleteService(value) {

    const API_KEY = 'AIzaSyAVgeusSx-0vfRX-9g6scTjRdfo9Bmrz0o';

    var books = fetch(`https://www.googleapis.com/books/v1/volumes?q=${value}+intitle&key=${API_KEY}`)
        .then(response => response.json())
        .then(json => (json.items))
    return Promise.resolve(books);

}

export default {
    autoCompleteService
}