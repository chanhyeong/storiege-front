import AT from './actionTypes'

export const setVisibilityFilter = filter => ({
  type: 'SET_VISIBILITY_FILTER',
  filter
})

export default {
  signIn: (account) => {
    return {
      type: AT.SIGN_IN,
      account
    }
  },
  signUp: (userInfo) => {
    return {
      type: AT.SIGN_UP,
      userInfo
    }
  },
  logout: () => {
    return {
      type: AT.LOG_OUT
    }
  }
}