import {Alert} from 'react-native';

export const AlertInformational = description =>
  Alert.alert(
    'Aviso',
    description,
    [{text: 'De acuerdo', onPress: () => console.log('OK ALERT')}],
    {cancelable: false},
  );