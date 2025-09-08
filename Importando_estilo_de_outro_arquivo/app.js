import { Text, View, TouchableOpacity } from 'react-native';
import styles from './style';

export default function App() {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>
       Importando estilo de outro arquivo
      </Text>
      <TouchableOpacity style={styles.button}>
       <Text style={styles.buttonText}>Clica ai</Text>
      </TouchableOpacity>
    </View>
  );
}
