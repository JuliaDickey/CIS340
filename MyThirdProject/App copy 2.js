import React from 'react';
import {Text, TextInput, View} from 'react-mative';


export default function CatApp(){
  let pic = {
    uri:'https://githubusercontent.com/AbdunabiRamadan/CIS340/master/images/dog2.png'
  };
  return(
    <View style={{
      flex:1,
      justifyContent: 'center',
      alignItems: 'center'
    }}>
      <Image source={pic}
      style={{width: 200, height:200}}
      />
      <Text>Hello, here is my dog!</Text>
  </View>
  );
}
