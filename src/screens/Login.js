import React, {useState} from 'react';
import {
  View,
  Text,
  TextInput,
  Button,
  TouchableOpacity,
  ActivityIndicator,
} from 'react-native';
import {useDispatch, useSelector} from 'react-redux';
import {STATIC_TXT} from '../utils/Constants';
import {loginAction} from '../redux/actions/authAction';
import {useNavigation} from '@react-navigation/native';

const Login = () => {
  const navigation = useNavigation();
  const dispatch = useDispatch();
  const [credentials, setCredentials] = useState({
    username: 'emilys',
    password: 'emilyspass',
  });
  const [loading, setLoading] = useState(false);

  const handleChange = (key, text) => {
    setCredentials({...credentials, [key]: text});
  };

  const login_response = useSelector(state => state?.auth);
  console.log('login_response', login_response);

  const handleLogin = async () => {
    setLoading(true);
    try {
      await dispatch(loginAction(credentials));
      navigation.replace('BottomTab');
      setLoading(false);
    } catch (error) {
      console.error(error);
      setLoading(false);
    }
  };

  return (
    <>
      <View style={{flex: 1, justifyContent: 'center', padding: 20}}>
        <Text
          style={{
            fontSize: 22,
            fontWeight: 'bold',
            marginBottom: 20,
            color: 'black',
          }}>
          {STATIC_TXT.LOGIN}
        </Text>
        <TextInput
          style={{
            height: 42,
            borderWidth: 1,
            borderColor: 'gray',
            paddingHorizontal: 10,
            borderRadius: 5,
            marginBottom: 20,
          }}
          value={credentials.username}
          onChangeText={text => handleChange('username', text)}
          placeholder="Username"
        />
        <TextInput
          style={{
            height: 42,
            borderWidth: 1,
            borderColor: 'gray',
            paddingHorizontal: 10,
            borderRadius: 5,
            marginBottom: 40,
          }}
          value={credentials?.password}
          onChangeText={text => handleChange('password', text)}
          placeholder="Password"
          secureTextEntry={true}
        />
        <TouchableOpacity
          onPress={handleLogin}
          style={{
            backgroundColor: 'red',
            height: 45,
            justifyContent: 'center',
            alignItems: 'center',
            borderRadius: 6,
            marginBottom: 20,
          }}>
          <Text style={{fontSize: 16, fontWeight: 'bold', color: 'white'}}>
            Login
          </Text>
          {loading && (
            <ActivityIndicator
              style={{position: 'absolute', right: 10}}
              size={25}
              color={'white'}
            />
          )}
        </TouchableOpacity>
        <Button title="Signup" />
      </View>
    </>
  );
};

export default Login;
