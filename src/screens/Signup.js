import React, {useState} from 'react';
import {useDispatch} from 'react-redux';
import {View, Text, TextInput, Button, Alert} from 'react-native';

const Signup = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const dispatch = useDispatch();

  const handleSubmit = async () => {
    Alert.alert('testingggg!!!')
    // const credentials = {username, password};
    // try {
    //   const response = await dispatch(signup(credentials));
    //   // Handle signup success
    // } catch (error) {
    //   // Handle signup error
    // }
  };

  return (
    <View>
      <Text>Signup</Text>
      <TextInput
        value={username}
        onChangeText={text => setUsername(text)}
        placeholder="Username"
      />
      <TextInput
        value={password}
        onChangeText={text => setPassword(text)}
        placeholder="Password"
        secureTextEntry={true}
      />
      <Button title="Signup" onPress={handleSubmit} />
    </View>
  );
};

export default Signup;
