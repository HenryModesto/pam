import { StatusBar } from 'expo-status-bar';
import React, {useState, useEffect} from 'react';
import { StyleSheet, Text, View } from 'react-native';
import AppNavigator from './src/navigations/Navigator'
import * as Font from 'expo-font';
import {AppLoading} from 'expo';
import { isRequired } from 'react-native/Libraries/DeprecatedPropTypes/DeprecatedColorPropType';
import { Repository } from './src/repository/Repository';

export default function App() {
  const [isFontLoaded, setIsFontLoaded] = useState(false);
 
useEffect(() => {

(async () => {
  await Font.loadAsync({
    'SemiBold' : require('./src/fonts/Montserrat-SemiBold.otf'),
    'Medium' : require('./src/fonts/Montserrat-Medium.otf'),
    'Regular' : require('./src/fonts/Montserrat-Regular.otf')
  });
  setIsFontLoaded(true) ;
})();

}, []);


    return (
      <View>
        {
        isFontLoaded === true && <AppNavigator/>
      }
      </View>
      
    );
 
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
