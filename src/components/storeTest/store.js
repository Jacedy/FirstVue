import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

var state = {
    count: 10
}

const mutations = {
    inc(state) {
        state.count++
    },
    dec(state) {
        state.count--;
    },
    reset(state) {
        state.count = 10
    },
    custCount(state, n) {
        state.count = n
    }
}

const actions = {
    inc: ({
        commit
    }) => {
        commit('inc')
    },
    dec: ({
        commit
    }) => {
        commit('dec')
    },
    reset: ({
        commit
    }) => {
        commit('reset')
    },
    clickayca: ({
        commit
    }) => { // 异步 1秒后加一
        new Promise(res => {
            setTimeout(function () {
                commit('inc')
            }, 1000)
        })
    }
}

const getters = {
    count(state) {
        return state.count
    }
}

export default new Vuex.Store({
    actions,
    mutations,
    state,
    getters
})