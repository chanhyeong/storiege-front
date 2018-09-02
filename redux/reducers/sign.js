import AT from '../actions/actionTypes'

const initialState = {
  isLogin: false,
  id: '',
  email: '',
  nickname: ''
}

// const userReducer = (state = initialState, action) => {
//   switch (action.type) {
//     case AT.SIGN_IN_SUCCESS: {
//       const { token, user } = action.userInfo

//     }
//   }
// }