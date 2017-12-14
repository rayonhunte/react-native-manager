import React, { Children } from 'react';
import { Text, View, Modal} from 'react-native';
import { CardSection} from './CardSection';
import { Button } from './Button';


const Confirm = ({children, visible, onPress, onAccept, onReject }) =>{
  const {containerStyle, cardSectionStyle, textStyle} = styles;
  return (
  <Modal
    animationType="slide"
    onRequestClose={()=>{}}
    transparent={true}
    visible={visible}
  >
    <View style={containerStyle}>
      <CardSection style={cardSectionStyle}>
        <Text style={textStyle}>{children}</Text>
      </CardSection>
      <CardSection>
         <Button onPress={onAccept}>Yes</Button>
         <Button onPress={onReject}>No</Button>
      </CardSection>
    </View>
  </Modal>
 ); 
}

const styles = {
containerStyle: {
  backgroundColor:'rgba(0,0,0,0.75)',
  position: 'relative',
  flex: 1,
  justifyContent: 'center'
}, 
cardSectionStyle:{
  justifyContent:'center'
},
textStyle:{
  flex:1,
  fontSize: 18,
  lineHeight: 40,
  textAlign: 'center'
 } 
}

export { Confirm }; 