<template>
    <div
        ref="logs"
        class="logs"
    >
        <div
            v-for="(_, index) in playerLength"
            :key="index"
            class="logs__line"
        >
            <div
                v-for="(log, turn) in getLogs[index]"
                :key="log.logId"
                class="logs__item"
            >
                <span class="logs__item__age">
                    {{ 20 + turn }}
                </span>
                <p>
                    &lt;{{ log.numberType }}. {{ log.number }}&gt;
                </p>
                <p
                    v-html="log.title.replace('(', '<br />(')"
                />
            </div>
        </div>
    </div>
</template>
<script>
    export default {
        name: 'Logs',
        data () {
            return {
                playerLength: this.$store.state.games.players.length,
            };
        },
        computed: {
            getLogs () {
                return this.$store.state.games.logs;
            },
        },
        watch: {
            getLogs () {
                this.$nextTick(() => {
                    this.$refs.logs.scrollTo(0, this.$refs.logs.scrollHeight);
                });
            },
        },
    };
</script>
<style lang="scss">
    .logs {
        max-height: calc(100% - 500px);
        text-align: center;
        overflow: scroll;
    }

    .logs__line {
        display: inline-block;
        width: 120px;
        margin-right: 15px;
        vertical-align: top;

        &:last-child {
            margin-right: 0;
        }

        &:first-child {
            .logs__item__age {
                display: flex;
            }
        }
    }

    .logs__item {
        position: relative;
        font-size: 14px;
        border-bottom: 1px solid $darkSub;
        padding: 0.5em 0;
        margin-bottom: 0.5em;
    }

    .logs__item__age {
        display: none;
        position: absolute;
        left: 0;
        top : 0;
        height: 100%;
        background: rgba(255, 255, 255, 0.25);
        padding: 0 3px;
        align-items: center;
        font-size: 12px;
    }
</style>
