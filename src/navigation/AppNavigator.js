import {createStackNavigator} from '@react-navigation/stack';
import Splash from '../screens/Splash';
import BottomTab from './BottomTab';
import {View} from 'react-native';
import Login from '../screens/Login';

const Stack = createStackNavigator();

const AppNavigator = () => {
  return (
      <Stack.Navigator
        screenOptions={{
          headerShown: false,
        }}>
        <Stack.Screen name="Splash" component={Splash} />
        <Stack.Screen name="Login" component={Login} />
        <Stack.Screen name="BottomTab" component={BottomTab} />
      </Stack.Navigator>
  );
};

export default AppNavigator;
