<template>
    <div class="order box-shadows">
        <p class="order__team">
            <span :style="{ color: player.team.color }">
                <font-awesome-icon icon="flag" />
            </span>
            {{ player.team.name }}
        </p>
        <p class="order__player box-shadows">
            {{ player.name }}
        </p>
        <div class="order__order-change btn-wrapper">
            <button
                :class="{
                    'order__order-change__button--disabled': player.order === 1,
                }"
                class="order__order-change__prev order__order-change__button"
                @click="orderPrev(player.id)"
            >
                <font-awesome-icon
                    class="order__order-change__button__icon"
                    icon="caret-left"
                />
            </button>
            <span
                class="order__order-change__number"
            >
                {{ player.order }}
            </span>
            <button
                :class="{
                    'order__order-change__button--disabled': player.order === playerLength
                }"
                class="order__order-change__next order__order-change__button"
                @click="orderNext(player.id)"
            >
                <font-awesome-icon
                    class="order__order-change__button__icon"
                    icon="caret-right"
                />
            </button>
        </div>
    </div>
</template>
<script>
    export default {
        name: 'Order',
        props: {
            player: {
                type: Object,
                required: true,
            },
            playerLength: {
                type: Number,
                required: true,
            },
        },
        methods: {
            orderPrev (id) {
                this.$emit('prev', { id });
            },
            orderNext (id) {
                this.$emit('next', { id });
            },
        },
    };
</script>
<style lang="scss">
    .order {
        display: inline-block;
        width: 125px;
        padding: 1em;
        margin-right: 10px;
        background: rgba(255, 255, 255, 0.15);
        border-radius: 5px;
        text-align: center;
        font-size: 14px;

        &:last-child {
            margin-right: 0;
        }
    }

    .order__team {
        margin-bottom: 0.5em;
    }

    .order__player {
        background: rgba(255, 255, 255, 0.5);
        margin-bottom: 1em;
        border-radius: 2px;
        color: #000;
        font-size: 1em;
    }

    .order__order-change {
        .order__order-change__button {
            margin-right: 0;
        }
    }

    .order__order-change__button {
        font-size: 1.5em;
        width: 1.25em;
        height: 1.25em;
        border-radius: 50%;
        border: 0;
    }

    .order__order-change__number {
        display: inline-block;
        width: 1.25em;
        height: 1.25em;
        text-align: center;
        vertical-align: middle;
        font-size: 1.25em;
        line-height: 18px;
        margin: 0 0.25em;
    }

    .order__order-change__prev {
        .order__order-change__button__icon {
            left: -1px;
        }
    }

    .order__order-change__next {
        .order__order-change__button__icon {
            left: 2px;
        }
    }

    .order__order-change__button__icon {
        position: relative;
        top: 2px;
    }

    .order__order-change__button--disabled {
        opacity: 0.25;
        cursor: not-allowed;
    }
</style>
