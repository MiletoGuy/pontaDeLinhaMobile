import React, {useState} from 'react';
import { Text, StyleSheet, SafeAreaView, TextInput, View } from 'react-native';
import { FlatList } from 'react-native-gesture-handler';

export default function PesquisaScreen() {
  const data = [
    { id: 1, titulo: 'Nome Completo', valor: 'Tales' },
    { id: 2, titulo: 'Nome Completo', valor: 'Poddis' },
    { id: 3, titulo: 'Nome Completo', valor: null }
  ];


  return (
    <SafeAreaView style={style.container}>

        <FlatList
            data={data}
            keyExtractor={(item) => item.id.toString()}
            renderItem={({ item }) => (
                    <View style={style.containerDados}>
                        <TextInput style={style.input} placeholder={item.titulo} placeholderTextColor={'gray'} editable={false} value={item.valor}/>
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
        minWidth: '100%',
        width: '100%'
      },
      input: {
        width: '80%',
        margin: 5,
        borderRadius: 4,
        borderWidth: 2,
        borderColor: 'white',
        color: 'white',
        padding: 5
      }      
})
