
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import * as React from "react";
import { useState } from "react";
import { RootStackParamList } from "../types";
import { useTheme } from 'react-native-paper';
import { Provider as PaperProvider } from 'react-native-paper';
import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs';
import Schedule from './Chat'
import Chat from "./Schedule";
import Setting from './Settinng'
import { AntDesign } from '@expo/vector-icons';
import { FontAwesome } from '@expo/vector-icons';
import { Ionicons } from '@expo/vector-icons';

export default function NavBar() {
    const theme = useTheme();
    const [mode, useMode] = useState(false)
    const color = useTheme();
    const Tab = createMaterialBottomTabNavigator(); 

    ;


    return (
        <PaperProvider>
            <NavigationContainer theme={theme}  style={{ backgroundColor: theme.colors.background }}>
                <Tab.Navigator labeled={true} barStyle={{ backgroundColor: theme.colors.background }}
                    activeColor={theme.colors.onBackground}>

                    <Tab.Screen name="Schedule" component={Schedule}
                        options={{
                            tabBarIcon: ({ color }) => (<AntDesign name="calendar" size={24} color="black" />
                            ),
                        }} />

                    <Tab.Screen name="Chat" component={Chat} options={{
                        tabBarIcon: ({ color }) => (
                            <FontAwesome name="wechat" size={24} color={theme.colors.onBackground} />),
                    }} />

                    <Tab.Screen name="Settings" component={Setting} options={{
                        tabBarIcon: ({ color }) => (
                            <Ionicons name="settings-outline" size={24} color={theme.colors.onBackground} />
                        ),
                    }} />


                </Tab.Navigator>

            </NavigationContainer>
        </PaperProvider>
    );
}