import { EventItem, RangeTime, TimelineCalendar } from '@howljs/calendar-kit';
import React, { useState } from 'react';
import { SafeAreaView} from 'react-native';
import { useTheme } from 'react-native-paper';
import { Provider as PaperProvider } from 'react-native-paper';
import { WeekCalendar } from 'react-native-calendars';

const Calendar = () => {

  const [events, setEvents] = useState<EventItem[]>([]);

  const _onDragCreateEnd = (event: RangeTime) => {
    const randomId = Math.random().toString(36).slice(2, 10);
    const newEvent = {
      id: randomId,
      title: "Fuxam",
      start: event.start,
      end: event.end,
      color: '#CF9FFF', 
    }; 
    setEvents((prev) => [...prev, newEvent]);
  };

  const theme = useTheme(); 

  return (
    <PaperProvider theme={theme}> 
    <SafeAreaView style={{flex: 1, borderColor: 'purple',  backgroundColor: theme.colors.background,}}> 
      <TimelineCalendar
        viewMode="day"
        events={events}
        allowDragToCreate
        onDragCreateEnd={_onDragCreateEnd}
        dragCreateInterval={120}
        dragStep={20} 
        
        theme={{
          ...theme,
          backgroundColor: {
            color: theme.colors.outline, 
          } as any,
          hourText:{
            color: 'gray'
          } as any, 
          cellBorderColor: theme.colors.outlineVariant,
          
          dragHourContainer: {
            backgroundColor: theme.colors.outlineVariant,
            opacity: 90,
            borderColor: 'white' , 
            borderRadius: 26,
          },
          dragHourText: { color: '#CF9FFF' },
          dragCreateItemBackgroundColor: '#CF9FFF',
          }}
          
      />
    </SafeAreaView>
    </PaperProvider>
  );
};

export default Calendar;