import React, {useEffect, useState} from 'react';
import { Text, StyleSheet, SafeAreaView, TextInput, View, TouchableHighlight } from 'react-native';
import { FlatList } from 'react-native-gesture-handler';
import axios from 'axios'
import { useNavigation } from '@react-navigation/native';

export default function EsditarFichaScreen() {
  useEffect(() => {
    fetchUsuarios();
  }, [])

  const navigator = useNavigation()
  const [usuarios,setUsuarios] = useState([])
  const [filter, setFilter] = useState('');
  const filteredData = usuarios.filter(item =>
    item.nome_completo.toLowerCase().includes(filter.toLowerCase())
  );

  const fetchUsuarios = async () => {
    try {
      const response = await axios.get('http://192.168.101.104:3000/fichas')
      setUsuarios(response.data)
    } catch (error) {
      console.error(error)
    }
  }

  const handleClick = (item) => {
    navigator.navigate('FichaSelecionada', item)
  }


  return (
    <SafeAreaView style={style.container}>
        <TextInput style={style.filter} placeholder='Filtro' placeholderTextColor={'gray'} onChangeText={text => setFilter(text)} value={filter}/>
        <FlatList
            data={usuarios}
            keyExtractor={(item) => item.id.toString()}
            renderItem={({ item }) => (
              <TouchableHighlight onPress={() => handleClick(item)}>
                <View style={style.containerDados}>
                  <Text>ID: {item.id}</Text>
                  <Text>Nome Completo: {item.nome_completo}</Text>
                  <Text>CPF: {item.cpf}</Text>
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
        backgroundColor: 'white',
        justifyContent: 'space-between'
      },
    containerDados: {
        alignItems: 'center',
        borderRadius: 4,
        borderWidth: 2,
        margin: 5,
        borderColor: '#0077b6',
        minWidth: '80%',
        backgroundColor: 'white'
    },
    filter: {
        margin: 5,
        width: '80%',
        borderRadius: 4,
        borderWidth: 2,
        borderColor: '#0077b6',
        color: 'black',
        padding: 5
      },
     
})
