import React, {useEffect} from 'react';

import Icon from 'react-native-vector-icons/FontAwesome5';

import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {createSharedElementStackNavigator} from 'react-navigation-shared-element';

import GiftContain from '_organims/tabBar/GiftContain';
import MyCheckContain from '_organims/tabBar/MyCheckContain';
import ScanContain from '_organims/tabBar/ScanContain';
import MessageContain from '_organims/tabBar/MessageContain';
import HomeScreen from '_scenes/HomeScreen';

import {Colors} from '_styles/';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';

const Tab = createBottomTabNavigator();

function HomeNavigator() {
  const Stack = createSharedElementStackNavigator();

  return (
    <Stack.Navigator initialRouteName="JobList" headerMode="none">
      <Stack.Screen name="HomeScreen" component={HomeScreen} />
      {/* <Stack.Screen name="DetailScreen" component={DetailScreen} /> */}
    </Stack.Navigator>
  );
}

function CheckNavigator() {
  const Stack = createSharedElementStackNavigator();

  return (
    <Stack.Navigator initialRouteName="MyCheckContain" headerMode="none">
      <Stack.Screen name="MyCheckContain" component={MyCheckContain} />
      {/* <Stack.Screen name="DetailScreen" component={DetailScreen} /> */}
    </Stack.Navigator>
  );
}

export default function TabBar() {
  return (
    <Tab.Navigator
      initialRouteName="Message"
      tabBarOptions={{
        activeTintColor: Colors.BLUE,
        labelStyle: {fontSize: wp('3%'), marginBottom: hp('0.5%')},
        style: {height: hp('10%')},
        tabStyle: {
          justifyContent: 'center',
        },
      }}>
      <Tab.Screen
        name="Gift"
        component={GiftContain}
        options={{
          tabBarLabel: () => {
            return null;
          },
          tabBarIcon: ({color, focused}) =>
            focused ? (
              <Icon name="gift" size={20} color={Colors.BLUE} />
            ) : (
              <Icon name="gift" size={18} color={Colors.TEXT} />
            ),
        }}
      />
      <Tab.Screen
        name="MyCheck"
        component={CheckNavigator}
        options={{
          tabBarLabel: () => {
            return null;
          },
          tabBarIcon: ({color, focused}) =>
            focused ? (
              <Icon name="money-check" size={20} color={Colors.BLUE} />
            ) : (
              <Icon name="money-check" size={18} color={Colors.TEXT} />
            ),
        }}
      />
      <Tab.Screen
        name="Scan"
        component={ScanContain}
        options={{
          tabBarLabel: () => {
            return null;
          },
          tabBarIcon: ({color, focused}) =>
            focused ? (
              <Icon name="vector-square" size={20} color={Colors.BLUE} />
            ) : (
              <Icon name="vector-square" size={18} color={Colors.TEXT} />
            ),
        }}
      />
      <Tab.Screen
        name="Message"
        component={MessageContain}
        options={{
          tabBarLabel: () => {
            return null;
          },
          tabBarIcon: ({color, focused}) =>
            focused ? (
              <Icon name="comment-alt" size={20} color={Colors.BLUE} />
            ) : (
              <Icon name="comment-alt" size={18} color={Colors.TEXT} />
            ),
        }}
      />
      <Tab.Screen
        name="Profile"
        component={HomeNavigator}
        options={{
          tabBarLabel: () => {
            return null;
          },
          tabBarIcon: ({color, focused}) =>
            focused ? (
              <Icon name="user" size={20} color={Colors.BLUE} />
            ) : (
              <Icon name="user" size={18} color={Colors.TEXT} />
            ),
        }}
      />
    </Tab.Navigator>
  );
}
