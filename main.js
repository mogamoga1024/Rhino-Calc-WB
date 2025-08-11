
let combo = 0;

const app = {
    data() {
        return {
            maxPP: 8,
            remainingPP: 8,
            damage: 0,
            log: "",
            useSECarbuncle: false,
            useSEP: false,
        }
    },
    created() {
        // noop
    },
    computed: {
        ppMeter() {
            return `${this.remainingPP} / ${this.maxPP}`;
        },
        damageText() {
            if (this.useSECarbuncle) {
                return `${this.damage} or ${this.damage + 1}`;
            }
            else {
                return `${this.damage}`;
            }
        }
    },
    methods: {
        onClickClear() {
            this.onClickMaxPP(this.maxPP);
        },
        onClickMaxPP(pp) {
            this.maxPP = pp;
            this.remainingPP = this.maxPP;
            combo = 0;
            this.damage = 0;
            this.log = "";
            this.useSECarbuncle = false;
            this.useSEP = false;
        },
        onClickCard(card) {
            combo += 1;
            if (this.log === "") {
                this.log += card;
            }
            else {
                this.log += ` ${card}`;
            }

            if (card === "超🐿️") {
                this.remainingPP += 1;
                this.useSECarbuncle = true;
                this.useSEP = true;
            }
            else if (card === "🪳") {
                this.remainingPP -= 3;
                this.damage += combo;
            }
            else if (card === "超🪳") {
                this.remainingPP -= 3;
                this.damage += combo + 3;
                this.useSEP = true;
            }
            else {
                this.remainingPP -= card;
            }
        }
    },
};

Vue.createApp(app).mount("#app");
