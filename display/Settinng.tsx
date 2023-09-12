import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { SafeAreaView } from 'react-native-safe-area-context';
import { Text, View } from 'react-native';
import NavigationStack from '../ChatApp/AppChat';
import { Platform } from 'react-native';
import { ThemeProvider } from 'stream-chat-expo';
import { AppProvider } from '../ChatApp/AppContext'; 

const isIOS = Platform.OS === 'ios';

export const theme = {
  messageList: {
    container: {
      backgroundColor: 'blue',
    },
  },
};

export default function AppChaaat(){  
  return( 
    <>
      { isIOS ? (
        <NavigationContainer independent={true}> 
          <NavigationStack/> 
        </NavigationContainer>
      ) : (
        <AppProvider> 
        <SafeAreaView style={{flex: 1, backgroundColor: 'blue'}}> 
        <ThemeProvider style={theme}> 
          <NavigationContainer independent={true}> 
            <NavigationStack/> 
          </NavigationContainer>
          </ThemeProvider>
        </SafeAreaView>
        </AppProvider>
      )}
    </>
  )
}
