<template>
  <div class="form-group">
    <label :class="valid ? 'text-success' : 'text-danger'">
      {{ label }}
      <span
        v-if="activated"
        :class="valid ? 'fa fa-check-circle text-success' : 'fa fa-exclamation'"
      ></span>
    </label>

    <input type="text" class="form-control" :value="value" @input="onInput" />
  </div>
</template>

<script>
export default {
  props: {
    label: { type: String, required: true },
    value: { type: String, required: true },
    valid: { type: Boolean, required: true },
  },

  emit: {
    input: null,
  },

  data() {
    return {
      activated: this.value != '',
    };
  },

  methods: {
    onInput(e) {
      this.activated = true;
      this.$emit('updated', e.target.value);
    },
  },
};
</script>
