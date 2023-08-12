<script>
import { mapGetters, mapActions } from 'vuex';

export default {
  // data() {
  //   return {
  //     title: '',
  //     price: null,
  //     rest: null,
  //   };
  // },

  computed: {
    ...mapGetters('products', ['product', 'inCart']),
    ...mapGetters('cart', ['inCart']),
  },

  methods: {
    ...mapActions('cart', ['add', 'remove']),
  },
};
</script>

<template>
  <div>
    <h1>{{ product($route.params.id).title }}</h1>

    <hr />

    <div>Price: {{ product($route.params.id).price }}</div>
    <div>Rest: {{ product($route.params.id).rest }}</div>

    <hr />

    <button
      v-if="inCart($route.params.id)"
      @click="remove($route.params.id)"
      type="button"
      class="btn btn-danger"
    >
      Remove
    </button>

    <button
      v-else
      @click="add($route.params.id)"
      type="button"
      class="btn btn-success"
    >
      Add to cart
    </button>
  </div>
</template>
