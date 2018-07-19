import {SAVE_USERINFO} from './mutation-types'
export default {
  [SAVE_USERINFO] (state, userInfo) {
    state.userInfo = userInfo
  }
}
