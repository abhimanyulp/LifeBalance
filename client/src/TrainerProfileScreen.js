import React, { useState, useEffect } from 'react';
import { View, Text, TextInput, Button, StyleSheet } from 'react-native';

const TrainerProfileScreen = () => {
  const [name, setName] = useState('');
  const [gender, setGender] = useState('');
  // Other fields...

  useEffect(() => {
    // Fetch trainer profile data from the API when the component mounts
    fetch('https://dummyapi.com/trainer/profile') // Replace with your API endpoint
      .then(response => response.json())
      .then(data => {
        setName(data.name);
        setGender(data.gender);
        // Set other fields...
      })
      .catch(error => console.error('Error fetching trainer profile:', error));
  }, []);

  const saveProfile = () => {
    // Update trainer profile data on the API
    fetch('https://dummyapi.com/trainer/profile', {
      method: 'PUT', // Use the appropriate HTTP method
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        name,
        gender,
        // Other fields...
      }),
    })
    .then(response => response.json())
    .then(data => {
      console.log('Trainer profile updated successfully:', data);
    })
    .catch(error => console.error('Error updating trainer profile:', error));
  };

  return (
    <View style={styles.container}>
      <Text>Trainer Profile</Text>
      <TextInput
        placeholder="Name"
        value={name}
        onChangeText={setName}
      />
      <TextInput
        placeholder="Gender"
        value={gender}
        onChangeText={setGender}
      />
      {/* Other fields... */}
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

export default TrainerProfileScreen;
