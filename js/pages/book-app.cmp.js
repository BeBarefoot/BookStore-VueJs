import { bookService } from "../services/book.service.js";
import bookFilter from "../cmps/book-filter.cmp.js";
import bookList from "../cmps/book-list.cmp.js";
import eventBus, { BOOKS } from "../event-bus.js";

export default {
    template: `
    <div>
        <book-filter v-if="!isSelected" class="book-filter-container" @set-filter="setFilter" ></book-filter>
        <book-list class="book-list-container" :books="booksToShow" @hide-filter="toggleFilter"></book-list> 
      
      </div>
    `,
    data() {
        return {
            books: [],
            filter: null,
            isSelected: false
        };
    },
    computed: {
        booksToShow() {
            if (!this.filter) return this.books
            else var displayBooks = this.books
                .filter(book => { return book.title.includes(this.filter.byTitle) })
                .filter(book => { return book.listPrice.amount > this.filter.fromPrice && book.listPrice.amount < this.filter.toPrice })
            return displayBooks
        }
    },
    methods: {
        setFilter(filterBy) {
            this.filter = filterBy;
        },
        toggleFilter() {
            this.isSelected = !this.isSelected;
        }
    },
    components: {
        bookFilter,
        bookList,
        eventBus
    },
    created() {
        bookService.query().then(book => {
            this.books = book
            eventBus.$emit(BOOKS, this.books)
        })
    },
};