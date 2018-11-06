export default {
    props: ['txt'],
    template: `
<div class="book-long-text">
    <h2 class="book-desc" >Book Description:</h2>
    <p v-if="!openText">{{isLong}}</p>
        <p v-if="openText">{{txt}}</p>
 
    <button class="read-more" v-if="textIsLong" @click.stop="openText=!openText">{{readMore}}</button>
 
</div>
`,
    data() {
        return {
            textIsLong: false,
            openText: false
        }
    },
    computed: {
        isLong() {
            if (this.txt.length < 100) return this.txt
            this.textIsLong = true
            return `${this.txt.substring(0, 50)}...`

        },
        readMore() {
            return this.openText !== true ? 'Read more' : 'LESS!!'
        }
    },
}