import React, { useState } from 'react';
import { View, StyleSheet } from 'react-native';
import { Calendar } from 'react-native-calendars';

const CalendarPicker = () => {
  const [selectedDates, setSelectedDates] = useState({});
  const [startDate, setStartDate] = useState(null);

  const handleDayPress = (day) => {
    const { dateString } = day;

    if (!startDate || startDate >= dateString) {
      // If no start date or the selected date is behind the current start date,
      // set the selected date as the new start date
      setStartDate(dateString);
      setSelectedDates({ [dateString]: { startingDay: true, color: 'red', textColor: 'white' } });
    } else {
      // If there's a start date, set the selected date as the end date
      // and highlight all the dates in between
      const startTimestamp = new Date(startDate).getTime();
      const endTimestamp = new Date(dateString).getTime();

      const daysInRange = {};
      for (let i = startTimestamp; i <= endTimestamp; i += 24 * 60 * 60 * 1000) {
        const currentDate = new Date(i);
        daysInRange[currentDate.toISOString().split('T')[0]] = {
          color: 'pink', // Very light pink highlight
        };
      }

      setSelectedDates({
        ...selectedDates,
        ...daysInRange,
        [dateString]: { endingDay: true, color: 'red', textColor: 'white' },
      });
    }
  };

  return (
    <View style={styles.container}>
      <Calendar
        markingType="period"
        markedDates={selectedDates}
        onDayPress={handleDayPress}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default CalendarPicker;
