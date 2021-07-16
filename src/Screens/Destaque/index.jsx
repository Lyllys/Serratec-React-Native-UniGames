import { createStackNavigator } from '@react-navigation/stack';

const Stack = createStackNavigator();

function DetalheJogo() {
  return (
    <Stack.Navigator>
      <Stack.Screen name="Home" component={Home} />
      <Stack.Screen name="Profile" component={Profile} />
    </Stack.Navigator>
  );
}

export default DetalheJogo;