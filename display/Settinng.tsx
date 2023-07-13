import React from 'react'
import { View, Text } from 'react-native'
import { useTheme } from 'react-native-paper';



function Setting() {
    const theme = useTheme();
    return (
        <View style={{ alignItems: 'center', justifyContent: 'center', flex: 1, backgroundColor: theme.colors.background }}>
            <Text style={{ color: theme.colors.onBackground }}>Hello </Text>
        </View>
    )
}
export default Setting; 