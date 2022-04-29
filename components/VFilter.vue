<template>
  <div class="filter">
    <div class="filter__main mr-2">
      <b-input-group class="mt-3 mb-3">
        <b-form-input
          class="w-100"
          v-model="filterValue"
          :placeholder="placeholder"
        ></b-form-input>
      </b-input-group>
      <b-spinner
        v-if="isRequestInProgress"
        class="mt-3 mb-3"
        variant="light"
      ></b-spinner>
      <p class="filter__info" v-if="isSearchEmpty">
        Nothing to show...type something in search panel!
      </p>
    </div>
    <div class="filter__icons">
      <b-icon
        :class="[isSortTypeList ? 'text-warning' : 'text-light', 'mr-2']"
        icon="card-list"
        font-scale="1.2"
        @click="() => handleSort('list')"
      ></b-icon>
      <b-icon
        :class="[!isSortTypeList ? 'text-warning' : 'text-light']"
        icon="bricks"
        font-scale="1.0"
        @click="() => handleSort('bricks')"
      ></b-icon>
    </div>
  </div>
</template>

<script>
import { mapState, mapActions } from 'vuex';
import lodash from 'lodash';

export default {
  name: 'VFilter',
  data() {
    return {
      placeholder: 'type musician name',
    };
  },
  computed: {
    ...mapState('filter', {
      searchValue: (state) => state.searchValue,
      sortType: (state) => state.sortType,
    }),
    ...mapState('ui', {
      isRequestInProgress: (state) => state.isRequestInProgress,
    }),
    filterValue: {
      get() {
        return this.searchValue;
      },
      set(value) {
        this.handleInputChange(value);
      },
    },
    isSortTypeList() {
      return this.sortType === 'list';
    },
    isSearchEmpty() {
      return (
        !this.filterValue &&
        this.filterValue !== null &&
        !this.isRequestInProgress
      );
    },
  },
  methods: {
    ...mapActions('filter', ['setSearchValue', 'setSortType']),
    handleInputChange: lodash.debounce(function (value) {
      this.setSearchValue(value);
    }, 500),
    handleSort(sortValue) {
      switch (sortValue) {
        case 'list':
          this.setSortType('list');

          break;

        case 'bricks':
          this.setSortType('bricks');

          break;
      }
    },
  },
};
</script>

<style lang="scss" scoped>
.filter {
  display: flex;
  align-items: center;
  .filter__icons {
    align-self: baseline;
    margin-top: 25px;
    svg {
      cursor: pointer;
    }
  }
  .filter__main {
    display: flex;
    flex-direction: column;
    align-items: center;
  }

  .filter__info {
    color: white;
  }
}
</style>
