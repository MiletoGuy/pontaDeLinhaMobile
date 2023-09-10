import React, { useState }  from 'react';
import { StyleSheet, SafeAreaView, TextInput, View, Pressable, Text, Alert } from 'react-native';

export default function OutrasSolicitacoesScreen() {

    const [descricao, setDescricao] = useState('')
    const [assunto, setAssunto] = useState('')

    const handlePress = () => {
      Alert.alert('Solicitação Enviada', 'Sua solicitação foi enviada com sucesso.', [
        {
            text: 'OK',
            onPress: () => null,
            style: 'cancel',
        }
    ]);
    }

  return (
    <SafeAreaView style={style.container}>
        <TextInput style={style.input} multiline={true} placeholder='Assunto' placeholderTextColor={'gray'} value={assunto} onChangeText={text => setAssunto(text)}/>
        <TextInput style={[style.input, { height: '80%', textAlignVertical: 'top' }]} multiline={true} placeholder='Descrição...' placeholderTextColor={'gray'} value={descricao} onChangeText={text => setDescricao(text)}/>
        <Pressable style={style.button} onPress={handlePress}>
            <Text style={style.buttonText}>Confirmar Envio</Text>
        </Pressable>
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
      input: {
        margin: 5,
        width: '80%',
        borderRadius: 4,
        borderWidth: 2,
        borderColor: 'white',
        color: 'white',
        padding: 5,
      },
      button: {
        alignItems: 'center',
        justifyContent: 'center',
        width: '80%',
        paddingVertical: 6,
        paddingHorizontal: 32,
        borderRadius: 4,
        elevation: 3,
        backgroundColor: 'white',
        margin: 5
      },
      buttonText: {
        fontSize: 16,
        lineHeight: 21,
        fontWeight: 'bold',
        letterSpacing: 0.25,
        color: 'black',
      }
      
})
