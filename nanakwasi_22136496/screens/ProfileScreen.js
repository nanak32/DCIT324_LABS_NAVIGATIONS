import React, { useState } from 'react';
import { View, Text, Button } from 'react-native';

export default function ProfileScreen({ navigation }) {
  const [profile, setProfile] = useState({
    name: 'Agyiri Nana Kwasi',
    indexNumber: '10987654',
    programme: 'BSc Computer Science',
    level: '300',
    bio: 'Passionate software developer and UI designer.',
  });

  return (
    <View style={{ flex: 1, padding: 16 }}>
      <Text style={{ fontSize: 20, fontWeight: 'bold', marginBottom: 16 }}>Student Profile</Text>
      
      <Text>Name: {profile.name}</Text>
      <Text>Index Number: {profile.indexNumber}</Text>
      <Text>Programme: {profile.programme}</Text>
      <Text>Level: {profile.level}</Text>
      <Text style={{ marginVertical: 8 }}>Bio: {profile.bio}</Text>

      <Button
        title="Edit Profile"
        onPress={() =>
          navigation.navigate('EditProfile', {
            profile,
            onSave: (updatedProfile) => setProfile(updatedProfile),
          })
        }
      />
    </View>
  );
}