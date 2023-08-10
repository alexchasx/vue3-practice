<template>
  <div>In Cart: {{ cnt }}</div>
  <div>Total: {{ total }}</div>
</template>

<script>
import { mapGetters } from 'vuex';

export default {
  computed: {
    ...mapGetters(['price', 'cnt', 'orderIsPending', 'orderIsDone']),
    total() {
      return this.price * this.cnt;
    },
  },
};
</script>
