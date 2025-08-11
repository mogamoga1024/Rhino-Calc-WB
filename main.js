
const app = {
    data() {
        return {
            maxPP: 8,
        }
    },
    created() {
        // noop
    },
    computed: {
        // noop
    },
    methods: {
        onClickMaxPP(pp) {
            this.maxPP = pp;
        }
    },
};

Vue.createApp(app).mount("#app");
