import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

var state = {
    count: 10
}

// Mutation 必须是同步函数
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

// const moduleA = {
//     state: { ... },
//     mutations: { ... },
//     actions: { ... },
//     getters: { ... }
//   }
  
//   const moduleB = {
//     state: { ... },
//     mutations: { ... },
//     actions: { ... }
//   }
  
//   const store = new Vuex.Store({
//     modules: {
//       a: moduleA,
//       b: moduleB
//     }
//   })
  
//   store.state.a // -> moduleA 的状态
//   store.state.b // -> moduleB 的状态
