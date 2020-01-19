import Vue from 'vue'
import Vuex from 'vuex'
// eslint-disable-next-line no-unused-vars
import store from '../store'
import products from './modules/products'
import coins from './modules/money'

Vue.use(Vuex);

const debug = process.env.NODE_ENV !== 'production';

export default new Vuex.Store({
    modules: {
        products,
        coins
    },
    strict: debug,
 //   plugins: debug
})