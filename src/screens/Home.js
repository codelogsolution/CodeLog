import React from 'react';
import {View, Text} from 'react-native';

const Home = () => {
  return (
    <View
      style={{
        padding: 20,
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
      }}>
      <Text style={{fontSize: 22, fontWeight: 'bold'}}>Welcome to Home</Text>
    </View>
  );
};

export default Home;
