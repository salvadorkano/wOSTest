import React from 'react';
import {
  Text,
  View,
  TouchableOpacity,
  Image,
  FlatList,
  StyleSheet,
} from 'react-native';
import {SharedElement} from 'react-navigation-shared-element';
import {Dimens, Colors} from '_styles/';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';
import Icon from 'react-native-vector-icons/FontAwesome5';
import {Button} from 'react-native-elements';

export default function ScanContain({navigation}) {
  return <View style={styles.container}></View>;
}

var styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.BACKGROUND,
  },
});
