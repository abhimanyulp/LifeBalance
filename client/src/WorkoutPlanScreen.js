import React, { useState, useEffect } from 'react';
import { View, Text, TextInput, Button, StyleSheet } from 'react-native';

const WorkoutPlanScreen = () => {
  const [planName, setPlanName] = useState('');
  const [goal, setGoal] = useState('');
  // Other fields...

  useEffect(() => {
    fetch('https://dummyapi.com/workout/plan')
      .then(response => response.json())
      .then(data => {
        setPlanName(data.planName);
        setGoal(data.goal);
        // Set other fields...
      })
      .catch(error => console.error('Error fetching workout plan:', error));
  }, []);

  const savePlan = () => {
    fetch('https://dummyapi.com/workout/plan', {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        planName,
        goal,
        // Other fields...
      }),
    })
    .then(response => response.json())
    .then(data => {
      console.log('Workout plan updated successfully:', data);
    })
    .catch(error => console.error('Error updating workout plan:', error));
  };

  return (
    <View style={styles.container}>
      <Text>Workout Plan</Text>
      <TextInput
        placeholder="Plan Name"
        value={planName}
        onChangeText={setPlanName}
      />
      <TextInput
        placeholder="Goal"
        value={goal}
        onChangeText={setGoal}
      />
      {/* Other fields... */}
      <Button title="Save Plan" onPress={savePlan} />
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

export default WorkoutPlanScreen;
