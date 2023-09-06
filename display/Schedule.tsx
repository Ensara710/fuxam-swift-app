import React, { useEffect, useState} from 'react'
import { View, Text, TouchableOpacity, useColorScheme } from 'react-native'
import { useTheme } from 'react-native-paper';
import { styles } from '../components/Styles'
import { useUser, useAuth } from '@clerk/clerk-expo';
import { log } from "../logger";        

function Schedule() {

  const { user } = useUser();
  const { getToken, signOut } = useAuth();
  const [sessionToken, setSessionToken] = React.useState("");   

 const colorSchemes = {
    light: {
      background: 'rgba(249, 249, 249, 1)',
    contrast: 'rgba(5, 14, 63, 1)',
    },
    dark: {
      background:'rgba(18, 2, 23, 1)',
      contrast: 'rgba(225, 241, 250, 1)',
    },
  };
  

  type ColorSchemeName = 'light' | 'dark' | undefined;
  const colorScheme = useColorScheme() as 'light' | 'dark' | undefined;
const colors = colorSchemes[colorScheme || 'light'];

  // Fetch session token
  useEffect(() => {
    const fetchSessionToken = async () => {
      const token = await getToken();
      if(!token) return console.log("Notoken")
      setSessionToken(token);
    };

    fetchSessionToken();
  }, []);


// Make API request
const onApiRequestPress = async () => {
  try {
    const response = await fetch('https://fuxam.app/api/notifications/get-notifications', {
      method: 'GET',
      headers: {
        'Authorization': `Bearer ${sessionToken}`
      }
    });


    console.log("Step 1")

    console.log(response.status) 


    if (!response.ok) {
      return console.log(response)
    }

    console.log("Step 2")
    console.log(response)


    const data = await response.json();
    console.log('Response data: ', data);
  

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
    <View style={{ alignItems: 'center', justifyContent: 'center', flex: 1, backgroundColor: colors.background }}>
      <Text style={[styles.title, { color: colors.contrast }]}>Hello {user?.firstName}</Text>
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

