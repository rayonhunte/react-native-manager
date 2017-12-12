const INIT_STATE = {
  email: '',
  password: '',
  user: null,
  error: '',
  loading: false
}
export default(state = INIT_STATE , action) => {
  switch (action.type) {
    case 'EMAIL_CHANGED':
      return {
        ...state,
        email: action.email
      }
    case 'PASSWORD_CHANGED':
      return {
        ...state,
        password: action.password
      }
    case 'LOGIN_USER_SUCCESS':
      return {
        ...state,
        ...INIT_STATE, 
        user: action.user,
      }
    case 'LOGIN_USER_FAIL':
      return {
        ...state,
        error: action.error,
        password: '',
        loading: false
      }
    case 'LOGIN_USER':
      return {
        ...state,
        error: '',
        loading: true
      }
    default:
      return state
  }
}