<template>
    <div class="name-input">
        <input
            v-model="name"
            type="text"
            aria-label="참가자 이름"
            placeholder="이름 입력"
            class="name-input__input"
            @change="$emit('input', name)"
        >
        <button
            class="name-input__remove"
            @click="$emit('remove')"
        >
            <font-awesome-icon icon="times" />
        </button>
    </div>
</template>
<script>
    export default {
        name: 'TeamPlayersNameInput',
        props: {
            value: {
                type: String,
                default: '',
            },
        },
        data () {
            return {
                name: this.value,
            };
        },
    };
</script>
<style lang="scss">
    .name-input {
        width: 100%;
        background: #fff;
        border-radius: 2px;
        border: 1px solid $darkSub;
    }

    .name-input__input {
        width: calc(100% - 2em);
        height: 2em;
        border: 0;
        font-size: 1em;
        text-align: center;
    }

    .name-input__remove {
        width: 2em;
        height: 2em;
        border: 0;
    }
</style>
