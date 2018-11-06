import { bookService } from "../services/book.service.js";
import reviewPage from "../pages/review-page.cmp.js";
import eventBus, { SHOW_USER_MSG } from "../event-bus.js";

export default {
    props: ["currBook"],
    template: `
       <form class="review-container">
        <h2>Re.Vue</h2>
<input class="review-user-name" type="text" placeholder="Name..." v-model="review.name">
<input type="text" class="date-pick" v-model="review.year" placeholder="Year Of read"/>
      <div class="rating" >
    <label for="star1"> </label><input type="radio" id="star1" name="rating" value="1" v-model="review.rating" />
    <label for="star2" ></label><input type="radio" id="star2" name="rating" value="2" v-model="review.rating" />
    <label for="star3" > </label><input type="radio" id="star3" name="rating" value="3" checked="checked" v-model="review.rating">
    <label for="star4" > </label><input type="radio" id="star4" name="rating" value="4" v-model="review.rating" />
    <label for="star5" > </label><input type="radio" id="star5" name="rating" value="5"  v-model="review.rating"/>
    </div>
<textarea class="user-text" rows="4" cols="50" v-model="review.text"></textarea>
<button class="add-review" @click.prevent="addReview">Send</button>

  <div class="read-review-container">
    <review-page :review="review" deleteReview="deleteReview"></review-page>
  </div>

       </form>
    `,
    data() {
        return {
            review: {
                name: "",
                rating: "",
                text: "",
                year: ""
            }
        };
    },
    methods: {
        addReview() {
            let review = this.review;
            if (review.name && review.text) {
                if (!review.name) review.name = "Books Reader";
                bookService.addFeedback(this.currBook.id, review).then(book => {
                    eventBus.$emit(SHOW_USER_MSG, {
                        type: "msg-sent",
                        txt: `Re/Vue Submitted!`
                    });
                });
                setTimeout(() => {
                    this.$router.push("/main");
                }, 1000);
            } else {
                eventBus.$emit(SHOW_USER_MSG, {
                    type: "msg-failed",
                    txt: "FILL IT ALL"
                });
            }
        }
    },

    components: { reviewPage },
    created() {}
};