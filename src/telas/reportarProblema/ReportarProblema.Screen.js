import React, { useState } from 'react';
import { Alert, Pressable, Text, StyleSheet } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { TextInput } from 'react-native-gesture-handler';
import { StatusBar } from 'expo-status-bar';

export default function ReportarProblemaScreen() {
  const [login, setLogin] = useState('')
  const [senha, setSenha] = useState('')
  const navigation = useNavigation();

  const handlePress = () => {
    Alert.alert('Solicitação Enviada', 'Sua solicitação foi enviada com sucesso.', [
      {
          text: 'OK',
          onPress: () => null,
          style: 'cancel',
      }
  ]);
  };

  return (
    <SafeAreaView style={styles.container}>
      <StatusBar hidden/>
      <Pressable style={styles.button} onPress={handlePress}>
        <Text style={styles.buttonText}>Caso Comum 1</Text>
      </Pressable>
      <Pressable style={styles.button} onPress={handlePress}>
        <Text style={styles.buttonText}>Caso Comum 2</Text>
      </Pressable>
      <Pressable style={styles.button} onPress={handlePress}>
        <Text style={styles.buttonText}>Caso Comum 3</Text>
      </Pressable>
      <Pressable style={styles.button} onPress={handlePress}>
        <Text style={styles.buttonText}>Caso Comum 4</Text>
      </Pressable>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'white',
  },
  button: {
    alignItems: 'center',
    justifyContent: 'center',
    width: '80%',
    paddingVertical: 6,
    paddingHorizontal: 32,
    borderRadius: 4,
    elevation: 3,
    backgroundColor: '#0077b6',
    margin: 5
  },
  buttonText: {
    fontSize: 16,
    lineHeight: 21,
    fontWeight: 'bold',
    letterSpacing: 0.25,
    color: 'white',
  }

})
