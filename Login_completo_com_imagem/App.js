import React, { useState } from 'react'
import { Text, View, TextInput, Image, Button } from 'react-native';
import styles from './Style';

export default function App() {
  const [ usuario, setUsuario ] = useState('')
  const [ senha, setSenha ] = useState('')
  const [ logado, setLogado ] = useState(false)
  
  function login() {
    if (usuario === 'Micael' && senha === '1234'){
      setLogado(true)
    } else {
      alert('Usuário ou senha incorretos!!')
    }
  }

if (!logado) {
  return (
    <View style={styles.container}>
      <Image style={styles.logo} source={{uri: 'https://repository-images.githubusercontent.com/78664391/f7e46780-6bf6-11eb-999f-8212c69d76bc'}} />
      
      <TextInput style={styles.input} placeholder='Usuario' value={usuario} onChangeText={setUsuario} />
      <TextInput style={styles.input} placeholder='Senha' value={senha} onChangeText={setSenha} secureTextEntry />
      <Button style={styles.botao} title='Fazer login' onPress={login} />
    </View>

  );
 }
 return (
  <View style={styles.container}>
    <Text>Logado com sucesso, {usuario} </Text> 
  </View>
 )
}
