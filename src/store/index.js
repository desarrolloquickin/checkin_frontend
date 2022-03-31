import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    reserva: {}
  },
  mutations: {
    setReserva (state, payload) {
      state.reserva = payload
    }
  },
  actions: {
  },
  modules: {
  },
  getters: {
    reserva: state => {
      return state.reserva;
    }
  }
})
