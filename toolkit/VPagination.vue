<template>
  <div v-if="rows" class="overflow-auto">
    <b-pagination
      v-model="selectedPage"
      :total-rows="rows"
      :per-page="perPage"
      aria-controls="my-table"
    ></b-pagination>
  </div>
</template>

<script>
import { mapState, mapActions } from 'vuex';

export default {
  name: 'VPagination',
  computed: {
    ...mapState('filter', {
      filterItems: (state) => state.filterItems,
      perPage: (state) => state.perPage,
      currentPage: (state) => state.currentPage,
    }),
    selectedPage: {
      get() {
        return this.currentPage;
      },
      set(currentPage) {
        this.setCurrentPage(currentPage);
        window.scrollTo(0, 0);
      },
    },
    rows() {
      return this?.filterItems?.length > 0 ? this?.filterItems?.length : 0;
    },
  },
  methods: {
    ...mapActions('filter', ['setCurrentPage']),
  },
};
</script>

<style lang="scss" scoped>
div {
  margin-top: 10px;
  align-self: center;
}
</style>
