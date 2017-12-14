// user create
import firebase from 'firebase';
import {Actions} from 'react-native-router-flux';


const employeeChange = ({prop, value}) => {
  return {
    type: 'EMPLOYEE_CHANGE',
    payload: {prop, value}
  }
}

const employeeCreate = ({name, phone, shift})=>{
  const {currentUser} = firebase.auth();
  return (dispatch)=>{
    firebase.database().ref(`/users/${currentUser.uid}/employees`).push({
      name, phone, shift
    }).then(()=>{
      // redirect to employee list page
      dispatch({type: 'EMPLOYEE_CREATE'})
      Actions.employeeList({type: 'reset'});
    }).catch((error)=>{
      console.log(error);
    })
}}


const employeesFetch = ()=>{
  return (dispatch) =>{
    //get current employees
    const {currentUser} = firebase.auth();
    firebase.database().ref(`/users/${currentUser.uid}/employees`).on('value', snapshot =>{
      dispatch({type: 'EMPLOYEES_FETCH_SUCCESS', payload: snapshot.val()})
    });
} 
}

export const employeeSave = ({name, phone, shift, id}) =>{
  const {currentUser} = firebase.auth();
  return (dispatch)=>{
    firebase.database().ref(`/users/${currentUser.uid}/employees/${id}`).set({
      name, phone, shift
    }).then(()=>{
      dispatch({type: 'EMPLOYEE_SAVE_SUCCESS'})
      Actions.employeeList({type: 'reset'});
    } )   
  }
  
}

export {employeeChange, employeeCreate, employeesFetch}