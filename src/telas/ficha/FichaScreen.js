import React, {useState} from 'react';
import { Text, StyleSheet, SafeAreaView, TextInput, View, Pressable, BackHandler, Alert } from 'react-native';
import BotaoFicha from './BotaoFicha';

export default function FichaScreen() {
  const [fichaID, setFichaID] = useState(0)


  const handleBotao1 = () => {

    setFichaID(String(parseInt(fichaID)+1).padStart(4,'0'))
};

  return (
    <SafeAreaView style={style.container}>
      <View style={style.containerDados}>

        <Text style={style.fichaID}>{fichaID}</Text>
        <TextInput style={style.input} placeholder='Nome' placeholderTextColor={'gray'}/>
        <TextInput style={style.input} placeholder='Informação 1' placeholderTextColor={'gray'}/>
        <TextInput style={style.input} placeholder='Informação 2' placeholderTextColor={'gray'}/>
        <TextInput style={style.input} placeholder='Informação 3' placeholderTextColor={'gray'}/>
        <TextInput style={style.input} placeholder='Informação 4' placeholderTextColor={'gray'}/>

      </View>
      <View style={style.containerBotoes}>

        <BotaoFicha texto="botao1" onPress={handleBotao1}/>
        <BotaoFicha texto="botao2"/>
        <BotaoFicha texto="botao3"/>
        <BotaoFicha texto="botao4"/>

      </View>
    </SafeAreaView>
  );
}

const style = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        backgroundColor: 'black',
        justifyContent: 'space-between'
      },
      containerDados: {
        alignItems: 'center',
        width: '100%'
      },
      containerBotoes: {
        height: '20%',
        width: '80%',
        alignContent: 'center',
        flexDirection: 'row',
        flexWrap: 'wrap'
      },
      fichaID: {
        color: 'white',
        fontSize: 32,
        fontWeight: 'bold',
        textAlignVertical: 'bottom'
      },
      input: {
        margin: 5,
        width: '80%',
        borderRadius: 4,
        borderWidth: 2,
        borderColor: 'white',
        color: 'white',
        padding: 5
      },
      
})
