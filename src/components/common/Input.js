import React, { Component } from 'react';
import { TextInput, View, Text, StyleSheet } from 'react-native';


const Input = ({ label, value, onChangeText, placeholder, privateInput }) =>{  
  const {inputStyle, labelStyle, containerStyle} = styles;
  return (
    <View style={containerStyle}>
      <Text style={labelStyle}>{label}</Text>
      <TextInput
        autoCorrect={false}
        value={value}
        onChangeText={onChangeText} 
        style={inputStyle}
        placeholder={placeholder}
        secureTextEntry={privateInput}
      />
    </View>
  );
};
const styles = StyleSheet.create({
  inputStyle:{
    height:50,
    width:100,
    color: '#000',
    paddingRight:5,
    paddingLeft:5,
    fontSize:18,
    lineHeight:23,
    flex:2
  },
  labelStyle:{
    fontSize:18,
    paddingLeft:20,
    flex:1
  },
  containerStyle:{
    height: 40,
    flex:1,
    flexDirection: 'row',
    alignItems: 'center'
  }

})

export { Input };
