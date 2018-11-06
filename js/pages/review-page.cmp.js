export default {
    props: ['review', 'ReviewIdx'],
    template: `
            <div class="book-review" >
                <!-- <h3>{{review}}</h3>
                <h5>Rating: {{bookReview.rating}}</h5>
                <h5>Read at: {{bookReview.readAt}}</h5>
                <p>"{{bookReview.content}}"</p>
                <button class="delete-review-btn" @click="deleteReview">x</button> -->
            </div>
    `,
    methods: {
        deleteReview() {
            this.$emit('deleteReview', this.ReviewIdx);
        }
    },

}