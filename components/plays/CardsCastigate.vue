<template>
    <div class="castigate box-shadows">
        <p class="castigate__number box-shadows">
            &lt;{{ cardInfo.numberType }}&gt;
        </p>
        <h1
            class="castigate__title"
            v-html="cardInfo.title.replace('(', '<br />(')"
        />
    </div>
</template>
<script>
    export default {
        name: 'CardCastigate',
        props: {
            cardInfo: {
                type: Object,
                required: true,
            },
        },
    };
</script>
<style lang="scss" scoped>
    .castigate {
        display: inline-block;
        width: 180px;
        height: 290px;
        padding: 0.5em;
        background: $darkMain;
        border: 1px solid $darkBorder;
        border-radius: 5px;
    }

    .castigate__number {
        margin-bottom: 0.8em;
        background-color: rgba(255, 255, 255, 0.5);
        border-radius: 2px;
        text-align: center;
        color: #000;
        font-size: 1em;
    }

    .castigate__title {
        margin-bottom: 1em;
        font-family: 'SangSangRock', sans-serif;
        font-size: 1.4em;
        line-height: 1.2em;
        text-align: center;
    }
</style>
