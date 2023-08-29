import React, { useState } from 'react';
import { View, Text, TextInput, Button, StyleSheet } from 'react-native';

const FitnessGoalScreen = () => {
  const [goalType, setGoalType] = useState('');
  const [target, setTarget] = useState('');
  const [timeline, setTimeline] = useState('');

  const setFitnessGoal = () => {
    // Simulating API call
    const fitnessGoalData = {
      goalType,
      target,
      timeline,
    };

    console.log('Fitness goal set:', fitnessGoalData);
  };

  return (
    <View style={styles.container}>
      <Text>Set Your Fitness Goal</Text>
      <TextInput
        placeholder="Goal Type"
        value={goalType}
        onChangeText={setGoalType}
      />
      <TextInput
        placeholder="Target"
        value={target}
        onChangeText={setTarget}
      />
      <TextInput
        placeholder="Timeline"
        value={timeline}
        onChangeText={setTimeline}
      />
      <Button title="Set Goal" onPress={setFitnessGoal} />
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

export default FitnessGoalScreen;
