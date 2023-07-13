import { createNativeStackNavigator } from "@react-navigation/native-stack";
import * as React from "react";
import SignInScreen from "../screens/SignInScreen";
import VerifyCodeScreen from "../screens/VerifyCodeScreen";
import MyProfileScreen from "../screens/MyProfileScreen";
import { RootStackParamList } from "../types";
import { ClerkLoaded, useUser } from "@clerk/clerk-expo";
import { useTheme } from 'react-native-paper';
import { useColorScheme } from "react-native";
import Schedule from "../display/Chat";
import { NavigationContainer } from "@react-navigation/native";

const Stack = createNativeStackNavigator<RootStackParamList>();



const RootNavigator = () => {
    const { isSignedIn } = useUser();
    const scheme = useColorScheme();
    const theme = useTheme();
    return (
<NavigationContainer theme={theme}> 
        <ClerkLoaded>

            <Stack.Navigator screenOptions={{
                headerStyle: { backgroundColor: theme.colors.background },
                headerTintColor: theme.colors.onBackground
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