import React from 'react'
import { View, Text } from 'react-native'
import { useTheme } from 'react-native-paper';


const Chat = () => {
    const theme = useTheme();

    return (
        <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center', backgroundColor: theme.colors.background }}>
            <Text style={{ color: theme.colors.onBackground }}> Hello </Text>
        </View>
    )
}

export default Chat; 