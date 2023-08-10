import { createStore } from 'vuex';

const ORDER_STATUS = {
  new: 0,
  pending: 1,
  done: 2,
};

const store = {
  state: {
    price: 1000,
    cnt: 1,
    orderStatus: 0,
  },

  getters: {
    price: (state) => state.price,
    cnt: (state) => state.cnt,
    total: (state) => state.price * state.cnt,
    orderIsNothing: (state) => state.orderStatus == ORDER_STATUS.new,
    orderIsPending: (state) => state.orderStatus == ORDER_STATUS.pending,
    orderIsDone: (state) => state.orderStatus == ORDER_STATUS.done,
  },

  mutations: {
    setCnt(state, val) {
      state.cnt = Math.max(1, val);
    },
    setOrderStatus(state, status) {
      state.orderStatus = status;
    },
  },

  actions: {
    decrease({ commit, state }) {
      commit('setCnt', state.cnt - 1);
    },
    increase({ commit, state }) {
      commit('setCnt', state.cnt + 1);
    },
    setCnt({ commit }, value) {
      const cnt = parseInt(value);
      commit('setCnt', isNaN(cnt) ? 1 : cnt);
    },
    send(store) {
      store.commit('setOrderStatus', 1);

      // request to server
      setTimeout(() => {
        store.commit('setOrderStatus', 2);
      }, 500);
    },
  },

  strict: process.env.NODE_ENV !== 'production',
};

export default createStore(store);
