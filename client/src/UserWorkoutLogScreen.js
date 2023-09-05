import React, { useState } from 'react';
import { View, Text, TextInput, Button, StyleSheet } from 'react-native';

const UserWorkoutLogScreen = () => {
  const [date, setDate] = useState('');
  const [selectedPlan, setSelectedPlan] = useState('');
  const [exercises, setExercises] = useState('');
  const [duration, setDuration] = useState('');

  const logWorkout = () => {
    // Simulating API call
    const workoutLogData = {
      date,
      selectedPlan,
      exercises,
      duration,
    };

    console.log('Workout logged:', workoutLogData);
  };

  return (
    <View style={styles.container}>
      <Text>Log Your Workout</Text>
      <TextInput
        placeholder="Date"
        value={date}
        onChangeText={setDate}
      />
      <TextInput
        placeholder="Selected Plan"
        value={selectedPlan}
        onChangeText={setSelectedPlan}
      />
      <TextInput
        placeholder="Exercises"
        value={exercises}
        onChangeText={setExercises}
      />
      <TextInput
        placeholder="Duration"
        value={duration}
        onChangeText={setDuration}
      />
      <Button title="Log Workout" onPress={logWorkout} />
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

export default UserWorkoutLogScreen;
