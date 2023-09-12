import React, { useState, useEffect } from 'react';

export const AppContext = React.createContext({
  channel: null,
  setChannel: (channel: any) => {},
  thread: null,
  setThread: (thread: any) => {},
  token: "",
  
});

export const AppProvider = ({ children}:any) => {
  const [channel, setChannel] = useState(null);
  const [thread, setThread] = useState(null);
  
  const [token, setToken] = useState("")

  useEffect(() => {
    async function fetchToken() {
        const data = await fetch("https://dev.fuxam.app/api/token/stream-token", { method: "GET" })
        const { token } = await data.json()
        console.log({token})
        return token
    }
    fetchToken().then(token => {
console.log("Token successful", token)
        setToken(token)

    }).catch(console.log)


    
}, [])



  return (
    <AppContext.Provider value={{ channel, setChannel, thread, setThread , token}}>
      {children}
    </AppContext.Provider> 
  );
};
export const useAppContext = () => React.useContext(AppContext);
