export default {
    template: `
    <section class="home-page">
      <h1><h1 class="store-title">Books</h1></h1>
        
        <button class="enter-site btn" @click="enterSite">ENTER</button>
    <h1 class="home-title-upside">
        BOOKS
    </h1>
    
    </section>

    `,
    methods: {
        enterSite() {
            this.$router.push('./main')
        }
    }
};