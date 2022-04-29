import { START_REQUEST, STOP_REQUEST } from '~/constants/uiConstants'

const uiActions = {
  startAction: ({ commit }) => {
    debugger
    commit({ type: START_REQUEST })
  },
  stopAction: ({ commit }) => {
    debugger

    commit({ type: STOP_REQUEST })
  },
}

export default uiActions
