import React from 'react';
import {StyleSheet, View, Image, Text, TouchableOpacity} from 'react-native';
import {Colors} from '_styles/';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';
import {Dimens} from '_styles/';
import Icon from 'react-native-vector-icons/FontAwesome5';
import * as RootNavigation from '_navigations/NavigationsActions';
import {SharedElement} from 'react-native-shared-element';

const ListCheck = props => {
  const {item} = props;
  // console.log('data', item);
  // console.log('data2,', props);

  const goToDetails = () => {
    RootNavigation.navigate('DetailsCheck', {
      id: item.id,
      title: item.title,
      status: item.status,
      date: item.date,
      amount: item.amount,
      select: item.select,
      image: item.image,
    });
  };
  // console.log('wewwewewewew', `item.${item.id}.image`);
  return (
    <TouchableOpacity onPress={() => goToDetails()}>
      <View style={styles.container}>
        <View style={styles.firstContainer}>
          <View style={styles.imageContainer}>
            <SharedElement id={`item.${item.id}.image`}>
              <Image
                style={styles.image}
                source={{uri: item.image}}
                resizeMode="center"
              />
            </SharedElement>
            <Text style={styles.title}>{item.title}</Text>
          </View>
          <View style={styles.iconContainer}>
            {item.select ? (
              <Icon name="check-circle" size={20} color={Colors.BLUE} />
            ) : (
              <Icon name="window-close" size={20} color={'red'} />
            )}
          </View>
        </View>
        <View style={styles.secondContainer}>
          <View style={styles.infoContainer}>
            <Text style={styles.littleTitle}>Amount</Text>
            <Text style={styles.textAmount}>${item.amount}</Text>
          </View>
          <View style={styles.infoContainer}>
            <Text style={styles.littleTitle}>Date</Text>
            <Text style={styles.infoText}>{item.date}</Text>
          </View>
          <View style={styles.infoContainer}>
            <Text style={styles.littleTitle}>Status</Text>
            <Text style={styles.infoText}>{item.status}</Text>
          </View>
        </View>
      </View>
    </TouchableOpacity>
  );
};
export default ListCheck;

const styles = StyleSheet.create({
  container: {
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
