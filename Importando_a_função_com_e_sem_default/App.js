import { Text, View, StyleSheet } from 'react-native';
import saudacao, { toUpper, toLower } from './help.js'

export default function App() {
  return (
    <View>
      <Text>{saudacao('Micael :D')}</Text>
      <Text>{toUpper('caixa alta')}</Text>
      <Text>{toLower('CAIXA BAIXA')}</Text>
    </View>
  );
}
