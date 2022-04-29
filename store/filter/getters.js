const filterGetters = {
  filterItemsByPage: (state) => {
    const currentPage = state.currentPage;
    const perPage = state.perPage;
    const filterItems = state.filterItems;
    let lastItemId;
    let firstItemId;

    if (currentPage !== 1) {
      lastItemId = currentPage * perPage;
      firstItemId = lastItemId - perPage;
    } else {
      lastItemId = currentPage * perPage;
      firstItemId = 0;
    }

    return filterItems.slice(firstItemId, lastItemId);
  },
};

export default filterGetters;
