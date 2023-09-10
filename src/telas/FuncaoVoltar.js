import React from 'react';
import { Alert, BackHandler } from 'react-native';
import { useFocusEffect } from '@react-navigation/native';
import { useNavigation } from '@react-navigation/native';


export default function FuncaoVoltar(currentScreen) {
  const navigation = useNavigation();
  useFocusEffect(
    React.useCallback(() => {
      const onBackPress = () => {

        if (currentScreen == 'Ficha' || currentScreen == 'Solicitacoes') {
          navigation.navigate('Home');
        } else if (currentScreen == 'Home') {
          Alert.alert('Calma lá!', 'Tem certeza que você deseja sair?', [
            {
              text: 'Voltar',
              onPress: () => null,
              style: 'cancel',
            },
            {
              text: 'Sim',
              onPress: () => navigation.navigate('Login')
            },
          ]);
        }
        return true;
      };

      BackHandler.addEventListener('hardwareBackPress', onBackPress);

      return () => BackHandler.removeEventListener('hardwareBackPress', onBackPress);
    }, [])
  );

}