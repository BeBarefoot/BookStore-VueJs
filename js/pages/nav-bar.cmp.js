import eventBus, { RETURN_BOOK } from "../event-bus.js";

export default {
    template: `
       <header class="main-header">
        <nav class="navbar navbar-light light-blue lighten-4">
            <a class="navbar-brand logo font-effect-canvas-print" @click="goOpenScreen" >BOOKS<span>A</span> PALOOOZA</a>
            <button class="navbar-toggler toggler-example" type="button" data-toggle="collapse" 
            data-target="#navbarSupportedContent1" aria-controls="navbarSupportedContent1" 
            aria-expanded="false" aria-label="Toggle navigation"><span class="navbar-toggler-icon"><i class="fa fa-bars fa-1x"></i></span></button>
            <div class="collapse navbar-collapse" id="navbarSupportedContent1">
                <ul class="navbar-nav mr-auto">
                    <li class="nav-item">
                        <a class="nav-link"  @click="goHome"> HOME</a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link" @click="about" >ABOUT</a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link" @click="addBook" >ADD BOOK</a>
                    </li>
                    <li class="nav-item">
                        </li>
                </ul>
            </div>
        </nav>
        <div class="navbar-web-container">
            <li class="nav-item">
                <a class="nav-link" href="#"  @click="goHome" >HOME </a>
            </li>

            <li class="nav-item">
                <a class="nav-link" href="#" @click="about" >ABOUT</a>
            </li>
            <li class="nav-item">
                <a class="nav-link" href="#" @click="addBook">ADD BOOK</a>
            </li>
          
            </ul>
        </div>
    </header>
`,
    methods: {
        goHome() {
            eventBus.$emit(RETURN_BOOK)
            this.$router.push("/main");
        },
        about() {
            this.$router.push("/about");
        },
        addBook() {
            this.$router.push("/add-book");
        },
        goOpenScreen() {
            this.$router.push("/");
        },
    }
}