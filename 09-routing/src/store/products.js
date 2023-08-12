export default {
  namespaced: true,
  state: {
    items: stub(),
  },

  getters: {
    all: (state) => state.items,
    product: (state) => (id) => state.items.find((item) => item.id == id),
  },

  mutations: {},

  actions: {},
};

function stub() {
  return [
    { id: 100, title: 'Ipnone 200', price: 12000, rest: 10 },
    { id: 101, title: 'Samsung AAZ8', price: 22000, rest: 5 },
    { id: 103, title: 'Nokia 3310', price: 5000, rest: 2 },
    { id: 105, title: 'Huawei XZ', price: 15000, rest: 8 },
    { id: 106, title: 'Ipnone XX', price: 14000, rest: 8 },
    { id: 107, title: 'Samsung XZ', price: 22000, rest: 5 },
    { id: 108, title: 'Nokia 111', price: 7000, rest: 2 },
    { id: 110, title: 'Huawei XZ', price: 10000, rest: 5 },
    { id: 120, title: 'NoPhone', price: 30000, rest: 2 },
  ];
}
