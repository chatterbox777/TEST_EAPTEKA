<template>
  <b-alert
    v-model="showDismissibleAlert"
    variant="danger"
    :show="errors.length"
    dismissible
    @dismissed="handleDismiss"
  >
    Something go wrong! please try again...
  </b-alert>
</template>

<script>
import { mapState, mapActions } from 'vuex';

export default {
  name: 'VAlertHeader',
  data() {
    return {
      showDismissibleAlert: false,
    };
  },
  computed: {
    ...mapState('errors', {
      errors: (state) => state.errors,
    }),
  },
  watch: {
    errors() {
      if (this.errors.length > 0) {
        this.showDismissibleAlert = true;
      } else {
        this.showDismissibleAlert = false;
      }
    },
  },
  methods: {
    ...mapActions('errors', ['deleteErrors']),
    handleDismiss() {
      this.deleteErrors();
    },
  },
};
</script>

<style></style>
