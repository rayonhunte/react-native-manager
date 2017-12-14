import React, { Component } from 'react';
import {connect} from 'react-redux';
import {Card, CardSection, Button} from './common';
import { employeeChange, employeeCreate, employeesFetch } from '../actions';
import EmployeeForm from './EmployeeForm';


class EmployeeCreate extends Component{
  onButtonPress(){
    const {name, phone, shift} = this.props;
    this.props.employeeCreate({
      name,
      phone,
      shift: shift || 'Monday'
    })
  }
  render(){
    return (
      <Card>
        <EmployeeForm {...this.props}/>
        <CardSection>
          <Button onPress={this.onButtonPress.bind(this)}>
            Create Employee
          </Button>
        </CardSection>
      </Card>
    );
  }
}


styles = {
  pickerTextStyle:{
    fontSize: 18,
  }
}

const mapPropsToState = (state) =>{
  const {name,phone,shift} = state.employeeForm
  return {name, phone, shift}
}
export default connect(mapPropsToState,{ employeeChange, employeeCreate, employeesFetch })(EmployeeCreate);