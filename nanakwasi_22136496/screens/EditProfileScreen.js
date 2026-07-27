import React, { useState } from 'react';
import { View, Text, TextInput, Button } from 'react-native';

export default function EditProfileScreen({ route, navigation }) {
  const { profile, onSave } = route.params;

  const [name, setName] = useState(profile.name);
  const [programme, setProgramme] = useState(profile.programme);
  const [bio, setBio] = useState(profile.bio);

  const handleSave = () => {
    onSave({ ...profile, name, programme, bio });
    navigation.goBack();
  };

  return (
    <View style={{ flex: 1, padding: 16 }}>
      <Text style={{ fontSize: 20, fontWeight: 'bold', marginBottom: 16 }}>Edit Profile</Text>

      <Text>Name:</Text>
      <TextInput
        value={name}
        onChangeText={setName}
        style={{ borderWidth: 1, borderColor: '#ccc', padding: 8, marginBottom: 12 }}
      />

      <Text>Programme:</Text>
      <TextInput
        value={programme}
        onChangeText={setProgramme}
        style={{ borderWidth: 1, borderColor: '#ccc', padding: 8, marginBottom: 12 }}
      />

      <Text>Bio:</Text>
      <TextInput
        value={bio}
        onChangeText={setBio}
        style={{ borderWidth: 1, borderColor: '#ccc', padding: 8, marginBottom: 16 }}
      />

      <Button title="Save" onPress={handleSave} />
    </View>
  );
}