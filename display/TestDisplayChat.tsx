import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { SafeAreaView } from 'react-native-safe-area-context';
import { Text } from 'react-native';
import { useChatClient } from '../ChatApp/useChatClient'; 
import { OverlayProvider, Chat } from 'stream-chat-react-native'; 
import { StreamChat } from 'stream-chat';
import { chatApiKey } from '../ChatApp/chatConfig';
import AppChat from '../ChatApp/AppChat';


const Stack = createStackNavigator();

const HomeScreen = () => <Text>Home Screen</Text>;  

const chatClient = StreamChat.getInstance(chatApiKey);
const NavigationStack = () => {
    const { clientIsReady } = useChatClient();

    if (!clientIsReady) {
      return <Text>Loading chat ...</Text>
    }
  return (
  
    <Stack.Navigator>
      <Stack.Screen name='Home' component={AppChat} />
    </Stack.Navigator>
  
  );
};

export default NavigationStack; 