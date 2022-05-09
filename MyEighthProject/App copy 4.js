import React, {useState} from
'react';
import { StyleSheet, Text, View, TouchableOpacity } from
'react-native';

export default function App() {
 
  let openimagePickerAsync= async()=> {
    let permissionResult = await ImagePicker.requestCameraRollPermissionsAsync();
    if (permissionResult.granted === false){
    alert ("Permisison is required!");
    return;
  }
    let pickerResult = await ImagePicker.launchImageLibraryAsync();
    console.log(pickerResult);
}
    // end of the code

  return (
  <View style={styles.container}>
  <Image source={{uri:
  'https://raw.githubusercontent.com/AbdunabiRamadan/CIS340/master/images/logo.png'}}
  style={styles.log0} />

  <Text style={styles.insts}>
  Press the button below to select an image on your phone!
  </Text>
  <TouchableOpacity style={styles.button} onPress={() => alert ('You have not selected an image yet')}>
  <Text style={styles.buttonText}>Pick Image</Text>
  </TouchableOpacity>
  </View>
  );

  }

const styles = StyleSheet.create({
container: {
flex: 1,
justifyContent: 'center',
paddingHorizontal:20,
backgroundColor: "#FFFFE0",
},
button: {
alignItens: "center",
backgroundcolor:"#778899",
padding: 10
  },

});
