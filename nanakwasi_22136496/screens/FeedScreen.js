import React from 'react';
import { View, Text, TouchableOpacity, FlatList } from 'react-native';

const dummyEvents = [
  { id: '1', title: 'UG Career Fair 2026', date: 'Aug 10, 2026', description: 'Meet top tech recruiters at the Great Hall.' },
  { id: '2', title: 'DCIT Hackathon', date: 'Aug 15, 2026', description: '24-hour coding competition at CS Lab 1.' },
  { id: '3', title: 'SRC Townhall Meeting', date: 'Aug 20, 2026', description: 'Discussing campus shuttle services and hostel policies.' },
  { id: '4', title: 'Sports Gala', date: 'Aug 25, 2026', description: 'Inter-hall football and basketball tournaments.' },
  { id: '5', title: 'Freshers Orientation', date: 'Sep 01, 2026', description: 'Welcome session for incoming undergraduate students.' },
];

export default function FeedScreen({ navigation }) {
  return (
    <View style={{ flex: 1, padding: 16 }}>
      <Text style={{ fontSize: 20, fontWeight: 'bold', marginBottom: 12 }}>Campus Feed</Text>
      <FlatList
        data={dummyEvents}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <TouchableOpacity
            style={{ paddingVertical: 12, borderBottomWidth: 1, borderColor: '#eee' }}
            onPress={() => navigation.navigate('EventDetails', { event: item })}
          >
            <Text style={{ fontWeight: 'bold' }}>{item.title}</Text>
            <Text style={{ color: '#666' }}>{item.date}</Text>
          </TouchableOpacity>
        )}
      />
    </View>
  );
}