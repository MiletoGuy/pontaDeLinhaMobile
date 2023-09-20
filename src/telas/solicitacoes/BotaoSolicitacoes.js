import React from 'react';
import { Text, StyleSheet, Image, Pressable } from 'react-native';
import { useNavigation } from '@react-navigation/native';

const BotaoSolicitacoes = props => {
  const navigation = useNavigation();

  const handlePress = () => {
    const text = props.texto;
    navigation.navigate(text.normalize('NFD').replace(/[\u0300-\u036f]/g, "").replace(/\s+/g, ""));
  };

  return (
        <Pressable style={styles.botaoArea} onPress={handlePress}>
          <Image style={styles.imagem} source={props.imagem}/>
          <Text style={styles.botaoTexto}>{props.texto}</Text>
        </Pressable>
  );
}

const styles = StyleSheet.create({
  botaoArea: {
    margin: 5,
    borderRadius: 6,
    width: '43%',
    flexBasis: '46%',
    backgroundColor: '#0077b6',
    justifyContent: 'space-between',
    alignItems: 'center',
    elevation: 5
  },
  botaoTexto: {
    fontSize: 16,
    fontWeight: 'bold',
    letterSpacing: 0.25,
    color: 'white',
    textAlign: 'center',
    textAlignVertical: 'bottom'
  },
  imagem: {
    width: '80%',
    height: '80%',
    resizeMode: 'center'
  }
})

export default BotaoSolicitacoes