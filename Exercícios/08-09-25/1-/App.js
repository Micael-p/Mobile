import { Text, View } from 'react-native';
import { Card } from 'react-native-paper';
import styles from './style.js'

export default function App() {
  return (
    <View style={styles.container}>
      <Text style={styles.nome}> Nome: Micael Pessoa</Text>
      <Text style={styles.idade}> Idade: 21</Text> 
    </View>
  );
}
