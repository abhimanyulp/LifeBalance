import React, { useState } from 'react';
import { View, Text, TextInput, Picker, Button, StyleSheet } from 'react-native';

const UserProfileScreen = () => {
  const [name, setName] = useState('');
  const [age, setAge] = useState('');
  const [gender, setGender] = useState('Male'); // Default value
  // Add similar states for other fields

  const saveProfile = () => {
    // Save profile data to a state management solution or API
  };

  return (
    <View>
      <Text>User Profile</Text>
      <TextInput
        placeholder="Name"
        value={name}
        onChangeText={setName}
      />
      <TextInput
        placeholder="Age"
        value={age}
        onChangeText={setAge}
        keyboardType="numeric"
      />
      <Picker
        selectedValue={gender}
        onValueChange={(itemValue) => setGender(itemValue)}
      >
        <Picker.Item label="Male" value="Male" />
        <Picker.Item label="Female" value="Female" />
        <Picker.Item label="Other" value="Other" />
      </Picker>
      {/* Add other input fields */}
      <Button title="Save Profile" onPress={saveProfile} />
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

export default UserProfileScreen;