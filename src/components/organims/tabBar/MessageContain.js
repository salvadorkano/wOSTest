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
import AlbumList from '_molecules/Album/AlbumList';

export default function MessageContain({navigation}) {
  const {album, actionsTest} = useTest();
  const numColumns = 3;

  useEffect(() => {
    //MOUNT
    getAlbum();
  }, []);

  const getAlbum = () => {
    actionsTest
      .getAlbums()
      .then(res => {
        console.log('el response aqui', res);
      })
      .catch(err => {
        console.log('err', err);
      });
  };

  const formatData = (data, numColumns) => {
    const numberOfFullRows = Math.floor(data.length / numColumns);

    let numberOfElementsLastRow = data.length - numberOfFullRows * numColumns;
    while (
      numberOfElementsLastRow !== numColumns &&
      numberOfElementsLastRow !== 0
    ) {
      data.push({key: `blank-${numberOfElementsLastRow}`, empty: true});
      numberOfElementsLastRow++;
    }

    return data;
  };

  return (
    <View style={styles.container}>
      <View style={styles.header}></View>
      <View style={styles.listContainer}>
        {album.data.loading ? (
          <ActivityIndicator
            style={{marginTop: wp('25%')}}
            size={Dimens.ACTIVITY_INDICATOR_SIZE}
            color={Colors.DARK}
          />
        ) : (
          <FlatList
            data={formatData(album.data.album, numColumns)}
            keyExtractor={(item, index) => 'key' + index}
            numColumns={numColumns}
            renderItem={props => <AlbumList {...props} />}
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
