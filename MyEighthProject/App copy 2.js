import React, {useState} from
'react';
import { StyleSheet, Text, View, TouchableOpacity } from
'react-native';

export default class myApp extends Component {

  constructor (props) {
    super(props);
    this.state= {count: 0};
  }
  onTap = () => {
    this.setState({
      count: this.state.count +1
    });
  }
render() {
return (
<View style={styles.container}>
<View style={styles.counterText}>
<Text>Tap counter: {count} </Text>
</View>
<TouchableOpacity style={styles.button} onPress={onTap} >
<Text>Touch Me</Text>
</TouchableOpacity>
</View>
);
}
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
