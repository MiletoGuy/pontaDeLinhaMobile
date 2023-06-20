import React, {useState} from 'react';
import { Text, StyleSheet, SafeAreaView, TextInput, View } from 'react-native';
import { FlatList } from 'react-native-gesture-handler';

export default function PesquisaScreen() {
  const data = [
    { id: 1, nome: 'Tales', cpf: '12345678910' },-+
    { id: 2, nome: 'Poddis', cpf: '12345678910' },
    { id: 3, nome: 'Vinicius', cpf: null },
  ];


  return (
    <SafeAreaView style={style.container}>
        <TextInput style={style.filter} placeholder='Filtro' placeholderTextColor={'gray'}/>
        <FlatList
            data={data}
            keyExtractor={(item) => item.id.toString()}
            renderItem={({ item }) => (
                    <View style={style.containerDados}>
                        <Text style={style.id}>ID: {item.id}</Text>
                        <Text style={style.id}>Nome Completo: {item.nome}</Text>
                        <Text style={style.id}>CPF: {item.cpf}</Text>
                    </View>
            )}
        />
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
        borderRadius: 4,
        borderWidth: 2,
        margin: 5,
        borderColor: 'white',
        minWidth: '80%'
    },
    input: {
        width: '80%',
        color: 'white',
        padding: 5
    },
    id: {
        color: 'white'
    },
    filter: {
        margin: 5,
        width: '80%',
        borderRadius: 4,
        borderWidth: 2,
        borderColor: 'white',
        color: 'white',
        padding: 5
      },
     
})
