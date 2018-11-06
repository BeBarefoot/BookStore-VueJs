export default {
    template: `
    <section>
        <form class="book-serch">
        
               <input type="text"  @input="setFilter" v-model="filterBy.byTitle" placeholder="Search..."/>
               <div class="price-range">
                    Price:
            <input class="form-control price-range" type="number" max="200" min="0" step="10"   
            @input="setFilter" 
            v-model.number="filterBy.fromPrice" placeholder="From"/>
        
            <input class="form-control price-range" type="number" max="200" min="20" step="10"   
            @input="setFilter" 
            v-model.number="filterBy.toPrice" placeholder="To"/>
            </div>
            <button v-if="!isSearch" type="button" class="btn btn-outline-secondary" @click="search">Search</button>
            <button v-if="isSearch" type="button" class="btn btn-outline-secondary" @click="reset">Reset</button>
        </form>
    </section>
    `,
    data() {
        return {
            filterBy: {
                byTitle: '',
                fromPrice: '',
                toPrice: Infinity,
            },
            isSearch: false
        }
    },
    methods: {
        setFilter() {
            if (this.filterBy.toPrice < 20) this.filterBy.toPrice = Infinity
        },
        search() {
            if (this.filterBy.toPrice === Infinity && !this.filterBy.fromPrice && !this.filterBy.byTitle) return
            this.$emit('set-filter', this.filterBy);
            this.isSearch = true
        },
        reset() {
            this.filterBy = {
                byTitle: '',
                fromPrice: '',
                toPrice: Infinity,
            }
            this.$emit('set-filter', null);
            this.isSearch = false
        }
    }
}