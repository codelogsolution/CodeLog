import {View, Text} from 'react-native';
import React from 'react';

const Product = () => {
  return (
    <View
      style={{
        padding: 20,
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
      }}>
      <Text style={{fontSize: 22, fontWeight: 'bold'}}>Products</Text>
    </View>
  );
};

export default Product;
