
const app = {
    data() {
        return {
            maxPP: 8,
            remainingPP: 8,
            damage: 0,
            log: "",
        }
    },
    created() {
        // noop
    },
    computed: {
        ppMeter() {
            return `${this.remainingPP} / ${this.maxPP}`;
        }
    },
    methods: {
        onClickClear() {
            this.onClickMaxPP(this.maxPP);
        },
        onClickMaxPP(pp) {
            this.maxPP = pp;
            this.remainingPP = this.maxPP;
            this.damage = 0;
            this.log = "";
        },
        onClickCard(card) {
            // todo
        }
    },
};

Vue.createApp(app).mount("#app");
