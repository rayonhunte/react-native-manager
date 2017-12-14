import React, { Component } from 'react';
import { View, Text, Picker } from 'react-native';
import { connect } from 'react-redux';
import { employeeChange } from '../actions'
import {CardSection, Input} from './common';

class EmployeeForm extends Component {
  render(){
    return (
      <View>
        <CardSection>
          <Input 
            label="Name"
            placeholder="John Doe"
            onChangeText={
              text => this.props.employeeChange({
                prop:'name', value: text
              })
            }
            value = {this.props.name}
          />
        </CardSection>
        <CardSection>
        <Input 
            label="Phone"
            placeholder="*********"
            onChangeText={
              text => this.props.employeeChange({
                prop:'phone', value:text
              })
            }
            value = {this.props.phone}
          />
        </CardSection>
        <CardSection style={{flexDirection: 'column'}}>
              <Text style={styles.pickerTextStyle}>Select Shift</Text>
              <Picker
               selectedValue={this.props.shift}
               onValueChange={(value) => this.props.employeeChange({prop:'shift', value: value})}
              >
              <Picker.Item label="Monday" value="mon" />
              <Picker.Item label="Tuesday" value="Tuesday" />
              <Picker.Item label="Wednesday" value="Wednesday" />
              <Picker.Item label="Thursday" value="Thursday" />
              <Picker.Item label="Friday" value="Friday" />
              <Picker.Item label="Saturday" value="Saturday" />
              <Picker.Item label="Sunday" value="Sunday" />
            </Picker>
        </CardSection>
      </View>
    );
  }
}

styles = {
  pickerTextStyle:{
    fontSize: 18,
  }
}

const mapStateToProps = state =>{
  const {name, phone, shift} = state.employeeForm;
  return {name, phone, shift}
}

export default connect(mapStateToProps, {employeeChange})(EmployeeForm);