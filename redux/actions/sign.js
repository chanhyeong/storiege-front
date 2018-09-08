/**
 * 회원 관련 action
 */
import AT from './actionTypes'

export default {
  signIn: (payload) => {
    return {
      type: AT.SIGN_IN,
      payload
    }
  },
  signUp: (payload) => {
    return {
      type: AT.SIGN_UP,
      payload
    }
  },
  logout: () => {
    return {
      type: AT.LOG_OUT
    }
  }
}