import React from 'react';
import { View, Text, FlatList } from 'react-native';

const dummyAnnouncements = [
  { id: '1', title: 'Interim Assessment Schedule Released', date: 'Jul 20, 2026', text: 'Check the portal for the updated timetable.' },
  { id: '2', title: 'Library Maintenance Hours', date: 'Jul 18, 2026', text: 'Balme Library will close early this Friday.' },
  { id: '3', title: 'Fee Payment Deadline', date: 'Jul 15, 2026', text: 'Ensure 50% threshold is met before registration closes.' },
  { id: '4', title: 'Campus Wi-Fi Upgrade', date: 'Jul 10, 2026', text: 'Upgrades scheduled overnight; temporary downtime expected.' },
  { id: '5', title: 'SRC Election Nominations Open', date: 'Jul 05, 2026', text: 'Pick up forms from the SRC secretariat.' },
];

export default function AnnouncementsScreen() {
  return (
    <View style={{ flex: 1, padding: 16 }}>
      <Text style={{ fontSize: 20, fontWeight: 'bold', marginBottom: 12 }}>Announcements</Text>
      <FlatList
        data={dummyAnnouncements}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <View style={{ marginBottom: 12, paddingBottom: 8, borderBottomWidth: 1, borderColor: '#eee' }}>
            <Text style={{ fontWeight: 'bold' }}>{item.title}</Text>
            <Text style={{ color: '#666', fontSize: 12 }}>{item.date}</Text>
            <Text>{item.text}</Text>
          </View>
        )}
      />
    </View>
  );
}