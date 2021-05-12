/**
 * @format
 */

 import * as React from 'react';
 import {AppRegistry} from 'react-native';
 import App from './src';
 import {name as appName} from './app.json';
 import {StoreProvider} from './src/context/store/index';
 import 'react-native-gesture-handler';
 
 const ContextApp = () => (
   <StoreProvider>
     <App />
   </StoreProvider>
 );
 
 AppRegistry.registerComponent(appName, () => ContextApp);
 