import {
  SAVE_USERINFO
} from './mutation-types'
export default {
  saveUserInfo ({
    commit,
    state
  }, userInfo) {
    commit(SAVE_USERINFO, userInfo)
  }
}
