import 'react-native-gesture-handler';
import * as React from "react";
import { Provider as PaperProvider } from 'react-native-paper';
import RootNavigator from "./RootNavigato";
import { GestureHandlerRootView } from 'react-native-gesture-handler'; 

export default function Navigation() {

 
  

  return (
    <GestureHandlerRootView style={{flex: 1}}> 
    <PaperProvider>
      <RootNavigator />
    </PaperProvider>
    </GestureHandlerRootView>
  );
}



