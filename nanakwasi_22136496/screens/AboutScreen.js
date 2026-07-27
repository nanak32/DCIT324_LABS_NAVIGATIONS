import React from 'react';
import { View, Text } from 'react-native';

export default function AboutScreen() {
  return (
    <View style={{ flex: 1, padding: 16 }}>
      <Text style={{ fontSize: 22, fontWeight: 'bold', marginBottom: 8 }}>Campus Connect</Text>
      <Text style={{ marginBottom: 16 }}>A central mobile navigation app for University of Ghana students.</Text>
      <Text>Developer: Agyiri Nana Kwasi</Text>
      <Text>Student ID: 10987654</Text>
    </View>
  );
}