import React, {useState, useEffect,createContext, useContext} from "react";
import {StreamChat} from 'stream-chat'; 
import {useUserData} from '@nhost/react'


export const ChatContext = createContext({});

 const ChatContextProvider = ({ children }: { children: React.ReactNode }) => {

    const [chatClient, setChatClient] = useState<StreamChat>(); 

const user = useUserData();  

useEffect(() => {
    const initChat = async () => {
        if (!user) {
            return; 
        }
        const client = StreamChat.getInstance("92cuq2s3bvjm");
  

await client.connectUser({
    id: user.id, 
    name: user.displayName,
    image: user.avatarUrl 

}, 
client.devToken(user.id)
);  
setChatClient(client); 
}; 

    initChat(); 
},[])

useEffect(() => {
    return () => {  
        if (chatClient) {
            chatClient?.disconnectUser(); 
        }
    }
}, []);


    const value = { username: "Ensara"};
    return
    <ChatContext.Provider value={value}>
        {children}
    </ChatContext.Provider>;

}

export const useChatContext = () => useContext(ChatContext); 

export default ChatContextProvider; 



