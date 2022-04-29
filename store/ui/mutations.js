import { START_REQUEST, STOP_REQUEST } from '~/constants/uiConstants'

const uiMutations = {
  [START_REQUEST](state) {
    state.isRequestInProgress = true
  },
  [STOP_REQUEST](state) {
    state.isRequestInProgress = false
  },
}
export default uiMutations
