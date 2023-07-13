import * as React from "react";
import { useState } from "react";
import { useTheme } from 'react-native-paper';
import { Provider as PaperProvider } from 'react-native-paper';
import RootNavigator from "./RootNavigato";



export default function Navigation() {
  const theme = useTheme();
  const [mode, useMode] = useState(false)


  return (
    <PaperProvider>
      <RootNavigator />
    </PaperProvider>
  );
}



