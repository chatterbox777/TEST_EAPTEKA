import { SET_ERRORS, DELETE_ERRORS } from '~/constants/errorConstants';

const errorsMutations = {
  [SET_ERRORS](state, { error }) {
    state.errors.push(error);
  },
  [DELETE_ERRORS](state) {
    Object.keys(state).forEach((key) => (state[key] = []));
  },
};
export default errorsMutations;
