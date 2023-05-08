import React from 'react';
import { Text, StyleSheet, Image, Pressable } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { SafeAreaView } from 'react-native-safe-area-context';


const BotaoHome = props => {
  const navigation = useNavigation();

  const handlePress = () => {
    if (props.texto == 'Fichas'){
      navigation.navigate('Ficha')
    } else {
      alert(props.texto)
    }
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
    backgroundColor: 'white',
    justifyContent: 'space-between',
    alignItems: 'center'
  },
  botaoTexto: {
    fontSize: 16,
    fontWeight: 'bold',
    letterSpacing: 0.25,
    color: 'black',
    textAlign: 'center',
    textAlignVertical: 'bottom'
  },
  imagem: {
    width: '80%',
    height: '80%',
    resizeMode: 'center'
  }
})

export default BotaoHome