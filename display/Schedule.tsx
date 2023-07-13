import React, { useEffect } from 'react'
import { View, Text, TouchableOpacity } from 'react-native'
import { useTheme } from 'react-native-paper';
import { styles } from '../components/Styles'
import { useUser, useAuth } from '@clerk/clerk-expo';
import { log } from "../logger";

function Schedule() {
  const theme = useTheme();
  const { user } = useUser();
  const { getSessionToken, signOut } = useAuth();
  const [sessionToken, setSessionToken] = React.useState("");   

  // Fetch session token
  useEffect(() => {
    const fetchSessionToken = async () => {
      const token = await getSessionToken();
      setSessionToken(token);
    };

    fetchSessionToken();
  }, [getSessionToken]);

// Make API request
const onApiRequestPress = async () => {
  try {
    const response = await fetch('https://fuxam.app/api/notifications/get-notifications', {
      method: 'GET',
      headers: {
        Authorization: `Bearer ${sessionToken}`,
      },
    });

    if (!response.ok) {
      return console.log(response)
    }

    const data = await response.json();
    console.log(data); 

  } catch (error) {
    console.error(error);
  }
};


  const onSignOutPress = async () => {
    try {
      await signOut();
    } catch (err: any) {
      log("Error:> " + err?.status || "");
    }
  };

  return (
    <View style={{ alignItems: 'center', justifyContent: 'center', flex: 1, backgroundColor: theme.colors.background }}>

      <Text style={[styles.title, { color: theme.colors.onBackground }]}>Hello {user?.firstName}</Text>
      <TouchableOpacity onPress={onApiRequestPress} style={styles.link}>
        <Text style={styles.linkText}>Make API Request</Text>
      </TouchableOpacity>
      <TouchableOpacity onPress={onSignOutPress} style={styles.link}>
        <Text style={styles.linkText}>Sign out</Text>
      </TouchableOpacity>
    </View>
  )
}
export default Schedule; 

