import products from "../../API/products";

const state = {
    all: []
};

const getters = {};

const actions = {
    getAllProducts({commit}) {
        products.getProducts(products => {
            commit('setProducts', products)
        })
    },

    // eslint-disable-next-line no-unused-vars
    buyProduct({state,commit}, product) {
        if (product.inventory > 0) {
            commit('decrementProductInventory', { id: product.id })
        } else {
            // eslint-disable-next-line no-console
            alert ('empty cell');
        }
    },

    // eslint-disable-next-line no-unused-vars
    updateProduct({state,commit}, product) {
        commit('modifyProductInventory', { id: product.id })
    }
};

const mutations = {
    setProducts (state, products) {
        state.all = products
    },

    decrementProductInventory (state, { id }) {
        const product = state.all.find(product => product.id === id);
        product.inventory--

    },

    modifyProductInventory (state, { id }) {
        const product = state.all.find(product => product.id === id);
        if(product.inventory < product.maxInventory) {
            product.inventory++
        }
        else {
            // eslint-disable-next-line no-console
            alert('maxInventory reached')
        }
    },


};

export default {
    namespaced: true,
    state,
    getters,
    actions,
    mutations
}