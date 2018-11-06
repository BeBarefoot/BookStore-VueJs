import bookApp from './pages/book-app.cmp.js';
import bookDetails from './pages/book-details.cmp.js';
import homePage from './pages/home-page.cmp.js';
import addBook from './pages/add-book.cmp.js';
import aboutPage from './pages/about-page.cmp.js';
import bookReview from './pages/review-page.cmp.js';


var myRoutes = [
    { path: '/', component: homePage },
    { path: '/add-book', component: addBook },
    { path: '/about', component: aboutPage },
    { path: '/main', component: bookApp },
    { path: '/review/:bookId', component: bookReview },
    { path: '/books/book/:bookId', component: bookDetails },

]

export default myRoutes;