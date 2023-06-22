import React, {useEffect, useState} from 'react';
import { Text, StyleSheet, SafeAreaView, TextInput, View, TouchableHighlight } from 'react-native';
import { FlatList } from 'react-native-gesture-handler';
import axios from 'axios'
import { useNavigation } from '@react-navigation/native';

export default function PesquisaScreen() {
  useEffect(() => {
    fetchUsuarios();
  }, [])

  const navigator = useNavigation()
  const [usuarios,setUsuarios] = useState([])

  const fetchUsuarios = async () => {
    try {
      const response = await axios.get('http://192.168.101.104:3000/fichas')
      setUsuarios(response.data)
    } catch (error) {
      console.error(error)
    }
  }

  const handleClick = (item) => {
    navigator.navigate('Ficha', item)
  }


  return (
    <SafeAreaView style={style.container}>
        <TextInput style={style.filter} placeholder='Filtro' placeholderTextColor={'gray'}/>
        <FlatList
            data={usuarios}
            keyExtractor={(item) => item.id.toString()}
            renderItem={({ item }) => (
              <TouchableHighlight onPress={() => handleClick(item)}>
                <View style={style.containerDados}>
                  <Text style={style.id}>ID: {item.id}</Text>
                  <Text style={style.id}>Nome Completo: {item.nome_completo}</Text>
                  <Text style={style.id}>CPF: {item.cpf}</Text>
                </View>
              </TouchableHighlight>
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
