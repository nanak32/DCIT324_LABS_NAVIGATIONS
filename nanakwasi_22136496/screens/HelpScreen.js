import React from 'react';
import { View, Text } from 'react-native';

export default function HelpScreen() {
  return (
    <View style={{ flex: 1, padding: 16 }}>
      <Text style={{ fontSize: 20, fontWeight: 'bold', marginBottom: 12 }}>Help & Support (FAQ)</Text>
      
      <Text style={{ fontWeight: 'bold' }}>Q: How do I edit my profile?</Text>
      <Text style={{ marginBottom: 12 }}>A: Go to the Profile tab and tap "Edit Profile".</Text>

      <Text style={{ fontWeight: 'bold' }}>Q: Where can I see my class venues?</Text>
      <Text style={{ marginBottom: 12 }}>A: Open the Timetable tab from the bottom navigation.</Text>

      <Text style={{ fontWeight: 'bold' }}>Q: How do I check campus announcements?</Text>
      <Text style={{ marginBottom: 12 }}>A: Open the drawer menu and select "Announcements".</Text>
    </View>
  );
}