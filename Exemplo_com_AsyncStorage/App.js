import React, { useState, useEffect } from 'react';
import { View, Text, Button, TextInput } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';

export default function App() {
  const [nome, setNome] = useState('');
  const [salvo, setSalvo] = useState('');
    useEffect(() => {
      const carregarNome = async () => {
        const nomeSalvo = await AsyncStorage.getItem('usuario');
        if (nomeSalvo) setSalvo(nomeSalvo);
      };
      carregarNome();
    }, []);
  const salvarNome = async () => {
    await AsyncStorage.setItem('usuario', nome);
    setSalvo(nome);
  };
  return (
      <View style={{ padding: 20 }}>
        <Text>Nome salvo: {salvo}</Text>
        <TextInput placeholder="Digite seu nome" onChangeText={setNome} style={{ borderWidth: 1, marginBottom: 10 }} />
        <Button title="Salvar" onPress={salvarNome} />
      </View>
  )
}
