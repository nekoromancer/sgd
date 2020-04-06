<template>
    <div class="dice box-shadows">
        <div class="dice__div result__wrapper box-shadows">
            {{ getResult }}
        </div>
        <div class="dice__div yt__wrapper">
            <header-dice-yt
                v-for="(yt, index) in 4"
                :key="yt"
                class="dice__yt"
                :dice-value="getDiceValues[index]"
            />
        </div>
        <div class="dice__div button__wrapper">
            <button
                :class="{
                    'dice__roll--disabled': !diceRollButtonActive
                }"
                class="dice__roll"
                :disabled="!diceRollButtonActive"
                @click="rollDice"
            >
                굴림
            </button>
        </div>
    </div>
</template>
<script>
    import _ from 'lodash';
    import HeaderDiceYt from '~/components/HeaderDiceYt';

    export default {
        name: 'HeaderDice',
        components: {
            HeaderDiceYt,
        },
        data () {
            return {
                diceValues: [0, 0, 0, 0],
                diceRollButtonActive: true,
                result: '',
            };
        },
        computed: {
            getDiceValues () {
                return this.diceValues;
            },
            getResult () {
                return this.result;
            },
        },
        methods: {
            initDice () {
                this.diceValues = [0, 0, 0, 0];
            },
            rollDice () {
                this.initDice();

                const delay = 75;
                let standBy = 0;

                this.toggleDiceRollButtonActivation(false);

                _.each(this.diceValues, (value, index) => {
                    const rollingTimes = _.random(1, 8);
                    let i;

                    for (i = 0; i < rollingTimes; i++) {
                        setTimeout(() => {
                            this.diceValues.splice(index, 1, this.diceValues[index] === 0 ? 1 : 0);
                        }, delay * (i + 1));
                    }

                    standBy = Math.max(standBy, delay * (i + 1));
                });

                setTimeout(() => {
                    this.calcResult(_.sum(this.diceValues));
                    this.toggleDiceRollButtonActivation(true);
                }, standBy + delay);
            },
            toggleDiceRollButtonActivation (to) {
                if (typeof to === 'boolean') {
                    this.diceRollButtonActive = to;
                } else {
                    this.diceRollButtonActive = !this.diceRollButtonActive;
                }
            },
            calcResult (value) {
                this.result = ['모', '도', '개', '걸', '윷'][value];
            },
        },
    };
</script>
<style lang="scss" scoped>
    .dice {
        width: 200px;
        padding: 1em;
        background: rgba($darkSub, 0.8);
        border-radius: 5px;
    }

    .dice__div {
        text-align: center;
    }

    .result__wrapper {
        display: flex;
        width: 100%;
        height: 2em;
        margin-bottom: 0.5em;
        border-radius: 5px;
        font-size: 2em;
        font-family: 'SangSangRock', sans-serif;
        background: rgba(255, 255, 255, 0.15);
        color: #fff;
        align-items: center;
        justify-content: center;
    }

    .yt__wrapper {
        margin-bottom: 1em;
    }

    .dice__yt {
        margin-right: 1em;

        &:last-child {
            margin-right: 0;
        }
    }

    .dice__roll {
        width: 2em;
        height: 2em;
        border: 0;
        background: #fff;
        border-radius: 50%;
        font-size: 1.5em;
        font-family: 'SangSangRock', sans-serif;
        cursor: pointer;
    }

    .dice__roll--disabled {
        background: rgba(255, 255, 255, 0.5);
        cursor: not-allowed;
    }
</style>
