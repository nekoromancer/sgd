<template>
    <div class="cards">
        <cards-general
            :card-info="getUserCard"
            class="cards__current"
        />
        <div class="cards__selections selects">
            <label
                v-for="(item, i) in getSelectList"
                :key="item"
                class="selects__select"
                :class="[`selects__select--${i + 1}`, {
                    'selects__select--selected': item === cardSelect
                }]"
            >
                <input
                    v-model="cardSelect"
                    type="radio"
                    name="cardSelection"
                    :value="item"
                    class="selects__select__radio"
                >
            </label>
        </div>
        <div class="cards__confirms">
            <font-awesome-icon icon="angle-double-right" />
            <button
                class="cards__confirms__button"
                :class="{
                    'cards__confirms__button--hidden': cardSelect === null,
                }"
                :disabled="cardSelect === null"
                @click="submitCard"
            >
                결정
            </button>
        </div>
        <div
            v-if="cardSelect === null"
            class="cards__next cards__next--empty box-shadows"
        />
        <cards-general
            v-else
            :card-info="getSelectedCard"
            class="cards__next"
        />
    </div>
</template>
<script>
    import CardsGeneral from '~/components/plays/CardsGeneral';

    export default {
        name: 'Cards',
        components: {
            CardsGeneral,
        },
        props: {
            cardId: {
                type: Number,
                required: true,
            },
        },
        data () {
            return {
                cardSelect: null,
            };
        },
        computed: {
            getUserCard () {
                return this.$store.getters['games/getCard'](this.cardId);
            },
            getSelectedCard () {
                return this.$store.getters['games/getCard'](this.cardSelect);
            },
            getSelectList () {
                const card = this.getUserCard;

                return [card.do, card.ge, card.gl, card.yt, card.mo];
            },
        },
        methods: {
            submitCard () {
                this.$store.commit('games/setCardSelect', this.cardSelect);
                this.cardSelect = null;
            },
        },
    };
</script>
<style lang="scss">
    .cards__current {
        vertical-align: middle;
    }

    .selects {
        display: inline-flex;
        flex-direction: column;
        vertical-align: middle;
    }

    .selects__select {
        display: inline-block;
        position: relative;
        width: 50px;
        height: 50px;
        margin-bottom: 10px;
        cursor: pointer;

        &:last-child {
            margin-bottom: 0;
        }

        &:after {
            display: flex;
            justify-content: center;
            align-items: center;
            width: 40px;
            height: 40px;
            border: 1px solid #fff;
            border-radius: 50%;
            left: 50%;
            top: 50%;
            position: absolute;
            transform: translate(-50%, -50%);
        }
    }

    .selects__select--selected {
        &:after {
            background: #fff;
            color: $darkMain;
        }
    }

    .selects__select--1 {
        &:after {
            content: '壱'
        }
    }

    .selects__select--2 {
        &:after {
            content: '弐'
        }
    }

    .selects__select--3 {
        &:after {
            content: '参'
        }
    }

    .selects__select--4 {
        &:after {
            content: '四'
        }
    }

    .selects__select--5 {
        &:after {
            content: '伍'
        }
    }

    .selects__select__radio {
        -webkit-appearance: none;
        visibility: hidden;
    }

    .cards__confirms {
        display: inline-block;
        width: 200px;
        font-size: 5em;
        text-align: center;
        vertical-align: middle;
    }

    .cards__confirms__button {
        display: block;
        margin: auto;
        width: 3em;
        height: 3em;
        border: 5px double $darkSub;
        border-radius: 50%;
        font-size: 20px;
        font-family: 'SangSangRock', sans-serif;
    }

    .cards__confirms__button--hidden {
        opacity: 0;
        cursor: default;
    }

    .cards__next {
        display: inline-block;
        vertical-align: middle;
    }

    .cards__next--empty {
        width: 180px;
        height: 290px;
        background: $darkMain;
        border: 1px solid $darkBorder;
        border-radius: 5px;
    }
</style>
