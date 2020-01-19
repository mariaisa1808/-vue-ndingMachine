import coins from "../../API/products";

const state = {
    allCoins: []
};

const getters = {};

const actions = {
    getAllCoins({commit}) {
        coins.getMoney(coins => {
            commit('setCoins', coins)
        })
    },

};

const mutations = {
    setCoins (state, coins) {
        state.allCoins = coins;
    },

};

export default {
    namespaced: true,
    state,
    getters,
    actions,
    mutations
}