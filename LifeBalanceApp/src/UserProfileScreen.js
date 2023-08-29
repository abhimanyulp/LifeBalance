import React, { useState, useEffect } from 'react';
import { View, Text, TextInput, Button, StyleSheet } from 'react-native';

const UserProfileScreen = () => {
  const [name, setName] = useState('');
  const [age, setAge] = useState('');
  // Other fields...

  useEffect(() => {
    // Fetch user profile data from the API when the component mounts
    fetch('https://dummyapi.com/user/profile') // Replace with your API endpoint
      .then(response => response.json())
      .then(data => {
        setName(data.name);
        setAge(data.age);
        // Set other fields...
      })
      .catch(error => console.error('Error fetching user profile:', error));
  }, []);

  const saveProfile = () => {
    // Update user profile data on the API
    fetch('https://dummyapi.com/user/profile', {
      method: 'PUT', // Use the appropriate HTTP method
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        name,
        age,
        // Other fields...
      }),
    })
    .then(response => response.json())
    .then(data => {
      console.log('User profile updated successfully:', data);
    })
    .catch(error => console.error('Error updating user profile:', error));
  };

  return (
    <View style={styles.container}>
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

export default UserProfileScreen;
