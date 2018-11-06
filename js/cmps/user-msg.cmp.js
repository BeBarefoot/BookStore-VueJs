import eventBus, { SHOW_USER_MSG } from '../event-bus.js';

export default {
    template: `
    <section v-if="msg" class="user-msg" :class="msg.type">
        <h5>
            <button @click="closeMsg">x</button>
            {{msg.txt}}
        </h5>
    </section>
    `,
    data() {
        return {
            msg: {
                txt: '',
                type: '',
            },
        }
    },
    created() {
        eventBus.$on(SHOW_USER_MSG, msg => {
            this.msg = msg;
            setTimeout(() => {
                this.msg = { txt: '', type: '' };
            }, 2000);
        })
    },
    methods: {
        closeMsg() {
            this.msg.type = '';
        }
    }
};