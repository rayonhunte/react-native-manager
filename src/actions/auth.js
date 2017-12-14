import firebase from 'firebase';
import { Actions } from 'react-native-router-flux';


const emailChanged = (email) => {
  return {type: 'EMAIL_CHANGED', email};
};

const passwordChanged = (password) => {
  return {type: 'PASSWORD_CHANGED', password}
}

const userLoginSuccess = (user) =>{
  return {
    type: 'LOGIN_USER_SUCCESS',
    user
  }
}

const loginUserFail = (error) =>{
  return {
    type: 'LOGIN_USER_FAIL',
    error
  }
}

const startLoginUser = () =>{
  return {
    type: 'LOGIN_USER',
  }
}

const loginUser = ({email, password}) => {
  return (dispatch) => {
    dispatch(startLoginUser())
    firebase
      .auth()
      .signInWithEmailAndPassword(email, password)
      .then((user) => {
        //user valid
        dispatch(userLoginSuccess(user))
        // route user after login
        Actions.main();
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


export {emailChanged, passwordChanged, userLoginSuccess, loginUserFail, startLoginUser, loginUser}