import {createStackNavigator} from '@react-navigation/stack';
import Splash from '../screens/Splash';
import BottomTab from './BottomTab';
import {View} from 'react-native';
import Login from '../screens/Login';
import MyDashboardContainer from '../screens/MyDashboard/MyDashboard.container';
import TabComponent from '../screens/SelectedTabMultiple/TabsSelected';

const Stack = createStackNavigator();

const AppNavigator = () => {
  return (
    // <Stack.Navigator
    //   screenOptions={{
    //     headerShown: false,
    //   }}>
    //   <Stack.Screen name="Splash" component={Splash} />
    //   {/* <Stack.Screen name="Login" component={Login} />
    //   <Stack.Screen name="BottomTab" component={BottomTab} /> */}
    // </Stack.Navigator>
    <View style={{flex:1, padding: 20}}>
      {/* <MyDashboardContainer /> */}
      <TabComponent />
    </View>
  );
};

export default AppNavigator;
