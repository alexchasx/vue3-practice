<script>
export default {};
</script>

<template>
  <div>
    <h1>Cart</h1>

    <hr />

    <div>table</div>

    <!-- <router-link class="btn btn-success" to="/checkout">Order now</router-link> -->
    <router-link class="btn btn-success" :to="{ name: 'checkout' }"
      >Order now</router-link
    >
  </div>
</template>
