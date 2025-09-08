import { Text, View, StyleSheet } from 'react-native';
import soma from './calc.js';

export default function App() {
  const resultado = soma (10, 5);
  return (
    <View>
    <Text>O resultado da soma é: {resultado}</Text>
    </View>
  );
}

const styles = StyleSheet.create({

});
