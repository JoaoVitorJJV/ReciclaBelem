import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Login from './src/pages/auth/login';
import CadastroPassos from './src/pages/auth/cadastro/cadastroPassos';
import Home from './src/pages/home/home';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { View } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import History from './src/pages/home/history';
import ConfirmarColeta from './src/pages/home/confirmarColeta';
import Profile from './src/pages/home/profile';
import PrivateInformations from './src/pages/profile/personalInformation';
import Payments from './src/pages/profile/payments';
import AddCreditCard from './src/pages/profile/addCreditCard';
import Notifications from './src/pages/profile/notification';
import FAQ from './src/pages/profile/faq';

const Stack = createNativeStackNavigator();
const Tab = createBottomTabNavigator();

const SCREENS_ICONS = {
  Home: 'home-outline',
  Calendar: 'calendar-outline',
  Location: 'location-outline',
  Profile: 'person-outline'
}

const TabNavigation = () => {
  return (
    <Tab.Navigator
      screenOptions={({ route }) => ({
        tabBarIcon: ({ focused, color, size }) => {
          let backgroundColor = focused ? '#E6F7FF' : 'transparent';

          return (
            <View style={{
              backgroundColor: backgroundColor,
              borderRadius: 20,
              padding: 8
            }}>
              <Ionicons name={SCREENS_ICONS[route.name]} size={size} color={color} />
            </View>
          );
        },
        tabBarActiveTintColor: '#1DA1F2',
        tabBarInactiveTintColor: '#A1A1A1',
        tabBarShowLabel: false,
        tabBarStyle: {
          height: 60,
          borderTopWidth: 0,
          backgroundColor: 'white',
          elevation: 5,
        },
        headerShown: false
      })}
    >
      <Tab.Screen name="Home" component={Home} />
      <Tab.Screen name="Calendar" component={History} />
      <Tab.Screen name="Location" component={ConfirmarColeta} />
      <Tab.Screen name="Profile" component={Profile} />
    </Tab.Navigator>
  );
}
export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{
        headerShown: false
      }}>
        <Stack.Screen name="Login" component={Login} />
        <Stack.Screen name="Cadastro" component={CadastroPassos} />
        {/* <Stack.Screen name="Home" component={Home} /> */}
        <Stack.Screen name="Main" component={TabNavigation} />
        <Stack.Screen name="PrivateInformations" component={PrivateInformations} />
        <Stack.Screen name="Payments" component={Payments} />
        <Stack.Screen name="AddPayment" component={AddCreditCard} />
        <Stack.Screen name="Notifications" component={Notifications} />
        <Stack.Screen name="FAQ" component={FAQ} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
