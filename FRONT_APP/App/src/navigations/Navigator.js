import { createStackNavigator } from '@react-navigation/stack';
import AdicionarScreen from "../screens/Adicionar"
import AdicionarScreen from "../screens/Adicionar"
import AdicionarScreen from "../screens/Adicionar"
import AdicionarScreen from "../screens/Adicionar"
import AdicionarScreen from "../screens/Adicionar"

const Stack = createStackNavigator();

export default function MyStack() {
  return (
    <Stack.Navigator>
      <Stack.Screen name="Home" component={Adicionar} />
      <Stack.Screen name="Notifications" component={Notifications} />
      <Stack.Screen name="Profile" component={Profile} />
      <Stack.Screen name="Settings" component={Settings} />
    </Stack.Navigator>
  );
}