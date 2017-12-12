export default (state ={email: '', password: '', user: {}}, action) =>{
  switch(action.type){
    case 'EMAIL_CHANGED':
      return {...state, email: action.email}
    case 'PASSWORD_CHANGED':
      return {...state, password: action.password}
    case 'LOGIN_USER_SUCCESS':
      return {...state, user: action.user}
    default: 
      return state
  }
}