import _ from 'lodash';

export const state = () => ({
    current: 0,
    turn: 1,
    cards: [],
    castigate: [],
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

            state.players.push(player);
            state.logs.push([]);
        });
    },
    setCardData (state, { general, castigate }) {
        state.cards = general;
        state.castigate = castigate;
    },
    setCardSelect (state, cardId) {
        const card = _.cloneDeep(_.find(state.cards, { id: cardId }));
        card.logId = `${card.id}-${new Date().getTime()}`;

        state.players[state.current].card = card.id;
        state.logs[state.current].push(card);

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
        return _.find(state.cards, { id });
    },
    getSpecificPlayer: state => id => {
        return _.find(state.players, { id });
    },
    getCurrentPlayer (state) {
        return state.players[state.current];
    },
};

export const actions = {

};
