import {createStackNavigator} from '@react-navigation/stack';
import Product from '../screens/Product';

const Stack = createStackNavigator();

const ProductStack = () => {
  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false,
      }}>
      <Stack.Screen name="Product" component={Product} />
    </Stack.Navigator>
  );
};

export default ProductStack;
