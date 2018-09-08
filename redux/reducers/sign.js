/**
 * 로그인 관련 reducer
 */
import AT from '../actions/actionTypes'

const initialState = {
  isLogin: false,
  id: '',
  email: '',
  nickname: ''
}

export const signReducer = (state = initialState, action) => {
  switch (action.type) {
  case AT.SIGN_IN_SUCCESS: {
    const { token, user } = action.payload
    return {
      isLogged: true
    }
  }
  default: return state
  }
}