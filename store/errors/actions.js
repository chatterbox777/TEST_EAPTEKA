import { SET_ERRORS, DELETE_ERRORS } from '~/constants/errorConstants';

const errorsActions = {
  setError({ commit }, error) {
    commit({ type: SET_ERRORS, error });
  },
  deleteErrors({ commit }) {
    commit({ type: DELETE_ERRORS });
  },
};

export default errorsActions;
