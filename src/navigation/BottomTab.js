import {View, Text, Image} from 'react-native';
import React from 'react';
import HomeStack from './HomeStack';
import ProductStack from './ProductStack';
import ProfileStack from './ProfileStack';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {
  ACTIVE_HOME,
  ACTIVE_PRODUCT,
  ACTIVE_PROFILE,
  HOME,
  PRODUCT,
  PROFILE,
} from '../assets/images/images';

const Tab = createBottomTabNavigator();

const BottomTab = () => {
  return (
    <Tab.Navigator
      screenOptions={({route}) => ({
        headerShown: false,
        tabBarShowLabel: false,
        tabBarStyle: {
          height: Platform.OS == 'ios' ? 88 : 76,
          backgroundColor: '#2E2E2E',
          borderTopWidth: 0,
          paddingTop: 15,
          paddingBottom: 15,
        },
      })}>
      <Tab.Screen
        name="HomeStack"
        component={HomeStack}
        options={{
          headerShown: false,
          tabBarIcon: ({focused, color, size}) => (
            <View style={{alignItems: 'center'}}>
              <Image
                source={focused ? ACTIVE_HOME : HOME}
                style={{
                  width: size,
                  height: size,
                  marginBottom: 6,
                }}
              />
              <Text
                style={{
                  fontSize: 12,
                  color: focused ? '#019344' : '#888888',
                  //   fontFamily: focused ? 'Montserrat-Bold' : 'Montserrat-Medium',
                }}>
                Home
              </Text>
            </View>
          ),
        }}
      />
      <Tab.Screen
        name="ProductStack"
        component={ProductStack}
        options={{
          headerShown: false,
          tabBarIcon: ({focused, color, size}) => (
            <View style={{alignItems: 'center'}}>
              <Image
                source={focused ? ACTIVE_PRODUCT : PRODUCT}
                style={{
                  width: size,
                  height: size,
                  marginBottom: 6,
                }}
              />
              <Text
                style={{
                  fontSize: 12,
                  color: focused ? '#019344' : '#888888',
                  //   fontFamily: focused ? 'Montserrat-Bold' : 'Montserrat-Medium',
                }}>
                Product
              </Text>
            </View>
          ),
        }}
      />
      <Tab.Screen
        name="ProfileStack"
        component={ProfileStack}
        // listeners={({navigation, route}) => ({
        //   tabPress: e => {
        //     e.preventDefault();
        //     if (USER.isLoggedIn == false) {
        //       navigation.navigate('Login');
        //     } else {
        //       navigation.navigate('Profile');
        //     }
        //   },
        // })}
        options={{
          headerShown: false,
          tabBarIcon: ({focused, color, size}) => (
            <View style={{alignItems: 'center'}}>
              <Image
                source={focused ? ACTIVE_PROFILE : PROFILE}
                style={{
                  width: size,
                  height: size,
                  marginBottom: 6,
                }}
              />
              <Text
                style={{
                  fontSize: 12,
                  color: focused ? '#019344' : '#888888',
                  //   fontFamily: focused ? 'Montserrat-Bold' : 'Montserrat-Medium',
                }}>
                Profile
              </Text>
            </View>
          ),
        }}
      />
    </Tab.Navigator>
  );
};

export default BottomTab;
