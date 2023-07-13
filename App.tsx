import React from "react";
import useCachedResources from "./hooks/useCachedResources";
import Navigation from "./navigation";
import { ClerkProvider } from "@clerk/clerk-expo";
import { tokenCache } from "./cache";
import { Provider as PaperProvider } from 'react-native-paper';
import { useColorScheme } from "react-native";
import { useTheme } from 'react-native-paper';


// const publishableKey = "pk_test_ZW1lcmdpbmctc2hlZXBkb2ctNDAuY2xlcmsuYWNjb3VudHMuZGV2JA";

export default function App() {
  let colorScheme = useColorScheme();
  const theme = useTheme();
  const isLoadingComplete = useCachedResources();
 console.log("huhuhhu",process.env.NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY)
  if (!isLoadingComplete) {
    return null;
  } else {
    return (
      
      <PaperProvider theme={theme}>
      <ClerkProvider publishableKey={process.env.NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY!} tokenCache={tokenCache}>
        <Navigation />
      </ClerkProvider>
    </PaperProvider>
  );
}; }