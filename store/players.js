import _ from 'lodash';

export const state = () => ({
    players: [],
    teams: [],
    teamColors: [
        'red',
        'blue',
        'green',
        'yellow',
    ],
});

export const mutations = {
    addTeam (state, team) {
        team.color = state.teamColors.shift();
        state.teams.push(team);
    },
    removeTeam (state, id) {
        const index = _.findIndex(state.teams, { id });

        state.teamColors.push(state.teams[index].color);
        state.teams.splice(index, 1);
    },
    modifyTeam (state, { id, name }) {
        _.find(state.teams, { id }).name = name;
    },
    clearTeams (state) {
        state.teams = [];
    },
    addPlayer (state, player) {
        state.players.push(player);
    },
    removePlayer (state, id) {
        const index = _.findIndex(state.players, { id });

        state.players.splice(index, 1);
    },
    modifyPlayer (state, { id, name }) {
        const index = _.findIndex(state.players, { id });

        state.players[index].name = name;
    },
    modifyPlayerTeam (state, { index, team }) {
        state.players[index].team = team;
    },
};

export const getters = {
    getTeam: state => id => {
        return _.find(state.teams, { id });
    },
    getTeamMate: state => id => {
        return _.filter(state.players, player => {
            return player.team.id === id;
        });
    },
    hasTeam2MorePlayers (state) {
        let validate = true;

        _.each(state.teams, team => {
            const playersCount = _.filter(state.players, player => {
                return player.team.id === team.id;
            }).length;

            if (playersCount < 2) {
                validate = false;
            }
        });

        return validate;
    },
    isNotDupPlayerName (state) {
        const playerNames = _.chain(state.players)
            .map('name')
            .value();

        return _.uniq(playerNames).length === state.players.length;
    },
    isNotEmptyPlayerName (state) {
        let validate = true;

        _.each(state.players, player => {
            if (player.name.trim().length === 0) {
                validate = false;
            }
        });

        return validate;
    },
};

export const actions = {

};
