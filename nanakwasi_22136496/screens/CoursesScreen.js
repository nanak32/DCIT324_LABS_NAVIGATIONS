import React from 'react';
import { View, Text, FlatList } from 'react-native';

const dummyCourses = [
  { id: '1', code: 'DCIT 324', title: 'Mobile Application Development', credits: 3 },
  { id: '2', code: 'DCIT 308', title: 'Operating Systems', credits: 3 },
  { id: '3', code: 'DCIT 302', title: 'Human-Computer Interaction', credits: 3 },
  { id: '4', code: 'DCIT 312', title: 'Information Security', credits: 3 },
  { id: '5', code: 'MATH 356', title: 'Computational Mathematics', credits: 3 },
];

export default function CoursesScreen() {
  return (
    <View style={{ flex: 1, padding: 16 }}>
      <Text style={{ fontSize: 20, fontWeight: 'bold', marginBottom: 12 }}>Enrolled Courses</Text>
      <FlatList
        data={dummyCourses}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <View style={{ marginBottom: 12, paddingBottom: 8, borderBottomWidth: 1, borderColor: '#eee' }}>
            <Text style={{ fontWeight: 'bold' }}>{item.code}: {item.title}</Text>
            <Text>Credit Hours: {item.credits}</Text>
          </View>
        )}
      />
    </View>
  );
}