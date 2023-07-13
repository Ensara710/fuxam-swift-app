import { SignedIn, SignedOut } from "@clerk/clerk-expo";
import * as React from "react";
import { Text, View } from "react-native";
import { useTheme } from 'react-native-paper';
import { RootStackScreenProps } from "../types";
import { styles } from '../components/Styles'
import MyProfileScreen from './MyProfileScreen'

export default function SafeMyProfileScreen(
    props: RootStackScreenProps<"MyProfile">
) {
    const theme = useTheme();
    return (
        <>
            <SignedIn>
                <MyProfileScreen {...props} />
            </SignedIn>
            <SignedOut>
                <View style={[styles.container, { backgroundColor: theme.colors.background }]}>
                    <Text style={{ color: theme.colors.onBackground }}>Unauthorized</Text>
                </View>
            </SignedOut>
        </>
    );
}