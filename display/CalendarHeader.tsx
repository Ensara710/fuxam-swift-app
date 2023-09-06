import React, { useState } from 'react';
import dayjs from 'dayjs';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';

export const CalendarHeader = () => {
  const currentDate = dayjs();
  const [selectedDay, setSelectedDay] = useState(currentDate);
  
  const startOfWeek = currentDate.startOf('week');
  const daysOfWeek = Array.from(Array(7), (_, i) => startOfWeek.add(i, 'week'));

  const selectDay = (day: any) => {
    setSelectedDay(day);
  }

  return (
    <View style={styles.headerContainer}>
      {daysOfWeek.map((day, index) => (
        <TouchableOpacity key={index} onPress={() => selectDay(day)}>
          <Text style={styles.headerText}>
            {day.format('MM/DD/YYYY') === selectedDay.format('MM/DD/YYYY') ? 
            <Text style={styles.selectedDay}>{day.format('MM/DD')}</Text> : 
            <Text style={styles.unselectedDay}>{day.format('MM/DD')}</Text>}
          </Text>
        </TouchableOpacity>
      ))}
    </View>
  );
}

const styles = StyleSheet.create({
  headerContainer: {
    height: 50,
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
    backgroundColor: '#f5f5f5',
  },
  headerText: {
    fontSize: 20,
  },
  selectedDay: {
    fontWeight: 'bold',
    color: 'blue',
  },
  unselectedDay: {
    fontWeight: 'normal',
    color: 'black',
  },
});
