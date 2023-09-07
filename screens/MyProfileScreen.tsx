import { useAuth, useUser } from "@clerk/clerk-expo";
import * as React from "react";
import { useTheme } from 'react-native-paper';
import { RootStackScreenProps } from "../types";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { Provider as PaperProvider } from 'react-native-paper';
import Schedule from "../display/Schedule";
import CalendarPage from '../display/CalendarPage'; 
import { useState, useEffect } from "react";
import Setting from '../display/Settinng'
import { CalendarCheck2, MessagesSquare, Settings } from "lucide-react-native";
import { useColorScheme } from "react-native";
import chatNavigation from "../navigation/chatNavigation";

function MyProfileScreen({ navigation }: RootStackScreenProps<"MyProfile">) {
  const { getToken, signOut } = useAuth();
  const { user } = useUser();
  const theme = useTheme(); 
  const [sessionToken, setSessionToken] = React.useState("");
  const Tab = createBottomTabNavigator();
  const [isDarkMode, setIsDarkMode] = useState(false);
  const systemColorScheme = useColorScheme();

  useEffect(() => {
    setIsDarkMode(systemColorScheme === 'dark');
  }, [systemColorScheme]);

  const headerBackgroundColor = isDarkMode ? 'rgba(18, 2, 23, 1)' : 'rgba(249, 249, 249, 1)';
  const headerTintColor = isDarkMode ? 'rgba(249, 249, 249, 1)':'rgba(18, 2, 23, 1)';


  React.useEffect(() => {
    const scheduler = setInterval(async () => {
      const token = await getToken();
      setSessionToken(token as string);
    }, 1000);

    return () => clearInterval(scheduler);
  }, []);

  return (
    <PaperProvider theme={theme}>
      <Tab.Navigator screenOptions={{headerShown: false, tabBarStyle: {backgroundColor: headerBackgroundColor},tabBarInactiveTintColor: theme.colors.onBackground }}>
        <Tab.Screen name="Schedule" component={CalendarPage} options={{
          tabBarIcon: ({ color }) => ( <CalendarCheck2 size={22} color={color} />
          ),
        }} />
        <Tab.Screen name="Chat " component={chatNavigation} options={{ headerShown: false,
          tabBarIcon: ({ color }) => (
            <MessagesSquare size={24} color={color} /> ),
        }} />
        <Tab.Screen name="Settings" component={Schedule} options={{
          tabBarIcon: ({ color }) => (
            <Settings size={22} color={color} />
          ),
        }} />

      </Tab.Navigator>
    </PaperProvider>
  );
}

export default MyProfileScreen;