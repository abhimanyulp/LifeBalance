import React, { useState } from 'react';
import { View, Text, TextInput, Button, StyleSheet } from 'react-native';

const ProgressTrackingScreen = () => {
  const [date, setDate] = useState('');
  const [weight, setWeight] = useState('');
  const [bodyMeasurements, setBodyMeasurements] = useState('');
  const [notes, setNotes] = useState('');

  const trackProgress = () => {
    // Simulating API call
    const progressData = {
      date,
      weight,
      bodyMeasurements,
      notes,
    };

    console.log('Progress tracked:', progressData);
  };

  return (
    <View style={styles.container}>
      <Text>Track Your Progress</Text>
      <TextInput
        placeholder="Date"
        value={date}
        onChangeText={setDate}
      />
      <TextInput
        placeholder="Weight"
        value={weight}
        onChangeText={setWeight}
      />
      <TextInput
        placeholder="Body Measurements"
        value={bodyMeasurements}
        onChangeText={setBodyMeasurements}
      />
      <TextInput
        placeholder="Notes"
        value={notes}
        onChangeText={setNotes}
      />
      <Button title="Track Progress" onPress={trackProgress} />
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

export default ProgressTrackingScreen;
