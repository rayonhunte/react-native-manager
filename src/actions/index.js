import firebase from 'firebase';

export const emailChanged = (email) => {
  return {type: 'EMAIL_CHANGED', email};
};

export const passwordChanged = (password) => {
  return {type: 'PASSWORD_CHANGED', password}
}

export const userLoginSuccess = (user) =>{
  return {
    type: 'LOGIN_USER_SUCCESS',
    user
  }
}

export const loginUserFail = (error) =>{
  return {
    type: 'LOGIN_USER_FAIL',
    error
  }
}

export const startLoginUser = () =>{
  return {
    type: 'LOGIN_USER',
  }
}


export const loginUser = ({email, password}) => {
  return (dispatch) => {
    dispatch(startLoginUser())
    firebase
      .auth()
      .signInWithEmailAndPassword(email, password)
      .then((user) => {
        //user valid
        dispatch(userLoginSuccess(user))
      })
      .catch((error) => {
        // no such user
        console.log(error)
        firebase
          .auth()
          .createUserWithEmailAndPassword(email, password)
          .then((user) => {
            //user created
            dispatch(userLoginSuccess(user))
          })
          .catch((error) => {
            // create user error
            console.log(error)
            dispatch(loginUserFail(error.message));
          })
      });
  }
};