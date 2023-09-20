import { useRoute } from '@react-navigation/native';
import axios from 'axios';
import React, { useState }  from 'react';
import { Text, StyleSheet, SafeAreaView, TextInput, View, Pressable } from 'react-native';

export default function FichaSelecionadaScreen() {
  const route = useRoute()
  let data;
  if (route.params == undefined) {
    console.log(route.params)
    data = {id: 1, nome_completo: 'Ficha 1', cpf: '11111111111'}
  } else {
    data = route.params
  }
  
  const [nome,setNome] = useState(data.nome_completo)
  const [cpf,setCpf] = useState(data.cpf)
  const [id] = useState(data.id);

  const handlePress = async() => {
    try {
      await axios.put(`http://192.168.101.104:3000/fichas/${id}`, {
        nome_completo: nome,
        cpf: cpf,
      });

      console.log('Ficha atualizada com sucesso!');
      alert('Ficha atualizada com sucesso!')
    } catch (error) {
      console.error('Erro ao atualizar a ficha:', error);
      alert('Erro ao atualizar a ficha:')
    }

  }


  return (
    <SafeAreaView style={style.container}>
      <View style={style.containerDados}>

        <Text style={style.fichaID}>{String(parseInt(data.id)).padStart(4,'0')}</Text>
        <TextInput style={style.input} placeholder='Nome Completo' placeholderTextColor={'gray'} onChangeText={text => setNome(text)} value={nome}/>
        <TextInput style={style.input} placeholder='CPF' placeholderTextColor={'gray'} keyboardType='numeric' maxLength={11} onChangeText={text => setCpf(text)} value={cpf}/>
        <Pressable style={style.button} onPress={handlePress}>
          <Text style={style.buttonText}>Salvar</Text>
        </Pressable>

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
        color: 'black',
        padding: 5
      },
      button: {
        alignItems: 'center',
        justifyContent: 'center',
        paddingVertical: 12,
        paddingHorizontal: 32,
        borderRadius: 4,
        elevation: 3,
        backgroundColor: '#0077b6',
      },
      buttonText: {
        fontSize: 16,
        lineHeight: 21,
        fontWeight: 'bold',
        letterSpacing: 0.25,
        color: 'white',
      },
      
})
