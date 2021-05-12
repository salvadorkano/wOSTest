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
import * as Animatable from 'react-native-animatable';

const ListDetailCheck = props => {
  const {item} = props;
  // console.log('detailData', item);
  // console.log('detailData2,', props);

  const goToDetails = () => {
    RootNavigation.navigate('DetailsCheck', {
      title: item.title,
      status: item.status,
      date: item.date,
      amount: item.amount,
      select: item.select,
      image: item.image,
    });
  };
  return (
    <Animatable.View
      animation="fadeInDown"
      duration={1000}
      delay={600}
      style={styles.container}>
      <View style={styles.firstContainer}>
        <Text style={styles.titleText}>{item.title}</Text>
        <Text style={styles.subTitleText}>{item.amountIva}</Text>
      </View>
      <View style={styles.secondContainer}>
        <Text style={styles.amountText}>${item.amount}</Text>
      </View>
    </Animatable.View>
  );
};
export default ListDetailCheck;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    width: wp('90%'),
    height: wp('15%'),
    backgroundColor: Colors.BACKGROUND,
    margin: wp('2%'),
    flexDirection: 'row',
  },
  firstContainer: {
    flex: 2,
    marginHorizontal: Dimens.HORIZONTAL_MEDIUM,
    justifyContent: 'center',
  },
  secondContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    marginRight: wp('1%'),
  },
  titleText: {
    fontSize: wp('4%'),
  },
  subTitleText: {
    fontSize: wp('3%'),
  },
  amountText: {
    fontSize: wp('5%'),
    fontWeight: 'bold',
  },
});
