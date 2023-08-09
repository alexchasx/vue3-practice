<template>
  <form class="mb-5" @submit="sendForm" v-if="!formDone">
    <progress-bar :current="fieldDone" :max="info.length" />

    <div class="mb-3">
      <app-field
        v-for="(field, i) in info"
        :key="i"
        :value="field.value"
        :label="field.label"
        :valid="field.valid"
        @input="onUpdate(i, $event)"
      ></app-field>
    </div>

    <button class="btn btn-primary" :disabled="!formReady">Send Data</button>
  </form>

  <div v-else>
    <table class="table table-bordered">
      <tbody>
        <tr v-for="(field, i) in info" :key="i">
          <td>{{ field.label }}</td>
          <td>{{ field.value }}</td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script>
import AppField from './components/AppField.vue';
import ProgressBar from './components/ProgressBar.vue';

export default {
  components: { AppField, ProgressBar },

  data: () => ({
    info: [
      {
        label: 'Name',
        value: '',
        pattern: /^[a-zA-Z ]{2,30}$/,
      },
      {
        label: 'Phone',
        value: '',
        pattern: /^[0-9]{7,14}$/,
      },
      {
        label: 'Email',
        value: '',
        pattern: /.+/,
      },
    ],
    formDone: false,
  }),

  computed: {
    formReady() {
      return this.fieldDone >= this.info.length;
    },
    progressStyles() {
      const rel = this.fieldDone / this.info.length;
      return { width: rel * 100 + '%' };
    },
    fieldDone() {
      return this.info.filter((field) => field.valid).length;
    },
  },

  methods: {
    onUpdate(i, val) {
      const field = this.info[i];
      field.value = val.target.value.trim();
      field.valid = field.pattern.test(field.value);
    },
    sendForm() {
      if (this.formReady) {
        this.formDone = true;
      }
    },
  },

  created() {
    this.info.forEach((field) => {
      field.valid = false;
    });
  },
};
</script>
