import _ from 'lodash';
import React, { Component } from 'react';
import EmployeeForm from './EmployeeForm';
import Communications from 'react-native-communications';
import {connect} from 'react-redux';
import { employeeChange, employeeSave, employeeDelete } from '../actions'; 
import {Card, CardSection, Button, Confirm} from './common';

class EmployeeEdit extends Component{
  state = {
    modalShow: false
  } 
  componentWillMount(){
    _.each(this.props.employee, (value, prop) =>{
      this.props.employeeChange({prop, value});
    })
  }
  onButtonPress(){
    const {name, phone, shift} = this.props
    this.props.employeeSave({
      name, phone, shift, id: this.props.employee.uid 
    });
  }
  onTextPress(){
    const {phone, shift} = this.props;
    Communications.text(phone, `Your upcoming shift is on ${shift}`);
  }
  modalShow(){
    this.setState({
      modalShow: true
    })
  }
  onAccept(){
    this.props.employeeDelete(this.props.employee.uid)
  } 
  onReject(){
    this.setState({
      modalShow: false
    })
  } 

  render(){
    return (
      <Card>
       <EmployeeForm />
        <CardSection>
          <Button onPress={
            this.onButtonPress.bind(this)
          }>
            Save Changes
          </Button>
        </CardSection>
        <CardSection>
          <Button onPress={this.onTextPress.bind(this)}>
            Text Schedule !! 
          </Button>
        </CardSection>
        <CardSection>
          <Button onPress={this.modalShow.bind(this)}>
            Remove Staff
          </Button>
        </CardSection>
        <Confirm 
         visible={this.state.modalShow} 
         onAccept={this.onAccept.bind(this)}
         onReject={this.onReject.bind(this)}
        >
          Are you sure you want to delete this?
        </Confirm>
      </Card>
    );
  }
}

const mapStateToProps = state => {
  const {name, phone, shift} = state.employeeForm;
  return {name, phone, shift}
}

export default connect(mapStateToProps, {employeeChange, employeeSave, employeeDelete})(EmployeeEdit);
