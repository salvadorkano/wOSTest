import React from 'react';

import {NavigationContainer} from '@react-navigation/native';
// import {createStackNavigator} from '@react-navigation/stack';
import {createSharedElementStackNavigator} from 'react-navigation-shared-element';

import {navigationRef} from './NavigationsActions';

import LoginScreen from '_scenes/login';
import TabBar from './TabBar';
import DetailsCheck from '_scenes/MyCheck/DetailsCheck';
import MyCheckContain from '_components/organims/tabBar/MyCheckContain';

import HomeScreen from '_scenes/HomeScreen';
import DetailScreen from '_scenes/DetailScreen';

// const Stack = createStackNavigator();
const Stack = createSharedElementStackNavigator();

const options = {
  headerBackTitleVisible: false,
  headerShown: false,
  transitionSpec: {
    open: {animation: 'timing', config: {duration: 2000}},
    close: {animation: 'timing', config: {duration: 100}},
  },
  cardStyleInterpolator: ({current: {progress}}) => {
    return {
      cardStyle: {
        opacity: progress,
      },
    };
  },
};

export default function MyStack() {
  return (
    <NavigationContainer ref={navigationRef}>
      <Stack.Navigator initialRouteName="Login" headerMode="none">
        <Stack.Screen
          options={() => options}
          name="Login"
          component={LoginScreen}
        />
        <Stack.Screen
          options={() => options}
          name="TabBar"
          component={TabBar}
        />
        <Stack.Screen name="MyCheckContain" component={MyCheckContain} />
        <Stack.Screen
          name="DetailsCheck"
          component={DetailsCheck}
          options={() => options}
        />

        <Stack.Screen name="HomeScreen" component={HomeScreen} />
        <Stack.Screen
          name="DetailScreen"
          component={DetailScreen}
          options={() => options}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
