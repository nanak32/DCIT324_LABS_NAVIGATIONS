import React from 'react';
import { View, Text, FlatList } from 'react-native';

const dummySchedule = [
  { id: '1', day: 'Monday', time: '08:30 - 10:20', course: 'DCIT 324', venue: 'NNB1' },
  { id: '2', day: 'Tuesday', time: '11:30 - 13:20', course: 'DCIT 308', venue: 'JQB 09' },
  { id: '3', day: 'Wednesday', time: '09:30 - 11:20', course: 'DCIT 302', venue: 'Math Dept Lab' },
  { id: '4', day: 'Thursday', time: '13:30 - 15:20', course: 'DCIT 312', venue: 'NNB2' },
  { id: '5', day: 'Friday', time: '10:30 - 12:20', course: 'MATH 356', venue: 'Physical Sciences Annex' },
];

export default function TimetableScreen() {
  return (
    <View style={{ flex: 1, padding: 16 }}>
      <Text style={{ fontSize: 20, fontWeight: 'bold', marginBottom: 12 }}>Class Schedule</Text>
      <FlatList
        data={dummySchedule}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <View style={{ marginBottom: 12, paddingBottom: 8, borderBottomWidth: 1, borderColor: '#eee' }}>
            <Text style={{ fontWeight: 'bold' }}>{item.day} ({item.time})</Text>
            <Text>{item.course} — Venue: {item.venue}</Text>
          </View>
        )}
      />
    </View>
  );
}