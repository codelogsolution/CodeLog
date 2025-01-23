import React, {useEffect} from 'react';
import {View, Image, Dimensions} from 'react-native';
import {CODELOG, LOGO} from '../assets/images/images';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { SCREENS } from './MyEvent';

const SplashScreen = ({navigation}) => {
  useEffect(() => {
    setTimeout(() => {
      retrieveData();
    }, 1200);
  }, []);

  const retrieveData = async () => {
    try {
      const tokenValue = await AsyncStorage.getItem('@token_store');
      console.log('tokenValue::::::', tokenValue);
      if (tokenValue) {
        navigation.replace('BottomTab');
      } else {
        navigation.replace('MyEvent');
      }
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <View
      style={{
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'white',
      }}>
      <Image
        source={CODELOG}
        style={{
          resizeMode:'contain',
          width: Dimensions.get('screen').width * 0.42,
          height: Dimensions.get('screen').height * 0.42,
        }}
      />
    </View>
  );
};

export default SplashScreen;
