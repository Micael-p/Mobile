import React from 'react';
import {Text, View, StyleSheet, TextInput} from 'react-native';
import {Button} from 'react-native-paper';

export default class App extends React.Component {
 state = {
  peso: 0,
  altura: 0,
  imc: 0,
  legenda: 'Indeterminado'
 };

  calcularIMC= () => {
    const resultado = this.state.peso / (this.state.altura.replace(',','.') * this.state.altura.replace(',','.'));
    this.setState({imc: resultado});
   
   if (resultado < 18){
    this.setState({
      legenda: 'Magreza'
    });
  } else if (resultado >= 18.5 && resultado < 25){
    this.setState({
      legenda: 'Normal'
    });
  } else if (resultado >= 25 && resultado < 30){
    this.setState({
      legenda: 'Sobrepeso'
    });
  } else if (resultado >= 30 && resultado < 40){
    this.setState({
      legenda: 'Obesidade'
    });
  } else if (resultado >= 40){
    this.setState({
      legenda: 'Obesidade grave'
    });
  }  
  }
  render(){
    return(
      <View style={styles.app}>
          <Text style={styles.title}>Seu IMC</Text>
       <View style={styles.resultado}>      
          <Text style={styles.imc}>{this.state.imc.toFixed(2)}</Text>
          <Text style={styles.diagnostico}>{this.state.legenda}</Text>
       </View>

       <View>
          <TextInput
            style={styles.peso}
            onChangeText={valor => {
              this.setState({peso: valor.replace(',','.')});
            }}
          />
          <TextInput
            style={styles.altura}
            onChangeText={valor => {
              this.setState({peso: valor.replace(',','.')});
            }}
          />
       </View>

       <Button mode='contained' onPress={this.calcularIMC}>
          calcular
       </Button>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  app: {
    justifyContent: 'center',
  },

  title: {
    textAlign: 'center',
    fontWeight: 700,
    marginTop: 15,
    fontSize: 18,
  },

  resultado: {
    width: 140,
    backgroundColor:'green',
    borderRadius: 10,
    alignItems:'center',
    padding: 8,
  },

  imc:{
    fontSize: 22,
    fontWeight: 'bold',
    color: '#fff',
  },

  diagnostico: {
    fontSize: 16,
    fontWeight: 500,
    color: '#fff',
  },

  peso: {
    borderColor: '#000',
    borderWidth: 1,
    padding: 9,
    margin: 10,
  },
  
  altura: {
    borderColor: '#000',
    borderWidth: 1,
    padding: 9,
    margin: 10,
  }
})
