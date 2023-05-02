import React from 'react';
import { Button, View, Text } from 'react-native';
import { useNavigation } from '@react-navigation/native';

export default function DetailScreen() {
  const navigation = useNavigation();

  const handlePress = () => {
    navigation.navigate('Login');
  };

  return (
    <View>
      <Text>Bem-vindo à tela Detail!</Text>
      <Button title="Ir para a tela Detail" onPress={handlePress} />
    </View>
  );
}
