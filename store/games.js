import _ from 'lodash';

export const state = () => ({
    current: 0,
    turn: 1,
    cards: [],
    castigates: [],
    endings: [],
    players: [],
    logs: [],
});

export const mutations = {
    initGames (state, players) {
        state.current = 0;
        state.turn = 1;
        state.players = [];
        state.logs = [];

        _.each(players, player => {
            player.card = 1;
            player.status = 0;
            player.hold = 0;
            player.isOver = false;

            state.players.push(player);
            state.logs.push([]);
        });
    },
    setCardData (state, { general, castigate, ending }) {
        state.cards = general;
        state.castigates = castigate;
        state.endings = ending;
    },
    setGeneralCard (state, cardId) {
        const card = _.cloneDeep(_.find(state.cards, { id: cardId }));
        card.logId = `${card.id}-${new Date().getTime()}`;

        state.players[state.current].card = card.id;
        state.logs[state.current].push(card);
    },
    setPlayerHold (state, cardId) {
        const card = _.cloneDeep(_.find(state.cards, { id: state.players[state.current].card }));
        card.logId = `${card.id}-${new Date().getTime()}`;

        if (state.players[state.current].hold === 0) {
            state.players[state.current].hold = Math.abs(cardId + 10) - 1;
        } else {
            state.players[state.current].hold--;
        }

        state.logs[state.current].push(card);
    },
    setCastigateCard (state, cardId) {
        const card = _.cloneDeep(_.find(state.castigates, { id: cardId }));
        card.logId = `${cardId}-${new Date().getTime()}`;

        state.players[state.current].status = cardId;
        state.logs[state.current].push(card);
    },
    setEndingCard (state, cardId) {
        const card = _.cloneDeep(_.find(state.endings, { id: cardId }));
        card.logId = `${cardId}-${new Date().getTime()}`;

        state.players[state.current].status = cardId;

        if (!card.isGameSet) {
            state.players[state.current].isOver = true;
        }

        state.logs[state.current].push(card);
    },
    setNextTurn (state, insertEmptyLog = false) {
        if (insertEmptyLog) {
            state.logs[state.current].push({
                numberType: 'empty',

            });
        }

        if (state.players.length === state.current + 1) {
            state.current = 0;
            state.turn++;
        } else {
            state.current++;
        }
    },
};

export const getters = {
    getCard: state => id => {
        if (id > 0) {
            return _.find(state.cards, { id });
        } else if (parseInt(id / 10, 10) === -1) {
            return {
                id,
                numberType: '대기',
                title: `대기 ${Math.abs(id + 10)}회`,
            };
        } else if (parseInt(id / 10, 10) === -2) {
            return _.find(state.endings, { id });
        } else if (id < 0) {
            return _.find(state.castigates, { id });
        }
    },
    getSpecificPlayer: state => id => {
        return _.find(state.players, { id });
    },
    getCurrentPlayer (state) {
        return state.players[state.current];
    },
};

export const actions = {
    cardSelects ({ state, commit }, cardId) {
        if (cardId > 0) {
            commit('setGeneralCard', cardId);
        } else if (parseInt(cardId / 10, 10) === -1) {
            commit('setPlayerHold', cardId);
        } else if (parseInt(cardId / 10, 10) === -2) {
            commit('setEndingCard', cardId);
        } else if (cardId < 0) {
            commit('setCastigateCard', cardId);
        } else if (cardId === 0) {
            state.players[state.current].status = 0;
            commit('setGeneralCard', state.players[state.current].card);
        }

        commit('setNextTurn');
    },
};
