import {
  SET_FILTER_ITEMS,
  SET_FILTER_SEARCH_VALUE,
  SET_FILTER_SORT_TYPE,
  SET_FILTER_ITEMS_CURRENT_PAGE,
} from '~/constants/filterConstants';

const filterMutations = {
  [SET_FILTER_SEARCH_VALUE](state, { searchValue }) {
    state.searchValue = searchValue;
  },
  [SET_FILTER_ITEMS](state, { filterItems }) {
    state.filterItems = filterItems;
  },
  [SET_FILTER_SORT_TYPE](state, { sortType }) {
    state.sortType = sortType;
  },
  [SET_FILTER_ITEMS_CURRENT_PAGE](state, { currentPage }) {
    state.currentPage = currentPage;
  },
};
export default filterMutations;
