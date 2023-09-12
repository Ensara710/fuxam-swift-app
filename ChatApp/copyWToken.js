import React, { useState, useEffect } from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { Text, View } from 'react-native';
import {
  OverlayProvider, Chat, ChannelList, Channel,
  MessageList,
  MessageInput, Thread, ChannelPreviewMessenger, ThemeProvider
} from 'stream-chat-expo';
import { StreamChat } from 'stream-chat';
import { chatApiKey, chatUserId } from './chatConfig';
import { useColorScheme } from "react-native";
import { useAppContext } from './AppContext';
import { useUser } from '@clerk/clerk-expo'

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

const ThreadScreen = (props) => {
  const { channel, thread } = useAppContext();

  return (
    <Channel channel={channel} thread={thread} threadList>
      <Thread />
    </Channel>
  );
};


const ChannelListScreen = props => {
  const { setChannel } = useAppContext();
  return (

    <ChannelList
      onSelect={(channel) => {
        const { navigation } = props;
        setChannel(channel);
        navigation.navigate('ChannelScreen');
      }}
      filters={filters}
      sort={sort}
      Preview={CustomListItem}
    />

  );
};

const ChannelScreen = props => {
  
  const [isDarkMode, setIsDarkMode] = useState(false);
  const systemColorScheme = useColorScheme();
  const { channel } = useAppContext();

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
    <Channel channel={channel}>
      <MessageList />
      <MessageInput />
    </Channel>
    </ThemeProvider>
  );
};


const NavigationStack = () => {
  const [isDarkMode, setIsDarkMode] = useState(false);
  const systemColorScheme = useColorScheme();
  const { thread, token } = useAppContext();

  

  const [chatClient, setChatClient] = useState(null)
  const user = useUser();


  useEffect(() => {
      const initChat = async () => {
  
          try {
              if (!user) {
                  return;
              }
              if (!token) {
                  return;
              }
              const client = StreamChat.getInstance("2zjxb7sj47je");

              await client.connectUser({
                  id: user.id,
                  name: user.displayName,
                  image: user.avatarUrl
              }, token)

              setChatClient(client);
          } catch (error) {
              console.error("Failed to initialize chat: ", error);
          }
      };

      initChat();
      

  }, [user, token]);

 
     


  useEffect(() => {
    setIsDarkMode(systemColorScheme === 'dark');
  }, [systemColorScheme]);

  const headerBackgroundColor = isDarkMode ? 'rgba(18, 2, 23, 1)' : 'rgba(249, 249, 249, 1)';
  const headerTintColor = isDarkMode ? 'rgba(249, 249, 249, 1)' : 'rgba(18, 2, 23, 1)';
 
 // const { clientIsReady } = useChatClient();

 // if (!clientIsReady) {
  //  return <Text>Loading chat ...</Text>
  //}


  const theme = {
    ChannelPreviewMessenger: {
      container: {
        backgroundColor: 'red'
      }
    }
  }

if (!token){
  return null; 
}

  return (
    <OverlayProvider value={{ style: theme }}>
      <Chat client={chatClient} thread={thread}>

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