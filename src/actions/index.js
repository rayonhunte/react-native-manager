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

export const loginUser = ({email, password}) => {
  return (dispatch) => {
    firebase
      .auth()
      .signInWithEmailAndPassword(email, password)
      .then((user) => {
        //user valid
        console.log(user);
        dispatch(userLoginSuccess(user))
      })
      .catch(() => {
        // no such user
        firebase
          .auth()
          .createUserWithEmailAndPassword(email, password)
          .then(() => {
            //user created
          })
          .catch(() => {
            // create user error
          })
      });
  }
};