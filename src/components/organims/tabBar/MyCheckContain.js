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

import {data} from '../../../config/data';
import {Button} from 'react-native-elements';

export default function MyCheckContain({navigation}) {
  return (
    <View style={styles.container}>
      <View style={styles.headerContainer}>
        <View style={styles.titleContainer}>
          <Text style={{fontSize: wp('7%'), fontWeight: 'bold'}}>My Check</Text>
        </View>
        <View style={styles.buttonContainer}>
          <Button
            icon={<Icon name="bars" size={wp('6%')} color={Colors.BLUE} />}
            buttonStyle={{backgroundColor: 'transparent'}}
          />
        </View>
        <View style={styles.buttonContainer}>
          <Button
            icon={
              <Icon name="clipboard-list" size={wp('6%')} color={Colors.BLUE} />
            }
            buttonStyle={{backgroundColor: 'transparent'}}
          />
        </View>
      </View>
      <View style={styles.listContainer}>
        <FlatList
          data={data}
          keyExtractor={(item, index) => 'key' + index}
          style={{flex: 1}}
          // renderItem={props => <ListCheck {...props} />}
          renderItem={({item}) => (
            <View style={{flex: 1}}>
              <TouchableOpacity
                activeOpacity={0.8}
                style={{marginBottom: 14}}
                onPress={() => navigation.navigate('DetailsCheck', {item})}>
                <View style={styles.maincontainer}>
                  <View style={styles.firstContainer}>
                    <View style={styles.imageContainer}>
                      <SharedElement id={`item.${item.id}.image`}>
                        <Image
                          style={styles.image}
                          source={{uri: item.image}}
                          resizeMode="center"
                        />
                      </SharedElement>
                      <SharedElement id={`item.${item.id}.title`}>
                        <Text style={styles.title}>{item.title}</Text>
                      </SharedElement>
                    </View>
                    <View style={styles.iconContainer}>
                      <SharedElement id={`item.${item.id}.select`}>
                        {item.select ? (
                          <Icon
                            name="check-circle"
                            size={20}
                            color={Colors.BLUE}
                          />
                        ) : (
                          <Icon name="window-close" size={20} color={'red'} />
                        )}
                      </SharedElement>
                    </View>
                  </View>
                  <View style={styles.secondContainer}>
                    <View style={styles.infoContainer}>
                      <Text style={styles.littleTitle}>Amount</Text>
                      <SharedElement id={`item.${item.id}.amount`}>
                        <Text style={styles.textAmount}>${item.amount}</Text>
                      </SharedElement>
                    </View>
                    <View style={styles.infoContainer}>
                      <Text style={styles.littleTitle}>Date</Text>
                      <SharedElement id={`item.${item.id}.date`}>
                        <Text style={styles.infoText}>{item.date}</Text>
                      </SharedElement>
                    </View>
                    <View style={styles.infoContainer}>
                      <Text style={styles.littleTitle}>Status</Text>
                      <SharedElement id={`item.${item.id}.status`}>
                        <Text style={styles.infoText}>{item.status}</Text>
                      </SharedElement>
                    </View>
                  </View>
                </View>
              </TouchableOpacity>
            </View>
          )}
        />
      </View>
    </View>
  );
}

var styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.BACKGROUND,
  },
  headerContainer: {
    flex: 1,
    justifyContent: 'center',
    flexDirection: 'row',
    backgroundColor: Colors.BACKGROUND,
  },
  listContainer: {
    flex: 6,
    alignItems: 'center',
    backgroundColor: Colors.BACKGROUND,
  },
  titleContainer: {
    flex: 4,
    justifyContent: 'center',
    backgroundColor: Colors.BACKGROUND,
    marginHorizontal: Dimens.HORIZONTAL_MEDIUM,
  },
  buttonContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },

  maincontainer: {
    flex: 1,
    width: wp('90%'),
    height: wp('30%'),
    backgroundColor: Colors.BACKGROUND,
    margin: wp('2%'),
    borderRadius: 8,
    borderColor: Colors.TEXT_HEADER,
    borderWidth: 2,
  },
  firstContainer: {
    flex: 1,
    flexDirection: 'row',
    marginHorizontal: Dimens.HORIZONTAL_MEDIUM,
  },
  secondContainer: {
    flex: 1,
    flexDirection: 'row',
    marginHorizontal: Dimens.HORIZONTAL_MEDIUM,
  },
  imageContainer: {
    flex: 3,
    flexDirection: 'row',
    alignItems: 'center',
  },
  image: {
    width: wp('12%'),
    height: wp('12%'),
  },
  iconContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  title: {
    marginLeft: wp('2%'),
    fontSize: wp('4%'),
  },
  infoContainer: {
    flex: 1,
    justifyContent: 'center',
  },
  littleTitle: {
    fontSize: wp('2.5%'),
  },
  textAmount: {
    fontSize: wp('5%'),
    fontWeight: 'bold',
  },
  infoText: {
    fontSize: wp('3%'),
  },
});
