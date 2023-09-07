import { createNativeStackNavigator } from "@react-navigation/native-stack";
import * as React from "react";
import SignInScreen from "../screens/SignInScreen";
import VerifyCodeScreen from "../screens/VerifyCodeScreen";
import MyProfileScreen from "../screens/MyProfileScreen";
import { RootStackParamList } from "../types";
import { useEffect, useState } from "react";
import { ClerkLoaded, useUser } from "@clerk/clerk-expo";
import { useTheme } from 'react-native-paper';
import { useColorScheme } from "react-native";
import { NavigationContainer } from "@react-navigation/native";


const Stack = createNativeStackNavigator<RootStackParamList>();



const RootNavigator = () => {
    const { isSignedIn } = useUser()
     const theme = useTheme();

    const [isDarkMode, setIsDarkMode] = useState(false);
  const systemColorScheme = useColorScheme();

  useEffect(() => {
    setIsDarkMode(systemColorScheme === 'dark');
  }, [systemColorScheme]);

  const headerBackgroundColor = isDarkMode ?'rgba(18, 2, 23, 1)' : 'rgba(249, 249, 249, 1)';
  const headerTintColor = isDarkMode ? 'rgba(249, 249, 249, 1)':'rgba(18, 2, 23, 1)';




    return (
<NavigationContainer theme={theme}> 
        <ClerkLoaded>

            <Stack.Navigator screenOptions={{
                headerStyle: { backgroundColor: headerBackgroundColor },
                headerTintColor: headerTintColor
            }}>
                {isSignedIn ? (
                    <> 
                     

                    <Stack.Screen
                        name="MyProfile"
                        component={MyProfileScreen}
                        options={{ title: "MyProfile" }}
                    /> 
                      
</> 
                ) : (
                    <>

                        <Stack.Screen

                            name="SignIn"
                            component={SignInScreen}
                            options={{ title: "Sign In" }}
                        />
                        <Stack.Screen
                            name="VerifyCode"
                            component={VerifyCodeScreen}
                            options={{ title: "Sign Up" }}
                        />

                    </>
                )}
            </Stack.Navigator>

        </ClerkLoaded>
</NavigationContainer>
    );
};

export default RootNavigator; 