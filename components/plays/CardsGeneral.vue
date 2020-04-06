<template>
    <section class="card box-shadows">
        <p class="card__number box-shadows">
            &lt;{{ getCard.numberType }}. {{ getCard.number }}&gt;
        </p>
        <p class="card__rank">
            <template
                v-if="getCard.rank"
            >
                -{{ getCard.rank }}-
            </template>
            <template
                v-else
            >
                -품계없음-
            </template>
        </p>
        <h1
            class="card__title"
            v-html="getCard.title.replace('(', '<br />(')"
        />
        <div class="card__post">
            <template
                v-if="getCard.postList.length > 0"
            >
                <p
                    v-for="post in getCard.postList"
                    :key="post"
                    class="card__post__item"
                >
                    {{ post }}
                </p>
            </template>
            <template
                v-else
            >
                <p class="card__post__item">
                    -
                </p>
            </template>
        </div>
        <p
            class="card__special box-shadows"
            :class="{ 'card__special--none': !getCard.special }"
        >
            <template v-if="getCard.special">
                {{ getCard.special }}
            </template>
            <template v-else>
                &lt;특수 기능 없음&gt;
            </template>
        </p>
    </section>
</template>
<script>
    export default {
        name: 'CardGeneral',
        props: {
            cardInfo: {
                type: Object,
                required: true,
            },
        },
        computed: {
            getCard () {
                const card = this.cardInfo;

                if (card.post) {
                    card.postList = card.post.split(', ');
                } else {
                    card.postList = [];
                }

                return card;
            },
        },
    };
</script>
<style lang="scss" scoped>
    .card {
        display: inline-block;
        width: 180px;
        height: 290px;
        padding: 0.5em;
        background: $darkMain;
        border: 1px solid $darkBorder;
        border-radius: 5px;
    }

    .card__number {
        margin-bottom: 0.8em;
        background-color: rgba(255, 255, 255, 0.5);
        border-radius: 2px;
        text-align: center;
        color: #000;
        font-size: 1em;
    }

    .card__rank {
        text-align: center;
        margin-bottom: 0.25em;
    }

    .card__title {
        margin-bottom: 1em;
        font-family: 'SangSangRock', sans-serif;
        font-size: 1.4em;
        line-height: 1.2em;
        text-align: center;
    }

    .card__post {
        max-height: 3.25em;
        margin-bottom: 1em;
        padding: 0.25em;
        overflow: scroll;
        border: 1px solid $darkBorder;
    }

    .card__post__item {
        text-align: center;
        color: $fontColorSub;
        font-size: 0.8em;
    }

    .card__special {
        display: flex;
        flex: 1 0 auto;
        max-height: 64px;
        overflow: scroll;
        padding: 0.5em;
        border-radius: 2px;
        background-color: rgba(255, 255, 255, 0.5);
        line-height: 1.4em;
        color: #000;
        font-size: 0.8em;
    }

    .card__special--none {
        height: 64px;
        align-items: center;
        justify-content: center;
    }
</style>
