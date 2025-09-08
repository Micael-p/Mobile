import {StyleSheet} from "react-native"

export function saudacao(nome) {
  return `Olá, ${nome}`;
}


export default StyleSheet.create({
   button: {
    backgroundColor: "#4CAF50",
    padding: 10,
    borderRadius: 8,
    marginTop: 15,
  },
  buttonText: {
    color: "#fff",
    fontSize: 16,
  },
})
