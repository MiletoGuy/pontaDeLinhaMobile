import { useRoute } from '@react-navigation/native';
import React  from 'react';
import { Text, StyleSheet, SafeAreaView, TextInput, View } from 'react-native';

export default function FichaScreen() {
  const route = useRoute()
  let data;
  if (route.params == undefined) {
    console.log(route.params)
    data = {id: 1, nome_completo: 'Ficha 1', cpf: '11111111111'}
  } else {
    data = route.params
  }



  return (
    <SafeAreaView style={style.container}>
      <View style={style.containerDados}>

        <Text style={style.fichaID}>{String(parseInt(data.id)).padStart(4,'0')}</Text>
        <TextInput style={style.input} placeholder='Nome Completo' placeholderTextColor={'gray'} editable={false} value={'Nome: ' + data.nome_completo}/>
        <TextInput style={style.input} placeholder='CPF' placeholderTextColor={'gray'} editable={false} value={'CPF: ' + data.cpf}/>


      </View>
    </SafeAreaView>
  );
}

const style = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        backgroundColor: 'white',
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
        color: '#0077b6',
        fontSize: 32,
        fontWeight: 'bold',
        textAlignVertical: 'bottom'
      },
      input: {
        margin: 5,
        width: '80%',
        borderRadius: 4,
        borderWidth: 2,
        borderColor: '#0077b6',
        color: '#0077b6',
        padding: 5
      },
      
})
