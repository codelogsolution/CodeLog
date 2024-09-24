import React, {useEffect} from 'react';
import {View, Image} from 'react-native';
import {LOGO} from '../assets/images/images';
import AsyncStorage from '@react-native-async-storage/async-storage';

const SplashScreen = ({navigation}) => {

  useEffect(() => {
    setTimeout(() => {
      retrieveData();
    }, 1000);
  }, []);

  const retrieveData = async () => {
    try {
      const tokenValue = await AsyncStorage.getItem('@token_store');
      console.log('tokenValue::::::', tokenValue);
      if (tokenValue) {
        navigation.replace('BottomTab');
      } else {
        navigation.replace('Login');
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
      <Image source={LOGO} style={{width: 100, height: 100}} />
    </View>
  );
};

export default SplashScreen;
