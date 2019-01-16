import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

const store = new Vuex.Store({
    state: {
        count: 10
    },
    mutations: {
        setCount(state, newCount) {
            state.count = newCount
        }
    }
})

export default store