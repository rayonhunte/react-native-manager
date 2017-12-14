const INIT_STATE = {
  name: '',
  phone: '',
  shift: ''
}

export default(state= INIT_STATE, action) =>{
  switch (action.type){
      case 'EMPLOYEE_CHANGE':
        return {
          ...state,
          [action.payload.prop]: action.payload.value 
        }
      case 'EMPLOYEE_CREATE':
        return {
          ...state,
          INIT_STATE
        }
      case 'EMPLOYEE_SAVE_SUCCESS':
        return {
          ...state,
          INIT_STATE
        }
    default:
      return state
  }
}