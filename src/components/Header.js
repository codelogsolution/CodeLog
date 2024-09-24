import {View, Text, TouchableOpacity} from 'react-native';
import React from 'react';

const Header = (props) => {

    const {onPress} = props;

  return (
    <View style={{height: 44}}>
        <TouchableOpacity onPress={onPress}>
          <Text>{'<--'}Back</Text>
        </TouchableOpacity>
    </View>
  );
};

export default Header;
