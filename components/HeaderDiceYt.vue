<template>
    <div
        :class="{
            'yt--front': diceValue === 0,
            'yt--back': diceValue === 1,
        }"
        class="yt"
    >
        <font-awesome-icon
            v-for="item in 3"
            v-show="diceValue === 0"
            :key="item"
            class="yt__x"
            icon="times"
        />
    </div>
</template>
<script>
    export default {
        name: 'HeaderDiceYt',
        props: {
            diceValue: {
                type: Number,
                default: 0,
            },
        },
    };
</script>
<style lang="scss" scoped>
    .yt {
        display: inline-block;
        position: relative;
        width: 18px;
        height: 84px;
        overflow: hidden;
        color: #3b2900;
        text-align: center;
        line-height: 1.4em;
        font-size: 14px;
    }

    .yt--front {
        background: linear-gradient(90deg, rgba(124,86,0,1) 0%, rgba(255,177,0,1) 50%, rgba(124,86,0,1) 100%);
        border-radius: 8px 8px 2px 2px;

        &:after {
            content: '';
            display: block;
            position: absolute;
            width: 18px;
            height: 10px;
            bottom: 0;
            background: #5c4000;
            border-radius: 10px 10px 0 0;
        }
    }

    .yt--back {
        background: #7C5600;
        border-radius: 2px 2px 8px 8px;

        &:after {
            content: '';
            display: block;
            position: absolute;
            width: 16px;
            height: 10px;
            bottom: 1px;
            left: 1px;
            background: #5c4000;
            border-radius: 2px 2px 10px 10px;
        }
    }

    .yt__x {
        top: 8px;
        position: relative;
    }
</style>
