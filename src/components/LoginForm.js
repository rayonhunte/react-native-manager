import React, { Component } from 'react';
import { View, Text } from 'react-native';
import { connect } from 'react-redux';
import {Card, CardSection, Input, Button} from './common';
import {emailChanged, passwordChanged, loginUser} from '../actions';


class LoginForm extends Component{
  
  onEmailChange(text){
    this.props.emailChanged(text)
  }
  onPasswordChange(text){
    this.props.passwordChanged(text)
  }
  onPress(){
    const {email, password} = this.props;
    this.props.loginUser({email, password});
  }
  render(){
    return (
      <Card>
        <CardSection>  
          <Input 
            label="Email"
            placeholder="email@gmail.com"
            autocomplete={false}
            onChangeText={this.onEmailChange.bind(this)}
            value = {this.props.email}
          />
        </CardSection>
        <CardSection>
          <Input
            label="Password"
            placeholder="*******"
            privateInput = {true}
            onChangeText={this.onPasswordChange.bind(this)}
            value = {this.props.password}
            />
        </CardSection>
        <CardSection>
          <Button onPress={this.onPress.bind(this)}>
            Login
          </Button>
        </CardSection>
      </Card>
    );
  }
};


const mapStateToProps = (state) => ({
  email: state.auth.email,
  password: state.auth.password
});

export default connect(mapStateToProps, {emailChanged, passwordChanged, loginUser})(LoginForm);


