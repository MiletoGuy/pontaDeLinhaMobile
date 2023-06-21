import React, {useState} from 'react';
import { Text, StyleSheet, SafeAreaView, TextInput, View } from 'react-native';

export default function FichaScreen() {
  const [fichaID, setFichaID] = useState(0)
  const dataFicha = {
          id: 1, 
          nome: 'Tales', 
          cpf: '12345678910',
          nascimento: '14/06/2002',
          estado: 'Paraná',
          cidade: 'Cascavel'
  };

  return (
    <SafeAreaView style={style.container}>
      <View style={style.containerDados}>

        <Text style={style.fichaID}>{String(parseInt(dataFicha.id)).padStart(4,'0')}</Text>
        <TextInput style={style.input} placeholder='Nome Completo' placeholderTextColor={'gray'} editable={false} value={'Nome: ' + dataFicha.nome}/>
        <TextInput style={style.input} placeholder='CPF' placeholderTextColor={'gray'} editable={false} value={'CPF: ' + dataFicha.cpf}/>
        <TextInput style={style.input} placeholder='Nascimento' placeholderTextColor={'gray'} editable={false} value={'Nascimento: ' + dataFicha.nascimento}/>
        <TextInput style={style.input} placeholder='Informação 3' placeholderTextColor={'gray'} editable={false} value={'Estado: ' + dataFicha.estado}/>
        <TextInput style={style.input} placeholder='Informação 4' placeholderTextColor={'gray'} editable={false} value={'Cidade: ' + dataFicha.cidade}/>

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
