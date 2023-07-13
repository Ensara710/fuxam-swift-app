import { useAuth, useUser } from "@clerk/clerk-expo";
import * as React from "react";
import { useTheme } from 'react-native-paper';
import { log } from "../logger";
import { RootStackScreenProps } from "../types";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { Provider as PaperProvider } from 'react-native-paper';


//Displays
import Chat from "../display/Chat";
import Schedule from "../display/Schedule";
import Setting from '../display/Settinng'
import { CalendarCheck2, ChefHat, MessageCircle, MessageSquare, MessagesSquare, Settings } from "lucide-react-native";


function MyProfileScreen({ navigation }: RootStackScreenProps<"MyProfile">) {
  const { getToken, signOut } = useAuth();
  const { user } = useUser();
  const theme = useTheme();
  const [sessionToken, setSessionToken] = React.useState("");
  const Tab = createBottomTabNavigator();


  React.useEffect(() => {
    const scheduler = setInterval(async () => {
      const token = await getToken();
      setSessionToken(token as string);
    }, 1000);

    return () => clearInterval(scheduler);
  }, []);

  return (
    <PaperProvider theme={theme}>
      <Tab.Navigator screenOptions={{headerShown: false, tabBarInactiveTintColor: theme.colors.onBackground }}>
        <Tab.Screen name="Schedule" component={Schedule} options={{
          tabBarIcon: ({ color }) => ( <CalendarCheck2 size={22} color={color} />
          ),
        }} />
        <Tab.Screen name="Chat" component={Chat} options={{
          tabBarIcon: ({ color }) => (
            <MessagesSquare size={24} color={color} /> ),
        }} />
        <Tab.Screen name="Settings" component={Setting} options={{
          tabBarIcon: ({ color }) => (
            <Settings size={22} color={color} />
          ),
        }} />

      </Tab.Navigator>
    </PaperProvider>
  );
}

export default MyProfileScreen; 

