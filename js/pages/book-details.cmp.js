import longText from "../cmps/book-long-text.cmp.js";
import { bookService } from "../services/book.service.js";
import reviewAdd from "../cmps/review-add.cmp.js";

export default {
    template: `
    <div v-if="book">
      <router-link class="prev-book":to="'/books/book/'+prevBookId">Back</router-link>
      <router-link class="next-book":to="'/books/book/'+nextBookId">Next</router-link>
        <section class="book-details">
            <img class="book-image" :src="this.book.thumbnail" >
        <div class="book-details-text">
            <h2 class="book-detail-title" :class="setBookColor">
                "{{book.title}}"
            </h2>
              <p class="author">{{author}}</p>
              <p class="on-sale">{{isOnSale}}</p>
            <h4 class="book-details-price">Price: {{price}}</h4>
              <p class="categories">{{categories}}</p>

            <p class="book-details-publish">{{published}}</p>
            <p class="book-details-read">{{reading}}</p>
             <long-text :txt="book.description"></long-text>
          <review-add :currBook="book"></review-add>
             </div>
    </section>
    </div>
    `,
    data() {
        return {
            book: null,
            books: [],
            nextBookId: '',
            prevBookId: '',
        };
    },
    methods: {
        backToMain() {
            this.book = null;
            this.$router.push("/main");
        },
        loadBookData() {
            const bookId = this.$route.params.bookId;
            bookService.getBookById(bookId)
                .then(book => this.book = book)
            bookService.nextBook(bookId)
                .then(nextBook => this.nextBookId = nextBook.id)


        },
    },
    computed: {
        reading() {
            if (this.book.pageCount > 500) return "Long-ass read";
            if (this.book.pageCount > 200) return "Mid-size read, you can do it";
            if (this.book.pageCount > 100)
                return `Lazy peoples book, it's basicly a hard-cover newspaper`;
        },
        published() {
            if (2018 - this.book.publishedDate > 10)
                return `this book is OLD, published at ${this.book.publishedDate}`;
            if (2018 - this.book.publishedDate < 1)
                return `this book is NEW! published at ${this.book.publishedDate}`;
        },
        setBookColor() {
            // if (this.book.listPrice.amount > 150) return "red";
            // else return "green";
        },
        price() {
            let currCode = this.book.listPrice.currencyCode;
            let currPrice = this.book.listPrice.amount;
            if (currCode === "EUR") return `${currPrice}€`;
            else if (currCode === "USD") return `${currPrice}$`;
            else if (currCode === "ILS") return `${currPrice}₪`;
        },
        isOnSale() {
            if (this.book.listPrice.isOnSale) return "SALE SALE SALE SALE!!";
            else return "";
        },
        author() {
            return `Written by ${this.book.authors[0]}`;
        },
        categories() {
            if (this.book.categories)
                return this.book.categories.map(cat => { return cat })
        },

    },
    components: {
        longText,
        reviewAdd,
    },
    created() {
        window.scrollTo(0, 0);
        let bookId = this.$route.params.bookId;
        bookService.getBookById(bookId).then(book => {
            this.book = book
        })
    },
    mounted() {
        this.loadBookData()
    },
    watch: {
        '$route.params.bookId': function(id, prevValue) {
            this.prevBookId = prevValue
            this.loadBookData()
        }
    },
}