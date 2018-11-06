import { bookService } from "../services/book.service.js";
import eventBus, { SHOW_USER_MSG } from "../event-bus.js";
export default {
    props: ["book"],
    template: `
           <div class="all-results" >
             <img :src="book.volumeInfo.imageLinks.thumbnail"/>
                <p class="search-book-title" >"{{getTitle}}"</p>
                <p class="search-book-author">by {{getAuthor}}</p>
            
                <button @click="addBook(book)" >Add This Book!</button>
             </div>
             `,
    data() {
        return {
            title: '',
            author: ''
        };
    },
    methods: {
        addBook() {
            let currBook = {
                id: this.book.id,
                title: this.book.volumeInfo.title,
                subtitle: "",
                authors: this.book.volumeInfo.authors,
                publishedDate: this.book.volumeInfo.publishDate,
                description: this.book.volumeInfo.description,
                pageCount: this.book.volumeInfo.publishedDate,
                categories: this.book.volumeInfo.categories,
                thumbnail: this.book.volumeInfo.imageLinks.thumbnail,
                language: this.book.volumeInfo.language,
                listPrice: {
                    amount: 176,
                    currencyCode: "EUR",
                    isOnSale: false
                }
            }
            bookService.addNewBook(currBook)
            eventBus.$emit(SHOW_USER_MSG, {
                type: "msg-sent",
                txt: `Book added to list!`
            })
        },
    },
    components: {
        bookService,
        eventBus
    },
    computed: {
        getTitle() {
            if (this.book.volumeInfo.title.length > 60)
                return this.title = this.book.volumeInfo.title.substring(0, 59) + '...'
            else return this.title = this.book.volumeInfo.title
        },
        getAuthor() {

            if (this.book.volumeInfo.authors[0]) return this.author = this.book.volumeInfo.authors[0]
            else return this.author = 'Unknown Author'
        }
    },
}