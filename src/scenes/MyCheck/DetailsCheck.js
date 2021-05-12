import React from 'react';
import {
  StyleSheet,
  Text,
  View,
  Image,
  FlatList,
  TouchableOpacity,
  Share,
} from 'react-native';
import {SharedElement} from 'react-navigation-shared-element';
import {Button, FAB} from 'react-native-elements';
import Icon from 'react-native-vector-icons/FontAwesome5';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';
import {Dimens, Colors} from '_styles/';
import ListDetailCheck from '_molecules/MyChecks/ListDetailCheck';
import * as Animatable from 'react-native-animatable';

const DetailCheck = ({navigation, route}) => {
  const {item} = route.params;
  const buttonRef = React.useRef();

  const dataDetail = [
    {
      id: '1',
      title: 'Lather moto jacket',
      amountIva: '8,564.00 X1 (Including VAT 10%)',
      amount: '8,564.00',
    },
    {
      id: '2',
      title: 'Lorem ipsum',
      amountIva: '358.00 X1 (Including VAT 10%)',
      amount: '358.00',
    },
    {
      id: '3',
      title: 'Enim ad minim veniam',
      amountIva: '1,355.00 X1 (Including VAT 10%)',
      amount: '1,355.00',
    },
    {
      id: '4',
      title: 'Dolor in reprehenderit',
      amountIva: '2,333.12 X1 (Including VAT 10%)',
      amount: '2,333.12',
    },
    {
      id: '1',
      title: 'Lather moto jacket',
      amountIva: '8,564.00 X1 (Including VAT 10%)',
      amount: '8,564.00',
    },
    {
      id: '2',
      title: 'Lorem ipsum',
      amountIva: '358.00 X1 (Including VAT 10%)',
      amount: '358.00',
    },
    {
      id: '3',
      title: 'Enim ad minim veniam',
      amountIva: '1,355.00 X1 (Including VAT 10%)',
      amount: '1,355.00',
    },
    {
      id: '4',
      title: 'Dolor in reprehenderit',
      amountIva: '2,333.12 X1 (Including VAT 10%)',
      amount: '2,333.12',
    },
    {
      id: '1',
      title: 'Lather moto jacket',
      amountIva: '8,564.00 X1 (Including VAT 10%)',
      amount: '8,564.00',
    },
    {
      id: '2',
      title: 'Lorem ipsum',
      amountIva: '358.00 X1 (Including VAT 10%)',
      amount: '358.00',
    },
    {
      id: '3',
      title: 'Enim ad minim veniam',
      amountIva: '1,355.00 X1 (Including VAT 10%)',
      amount: '1,355.00',
    },
    {
      id: '4',
      title: 'Dolor in reprehenderit',
      amountIva: '2,333.12 X1 (Including VAT 10%)',
      amount: '2,333.12',
    },
    {
      id: '1',
      title: 'Lather moto jacket',
      amountIva: '8,564.00 X1 (Including VAT 10%)',
      amount: '8,564.00',
    },
    {
      id: '2',
      title: 'Lorem ipsum',
      amountIva: '358.00 X1 (Including VAT 10%)',
      amount: '358.00',
    },
    {
      id: '3',
      title: 'Enim ad minim veniam',
      amountIva: '1,355.00 X1 (Including VAT 10%)',
      amount: '1,355.00',
    },
    {
      id: '4',
      title: 'Dolor in reprehenderit',
      amountIva: '2,333.12 X1 (Including VAT 10%)',
      amount: '2,333.12',
    },
  ];

  const onShare = async () => {
    try {
      const result = await Share.share({
        message:
          'Your Check is ' + item.title + ' and the mount is $' + item.amount,
      });
      if (result.action === Share.sharedAction) {
        if (result.activityType) {
          // shared with activity type of result.activityType
        } else {
          // shared
        }
      } else if (result.action === Share.dismissedAction) {
        // dismissed
      }
    } catch (error) {
      alert(error.message);
    }
  };

  return (
    <View style={styles.container}>
      <Animatable.View
        animation="fadeInDown"
        delay={1000}
        style={styles.headerContainer}>
        <Animatable.View
          ref={buttonRef}
          animation="fadeIn"
          duration={600}
          delay={300}
          style={[StyleSheet.absoluteFillObject, styles.backButtonContainer]}>
          <Button
            icon={<Icon name="angle-left" size={wp('7%')} color={'white'} />}
            buttonStyle={{backgroundColor: 'transparent'}}
            title={'Back'}
            titleStyle={{marginLeft: wp('1%')}}
            onPress={() => {
              buttonRef.current.fadeOut(100).then(() => {
                navigation.goBack();
              });
            }}
          />
        </Animatable.View>
        <View style={styles.shareButtonContainer}>
          <Button
            icon={<Icon name="share-square" size={wp('7%')} color={'white'} />}
            buttonStyle={{backgroundColor: 'transparent'}}
            onPress={onShare}
          />
        </View>
      </Animatable.View>
      <View
        style={{
          flex: 0.01,
          backgroundColor: 'gray',
          elevation: 1,
          zIndex: 2,
          justifyContent: 'center',
          alignItems: 'center',
        }}>
        <View style={styles.cardContain}>
          <View style={styles.mainContainer}>
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
                    <Icon name="check-circle" size={20} color={Colors.BLUE} />
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
        </View>
      </View>
      <View
        style={{
          flex: 4,
          zIndex: 1,
          justifyContent: 'center',
          alignItems: 'center',
        }}>
        <FlatList
          data={dataDetail}
          keyExtractor={(item, index) => 'key' + index}
          renderItem={props => <ListDetailCheck {...props} />}
          ListHeaderComponent={<View style={{height: wp('20%')}}></View>}
          ListFooterComponent={<View style={{height: wp('20%')}}></View>}
        />
        <Animatable.View
          animation="fadeInUp"
          delay={1500}
          duration={600}
          style={styles.fabGift}>
          <TouchableOpacity onPress={() => alert('FAB clicked')}>
            <Icon name="gift" size={wp('10%')} color={'white'} />
          </TouchableOpacity>
        </Animatable.View>

        <Animatable.View
          animation="fadeInUp"
          delay={2000}
          duration={800}
          style={styles.fabCheck}>
          <TouchableOpacity onPress={() => alert('FAB clicked')}>
            <Icon name="money-check" size={20} color={'white'} />
          </TouchableOpacity>
        </Animatable.View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    zIndex: 1,
    backgroundColor: Colors.BACKGROUND,
  },
  cardContain: {
    height: wp('40%'),
    width: wp('90%'),
    backgroundColor: 'transparent',
    alignItems: 'center',
    zIndex: 2,
  },
  headerContainer: {
    flex: 1,
    backgroundColor: Colors.BLUE,
    elevation: -1,
    zIndex: 1,
    flexDirection: 'row',
  },
  backButtonContainer: {
    flex: 1,
    justifyContent: 'flex-start',
    flexDirection: 'row',
  },
  shareButtonContainer: {
    flex: 1,
    backgroundColor: 'red',
  },
  backContainer: {
    backgroundColor: 'blue',
    height: wp('10%'),
    width: wp('20%'),
    margin: wp('2%'),
    justifyContent: 'center',
    flexDirection: 'row',
    alignItems: 'center',
  },
  shareButtonContainer: {
    flex: 1,
    justifyContent: 'flex-end',
    flexDirection: 'row',
  },

  mainContainer: {
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
  fabGift: {
    position: 'absolute',
    width: wp('18%'),
    height: wp('18%'),
    alignItems: 'center',
    justifyContent: 'center',
    left: wp('20%'),
    bottom: wp('5%'),
    backgroundColor: '#03A9F4',
    borderRadius: 30,
    elevation: 8,
  },
  fabCheck: {
    position: 'absolute',
    width: wp('18%'),
    height: wp('18%'),
    alignItems: 'center',
    justifyContent: 'center',
    right: wp('20%'),
    bottom: wp('5%'),
    backgroundColor: 'red',
    borderRadius: 30,
    elevation: 8,
  },
});

DetailCheck.sharedElements = route => {
  console.log('w123123123123', route);
  const {item} = route.params;

  return [
    {
      id: `item.${item.id}.image`,
      animation: 'move',
      resize: 'clip',
    },
    {
      id: `item.${item.id}.title`,
      animation: 'move',
      resize: 'clip',
    },
    {
      id: `item.${item.id}.description`,
      animation: 'move',
      resize: 'clip',
    },
    {
      id: `item.${item.id}.iconName`,
      animation: 'move',
      resize: 'clip',
    },
    {
      id: `item.${item.id}.select`,
      animation: 'move',
      resize: 'clip',
    },
    {
      id: `item.${item.id}.amount`,
      animation: 'move',
      resize: 'clip',
    },
    {
      id: `item.${item.id}.status`,
      animation: 'move',
      resize: 'clip',
    },
    {
      id: `item.${item.id}.date`,
      animation: 'move',
      resize: 'clip',
    },
  ];
};

export default DetailCheck;
