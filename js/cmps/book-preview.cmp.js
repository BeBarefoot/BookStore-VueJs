import bookDetails from '../pages/book-details.cmp.js';
import eventBus, { GET_BOOK } from "../event-bus.js";

export default {
    template: `
    <div v-if="currBook">
    <section>
        <li class="book-preview">
            <img class="book-image" :src="this.currBook.thumbnail"  @click="getBook(currBook)">
        </li>
    </section>
    </div>
    `,
    props: ['currBook'],
    data() {
        return {
            isSelected: false
        }
    },
    computed: {
        symbol() {
            let currCode = this.currBook.listPrice.currencyCode
            if (currCode === 'EUR') return '€';
            else if (currCode === 'USD') return '$';
            else if (currCode === 'ILS') return '₪';
        },
    },
    methods: {
        getBook(displayBook) {
            eventBus.$emit(GET_BOOK, displayBook)
            this.$router.push(`/books/book/${this.currBook.id}`)
        },

    },
    components: { bookDetails },
}