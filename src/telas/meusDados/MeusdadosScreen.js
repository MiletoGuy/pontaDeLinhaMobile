import React  from 'react';
import { StyleSheet, SafeAreaView, TextInput, View } from 'react-native';

export default function MeusDadosScreen() {

  return (
    <SafeAreaView style={style.container}>
      <View style={style.containerDados}>

        <TextInput style={style.input} placeholder='Nome Completo' placeholderTextColor={'gray'} editable={false} value={'Nome: Tales Moreira'}/>
        <TextInput style={style.input} placeholder='CPF' placeholderTextColor={'gray'} editable={false} value={'CPF: 11029326983'}/>
        <TextInput style={style.input} placeholder='Nível de Acesso' placeholderTextColor={'gray'} editable={false} value={'Acesso: Nível 1'}/>
        <TextInput style={style.input} placeholder='Login' placeholderTextColor={'gray'} editable={false} value={'Login: Tales'}/>

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
