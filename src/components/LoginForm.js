import React, { Component } from 'react';
import { View, Text } from 'react-native';
import { connect } from 'react-redux';
import {Card, CardSection, Input, Button, Spinner} from './common';
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

  renderError(){
    if(this.props.error){
      console.log("test")
      return (
        <View style={{backgroundColor: 'white'}}>
        <Text style={styles.errorTextStyle}>
          {this.props.error}
        </Text>
        </View>
      );
    }
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
        {this.renderError()}
        <CardSection>
         {
           this.props.loading ?  <Spinner/> : 
          <Button onPress={this.onPress.bind(this)}>
            Login
          </Button>
          }
        </CardSection>
      </Card>
    );
  }
};

const styles = {
  errorTextStyle:{
    color: 'red',
    fontSize: 20,
    alignSelf: 'center',
  }
}

const mapStateToProps = (state) => ({
  email: state.auth.email,
  password: state.auth.password,
  error: state.auth.error,
  loading: state.auth.loading
});

export default connect(mapStateToProps, {emailChanged, passwordChanged, loginUser})(LoginForm);


