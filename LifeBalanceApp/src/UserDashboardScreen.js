import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const UserDashboardScreen = () => {
  // Simulated user data
  const activePlans = ['Plan A', 'Plan B'];
  const currentGoals = ['Lose 5kg', 'Run 5k in 25 minutes'];
  const progress = 60; // Percentage

  return (
    <View style={styles.container}>
      <Text style={styles.heading}>Your Dashboard</Text>
      <Text>Active Plans: {activePlans.join(', ')}</Text>
      <Text>Current Goals: {currentGoals.join(', ')}</Text>
      <Text>Progress: {progress}%</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  heading: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 10,
  },
});

export default UserDashboardScreen;
