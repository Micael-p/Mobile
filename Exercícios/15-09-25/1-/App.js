import { Text, View, TextInput, Button } from 'react-native';
import { Card } from 'react-native-paper';
import styles from './style.js'

export default function App() {
  return (
    <View style={styles.container}>
      <Text style={styles.login}>Login</Text>
      <View >
          <TextInput style ={styles.input1}
            onChangeText={valor=>{this.setState({peso:valor.replace('.',',')});}}/>
          <TextInput style ={styles.input1}
            onChangeText={valor=>{this.setState({peso:valor.replace('.',',')});}}/> 
        </View>
      <Text style ={styles.texto}> Me doa um estagio por favor!</Text>
      <Button title ="Login" onPress ={( )=> alert ("adhajhdjakdakl")} />    
    </View>
  );
}
