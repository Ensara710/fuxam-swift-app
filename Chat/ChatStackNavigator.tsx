  import { createNativeStackNavigator } from "@react-navigation/native-stack";
  import ChatRoom from "./ChatRoom";
  import ChatScreen from "./ChatScreen";

  const Stack = createNativeStackNavigator(); 

  export default () => {
    return(
      <Stack.Navigator> 
        <Stack.Screen name="Chats" component={ChatScreen}/> 
        <Stack.Screen name="ChatRoom" component={ChatRoom}/> 
      </Stack.Navigator>
    )
  }