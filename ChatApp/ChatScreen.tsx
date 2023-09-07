import { View, Text } from "lucide-react-native";
import React, {createContext, useContext} from "react";
import { useChatContext } from "./chatContext";


const ChatScreen = () => {
    const {username} = useChatContext(); 
    return(
        <View> 
            <Text> {username} </Text>
        </View>
    )
}
export default ChatScreen; 