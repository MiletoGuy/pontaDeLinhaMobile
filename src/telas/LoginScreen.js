import React from 'react';
import { Button, View, Text } from 'react-native';
import { useNavigation } from '@react-navigation/native';

export default function LoginScreen() {
  const navigation = useNavigation();

  const handlePress = () => {
    navigation.navigate('Detail');
  };

  return (
    <View>
      <Text>Bem-vindo à tela de Login!</Text>
      <Button title="Ir para a tela Detail" onPress={handlePress} />
    </View>
  );
}
