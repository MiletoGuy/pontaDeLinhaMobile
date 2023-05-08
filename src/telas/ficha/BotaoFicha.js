import React from 'react';
import { Text, StyleSheet, Pressable } from 'react-native';


const BotaoFicha = props => {



  return (      
        <Pressable style={style.miniContainerBotoes} onPress={props.onPress}>
            <Text style={style.textoBotao}>{props.texto}</Text>
        </Pressable>
  );
}

const style = StyleSheet.create({
    miniContainerBotoes: {
        height: 30,
        width: '50%',
        flexBasis: '46%',
        borderRadius: 6,
        margin: 5,
        backgroundColor: 'white',
        justifyContent: 'center'
      },
      textoBotao: {
        fontWeight: 'bold',
        textAlign: 'center',
        textAlignVertical: 'center'
      }
})

export default BotaoFicha