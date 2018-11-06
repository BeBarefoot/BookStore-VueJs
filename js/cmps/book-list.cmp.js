import bookPreview from './book-preview.cmp.js';
import bookFilter from './book-filter.cmp.js';
import bookDetails from '../pages/book-details.cmp.js';

export default {
    template: `
    <div>
        <section >
         
            <ul class="book-list"  >
                <book-preview v-for="book in books" :currBook='book'></book-preview>
            </ul>
        </section>
    </div>
    `,
    props: ['books'],
    data() {
        return {
            displayBook: '',
            isDetails: false
        }
    },
    methods: {},
    components: {
        bookFilter,
        bookDetails,
        bookPreview
    },
    created() {
        window.scrollTo(0, 0);
    },
}