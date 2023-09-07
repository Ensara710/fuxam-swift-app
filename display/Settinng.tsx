import React from 'react'
import { View, Text,} from 'react-native'
import { useColorScheme } from 'react-native';


function Setting() {
    type ColorSchemeName = 'light' | 'dark' | undefined;
    const colorScheme = useColorScheme() as 'light' | 'dark' | undefined;

    const colorSchemes = {
        light: {
          background: 'rgba(249, 249, 249, 1)',
        contrast: 'rgba(5, 14, 63, 1)',
        },
        dark: {
          background:'rgba(18, 2, 23, 1)',
          contrast: 'rgba(225, 241, 250, 1)',
        },
      };
  const colors = colorSchemes[colorScheme || 'light'];

    return (
        <View style={{ alignItems: 'center', justifyContent: 'center', flex: 1, backgroundColor: colors.background }}>
            <Text style={{color: 'white'}}  > Click here for the Chat</Text>
        </View>
    )
}
export default Setting; 