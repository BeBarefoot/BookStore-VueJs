import autoCompleteService from "../services/auto-complete.service.js";
import searchResult from "../cmps/search-result.cmp.js";

export default {
    template: `
  <div class="search-engine">
    <h1> BOOKS  ?</h1>

                    <input v-model='value' @keyup="search" type="text" />
        <section class="add-book-container">
                    <search-result v-for="book in books" :book="book"></search-result>
                    
    </section>
</div>
    `,
    data() {
        return {
            value: "",
            books: [],
            currBook: ""
        };
    },
    methods: {
        search() {
            autoCompleteService.autoCompleteService(this.value).then(booksArray => {
                this.books = booksArray;
            });
        }
    },
    components: {
        autoCompleteService,
        searchResult
    }
};