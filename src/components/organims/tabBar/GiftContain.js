import React, {useEffect, useState} from 'react';
import {
  Text,
  View,
  TouchableOpacity,
  Image,
  FlatList,
  StyleSheet,
  ActivityIndicator,
} from 'react-native';
import {SharedElement} from 'react-navigation-shared-element';
import {Dimens, Colors} from '_styles/';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';
import Icon from 'react-native-vector-icons/FontAwesome5';
import {Button} from 'react-native-elements';
import {useTest} from '_context/hooks/HooksTest';
import UsersList from '_molecules/Users/UsersList';

export default function GiftContain({navigation}) {
  const {users, actionsTest} = useTest();

  useEffect(() => {
    //MOUNT
    getUsers();
  }, []);

  const getUsers = () => {
    actionsTest
      .getUsers()
      .then(res => {
        console.log('el response aqui', res);
      })
      .catch(err => {
        console.log('err', err);
      });
  };

  return (
    <View style={styles.container}>
      <View style={styles.header}></View>
      <View style={styles.listContainer}>
        {users.data.loading ? (
          <ActivityIndicator
            style={{marginTop: wp('25%')}}
            size={Dimens.ACTIVITY_INDICATOR_SIZE}
            color={Colors.DARK}
          />
        ) : (
          <FlatList
            data={users.data.users}
            keyExtractor={(item, index) => 'key' + index}
            renderItem={props => <UsersList {...props} />}
          />
        )}
      </View>
    </View>
  );
}

var styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.BACKGROUND,
  },
  header: {
    flex: 1,
    backgroundColor: Colors.BLUE,
  },
  listContainer: {
    flex: 5,
    justifyContent: 'center',
    alignItems: 'center',
  },
});
