import {
  SET_FILTER_ITEMS,
  SET_FILTER_SEARCH_VALUE,
  SET_FILTER_SORT_TYPE,
  SET_FILTER_ITEMS_CURRENT_PAGE,
} from '~/constants/filterConstants';

const filterActions = {
  async setSearchValue({ commit, dispatch }, searchValue) {
    dispatch('ui/startAction', null, { root: true });
    try {
      const {
        response: { hits },
      } = await this.$axios.$get('https://genius.p.rapidapi.com/search', {
        params: { q: searchValue },
        headers: {
          'X-RapidAPI-Host': 'genius.p.rapidapi.com',
          'X-RapidAPI-Key':
            '811269e0fdmsh705357e8c0b4357p1214fejsnfe3ddd63de80',
        },
      });
      const filterItems = hits.map((el) => el.result);
      commit({ type: SET_FILTER_ITEMS, filterItems });
      commit({ type: SET_FILTER_SEARCH_VALUE, searchValue });
    } catch (error) {
      dispatch('errors/setError', error, { root: true });
    } finally {
      dispatch('ui/stopAction', null, { root: true });
    }
  },
  setSortType({ commit }, sortType) {
    commit({ type: SET_FILTER_SORT_TYPE, sortType });
  },
  setCurrentPage({ commit }, currentPage) {
    commit({ type: SET_FILTER_ITEMS_CURRENT_PAGE, currentPage });
  },
};

export default filterActions;
