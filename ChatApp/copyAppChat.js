import React, { useState, useEffect } from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { Text, View } from 'react-native';
import { useChatClient } from './useChatClient';
import {
  OverlayProvider, Chat, ChannelList, Channel,
  MessageList,
  MessageInput, Thread, ChannelPreviewMessenger, ThemeProvider
} from 'stream-chat-expo';
import { StreamChat } from 'stream-chat';
import { chatApiKey, chatUserId } from './chatConfig';
import { useColorScheme } from "react-native";

const Stack = createStackNavigator();

const filters = {
  members: {
    '$in': [chatUserId]
  },
};
const sort = {
  last_message_at: -1,
};

const CustomListItem = (props) => {
  const { unread } = props;
  const backgroundColor = unread ? 'gray' : '#B3CCF5';

  return (
    <View style={{ backgroundColor }}>
      <ChannelPreviewMessenger {...props} />
    </View>
  );
};



const ThreadScreen = props => {
  const { route } = props;
  const { params: { channel, thread } } = route;
  return (
    <Channel channel={channel} thread={thread} threadList>
      <Thread />
    </Channel>
  );
}

const ChannelListScreen = props => {
  return (

    <ChannelList
      onSelect={(channel) => {
        const { navigation } = props;
        navigation.navigate('ChannelScreen', { channel});
      }}
      filters={filters}
      sort={sort}
      Preview={CustomListItem}
    />

  );
};

const ChannelScreen = props => {
  const { route } = props;
  const { params: { channel, setThread } } = route;
  const [isDarkMode, setIsDarkMode] = useState(false);
  const systemColorScheme = useColorScheme();

  const messageInputBgColor = isDarkMode ? 'rgba(18, 2, 23, 1)' : 'rgba(249, 249, 249, 1)';
  const messageInputTextColor = isDarkMode ? 'rgba(249, 249, 249, 1)' : 'rgba(18, 2, 23, 1)';

  useEffect(() => {
    setIsDarkMode(systemColorScheme === 'dark');
  }, [systemColorScheme]);

  const headerBackgroundColor = isDarkMode ? 'rgba(18, 2, 23, 1)' : 'rgba(249, 249, 249, 1)';
  const headerTintColor = isDarkMode ? 'rgba(249, 249, 249, 1)' : 'rgba(18, 2, 23, 1)';

  const themes = {
    messageList: {
      container: {
        backgroundColor: headerBackgroundColor,
      },
    },
    messageInput: {
      container: {
        backgroundColor: messageInputBgColor
      },
      messageInput: {
        text: {
          color: 'white'
        }
      }
    },
  };



  return (
    <ThemeProvider style={themes}>
      <Channel channel={channel} >
        <MessageList
          onThreadSelect={(message) => {
            const { navigation } = props;
            if (channel?.id) {
              setThread(message);
              navigation.navigate('ThreadScreen', { setThread });
            }
          }}
        />
        <MessageInput />
      </Channel>
    </ThemeProvider>
  );
};

const chatClient = StreamChat.getInstance(chatApiKey);

const NavigationStack = () => {
  const [isDarkMode, setIsDarkMode] = useState(false);
  const systemColorScheme = useColorScheme();

  useEffect(() => {
    setIsDarkMode(systemColorScheme === 'dark');
  }, [systemColorScheme]);

  const headerBackgroundColor = isDarkMode ? 'rgba(18, 2, 23, 1)' : 'rgba(249, 249, 249, 1)';
  const headerTintColor = isDarkMode ? 'rgba(249, 249, 249, 1)' : 'rgba(18, 2, 23, 1)';
  const { clientIsReady } = useChatClient();

  if (!clientIsReady) {
    return <Text>Loading chat ...</Text>
  }

  const theme = {
    ChannelPreviewMessenger: {
      container: {
        backgroundColor: 'red'
      }
    }
  }



  return (
    <OverlayProvider value={{ style: theme }}>
      <Chat client={chatClient}>
        <Stack.Navigator>
          <Stack.Screen
            name="ChannelList"
            component={ChannelListScreen}
            options={{
              headerStyle: { backgroundColor: headerBackgroundColor },
              headerTintColor: headerTintColor,
            }}
          />
          <Stack.Screen
            name="ChannelScreen"
            component={ChannelScreen}
            options={{
              headerStyle: { backgroundColor: headerBackgroundColor },
              headerTintColor: headerTintColor,
            }}
          />
          <Stack.Screen name="ThreadScreen" component={ThreadScreen} />
        </Stack.Navigator>

      </Chat>
    </OverlayProvider>
  );
};

export default NavigationStack; 