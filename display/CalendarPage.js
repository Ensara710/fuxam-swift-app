import React, { useState } from 'react';
import App from '../react-native-event-calendar/example/App'
import {Provider as PaperProvider} from 'react-native-paper'
import { useTheme } from 'react-native-paper';



const CalendarPage = () => {
 const theme = useTheme(); 
  return (
    <PaperProvider theme={theme}> 
  <App/> 
  </PaperProvider>
  );
};

export default CalendarPage;
