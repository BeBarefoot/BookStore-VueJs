import bookApp from './pages/book-app.cmp.js'
import homePage from './pages/home-page.cmp.js'
import bookDetails from './pages/book-details.cmp.js'
import navBar from './pages/nav-bar.cmp.js'
import userMsg from './cmps/user-msg.cmp.js'
import myRoutes from './routes.js'
import eventBus from "./event-bus.js";

Vue.use(VueRouter);
const myRouter = new VueRouter({ routes: myRoutes })
new Vue({
    el: '#app',
    router: myRouter,
    components: {
        bookApp,
        eventBus,
        bookDetails,
        homePage,
        navBar,
        userMsg
    }
})