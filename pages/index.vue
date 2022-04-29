<template>
  <section class="root">
    <VAlertHeader />
    <VFilter />
    <VFilterItems />
  </section>
</template>

<script lang="ts">
import Vue from 'vue';
import VFilter from '../components/VFilter.vue';
import VFilterItems from '../components/VFilterItems.vue';
import VAlertHeader from '../toolkit/VAlertHeader.vue';

export default Vue.extend({
  name: 'IndexPage',
  components: {
    VFilter,
    VFilterItems,
    VAlertHeader,
  },
});
</script>

<style lang="scss">
body {
  background-color: rgb(22, 69, 120);
  .root {
    display: flex;
    flex-direction: column;
    align-items: center;
  }
}
</style>
