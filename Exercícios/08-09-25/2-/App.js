import { Text, View, TouchableOpacity, Button } from 'react-native';
import styles, { saudacao } from './style.js'

export default function App() {
  return (
    <View style={styles.container}>
      <TouchableOpacity style={styles.button}>
       <Text style={styles.buttonText}>Clique para saudação</Text>
      </TouchableOpacity> 
      <Text>{saudacao('Micael :D')}</Text>
    </View>
  );
}
