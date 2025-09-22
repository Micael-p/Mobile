import { Text, View, StyleSheet, ScrollView } from 'react-native';

export default function App() {
  return (
  <View style={styles.container}>
    <ScrollView style={styles.containerScrollView}>
      <Text style={styles.texto}>
        Estou escrevendo qualquer coisa pra ver como que funciona essa coisa do scrollview mas aparentemente esta com algum erro que eu nao sei o que é, Ja que o expo snack nao me diz qual o problema e parece que nao tem nada haver com o scrollview, Aparentemente o erro tinha haver com o fato do codigo está sem estilo mesmo no começo do codigo ele puxar um estilo, Então ele estava tentando puxar um estilo inesistente mas enfim, Agora eu preciso que esse texto seja longo o suficiente para o scrollview funcionar e o problema é que eu estou ficando sem ideias do que escrever nesse texto pra que ele fique longo o suficiente pra isso, Ótimo agora parece que eu consegui fazer um texto bem longo pra ver como funciona o scrollview, Foi uma ótima ideia escrever as primeira coisas que vieram a mente 
      </Text>
    </ScrollView>
     
  </View>
 );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    backgroundColor: '#ecf0f1',
    padding: 8,
  },
containerScrollView:{
  backgroundColor: '#d9d9d9',
  marginHorizontal: 25,
},
texto: {
  fontSize: 26,
},
})
