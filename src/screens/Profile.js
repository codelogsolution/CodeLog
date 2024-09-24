import {View, Text, Button, Alert, ActivityIndicator} from 'react-native';
import React, {useState} from 'react';
import {useDispatch} from 'react-redux';
import { logoutAction } from '../redux/actions/authAction';

const Profile = ({navigation}) => {
  const dispatch = useDispatch();
  const [loading, setLoading] = useState(false);

  const handleLogout = async () => {
    setLoading(true);
    setTimeout(() => {
      dispatch(logoutAction());
      navigation.replace('Login');
      setLoading(false);
    }, 800);
  };

  const logoutAlert = () => {
    Alert.alert(
      'Log Out',
      `You will be returned to the login screen.`,
      [
        {
          text: 'Cancel',
        },
        {
          text: 'Sign Out',
          onPress: () => handleLogout(),
        },
      ],
      {cancelable: false},
    );
  };

  return (
    <>
      <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
        {loading && (
          <View
            style={{
              backgroundColor: '#00000045',
              flex: 1,
              position: 'absolute',
              width: '100%',
              height: '100%',
              justifyContent: 'center',
              alignItems: 'center',
            }}>
            <ActivityIndicator color={'white'} size={30} />
          </View>
        )}
        <Text style={{fontSize: 30, fontWeight: '600', marginBottom: 20}}>
          Profile
        </Text>
        <Button onPress={logoutAlert} title="Logout" />
      </View>
    </>
  );
};

export default Profile;
