import { Text, View, StyleSheet } from 'react-native';
import { subtrair, multiplicar } from './math.js'

export default function App() {
  return (
    <View>
      <Text>Subtração: {subtrair(5, 7)} </Text>
      <Text>Multiplicação: {multiplicar(6, 5)} </Text>
    </View>
  );
}

const styles = StyleSheet.create({

});
