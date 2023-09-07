import { createNativeStackNavigator } from "@react-navigation/native-stack";
import ChatRoom from "../ChatApp/ChatRoom";
import ChatScreen from "../ChatApp/ChatScreen";
import { ChatContextProvider } from "../ChatApp/chatContext";

const Stack = createNativeStackNavigator(); 

export default () => {
    return(
        <ChatContextProvider> 
        <Stack.Navigator> 
            <Stack.Screen name="Chat" component={ChatScreen}/> 
            <Stack.Screen name="ChatRoom" component={ChatRoom}/> 
        </Stack.Navigator>
        </ChatContextProvider>
    )
}