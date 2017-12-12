import React, { Component } from 'react';
import {
  Text,
  StyleSheet,
  View
  
} from 'react-native';


const Header = (props) => {
  const { textStyles, viewStyles } = styles;
  return (
  <View style={viewStyles}>
    <Text style={textStyles}>
      {props.headerText}
    </Text>
  </View>
 );
};  

  const styles = StyleSheet.create(
  {
    textStyles: {
      fontSize: 20
    },
    viewStyles: {
      backgroundColor: '#F8F8F8',
      justifyContent: 'center',
      alignItems: 'center',
      height: 60,
      paddingTop: 15,
      shadowColor: '#000000',
      shadowOffset: { width: 0, height: 2 },
      shadowOpacity: 0.5,
      elevation: 2,
      position: 'relative'
    }
  }
  
);

export { Header };