<template>
    <div class="team box-shadows">
        <div class="team__wrapper">
            <p
                :style="{ color: color }"
                class="team__label"
            >
                <font-awesome-icon icon="flag" />
            </p>
            <p>
                <input
                    v-model="teamName"
                    class="team__name"
                    type="text"
                    aria-label="붕당명"
                    placeholder="붕당 이름(최대 8자)"
                    maxlength="8"
                    tabindex="1"
                >
            </p>
            <button
                class="team__remove"
                tabindex="2"
                @click="$emit('remove')"
            >
                <font-awesome-icon icon="times" />
            </button>
        </div>
    </div>
</template>
<script>
    export default {
        name: 'Team',
        props: {
            teamId: {
                type: Number,
                required: true,
            },
            color: {
                type: String,
                required: true,
            },
        },
        computed: {
            teamName: {
                get () {
                    return this.$store.getters['players/getTeam'](this.teamId).name;
                },
                set (value) {
                    this.$store.commit('players/modifyTeam', {
                        id: this.teamId,
                        name: value,
                    });
                },
            },
        },
    };
</script>
<style lang="scss">
    .team {
        position: relative;
        width: 180px;
        height: 180px;
        background: rgba(255, 255, 255, 0.15);
        border-radius: 5px;
    }

    .team__wrapper {
        display: flex;
        width: 100%;
        height: 100%;
        flex: 1 1 auto;
        flex-direction: column;
        align-items: center;
        justify-content: center;
    }

    .team__label {
        margin-bottom: 0.5em;
    }

    .team__name {
        padding: 0.5em 0;
        border: 0;
        border-radius: 2px;
        text-align: center;
        font-size: 1em;
    }

    .team__remove {
        position: absolute;
        right: 0;
        top: 0;
        width: 20px;
        height: 20px;
        border: 0;
        border-radius: 10px;
        background: rgba(255, 255, 255, 0.5);
        font-size: 1em;
        cursor: pointer;
    }
</style>
