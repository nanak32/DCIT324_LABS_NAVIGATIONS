import React from 'react';
import { View, Text, Button } from 'react-native';

export default function EventDetailsScreen({ route, navigation }) {
  const { event } = route.params;

  return (
    <View style={{ flex: 1, padding: 16 }}>
      <Text style={{ fontSize: 22, fontWeight: 'bold', marginBottom: 8 }}>{event.title}</Text>
      <Text style={{ fontSize: 14, color: '#666', marginBottom: 16 }}>Date: {event.date}</Text>
      <Text style={{ fontSize: 16, marginBottom: 24 }}>{event.description}</Text>
      <Button title="Back to Feed" onPress={() => navigation.goBack()} />
    </View>
  );
}