import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import UserProfileScreen from './src/UserProfileScreen';
import TrainerProfileScreen from './src/TrainerProfileScreen';
import WorkoutPlanScreen from './src/WorkoutPlanScreen';
import NutritionPlanScreen from './src/NutritionPlanScreen';
import UserWorkoutLogScreen from './src/UserWorkoutLogScreen';
import FitnessGoalScreen from './src/FitnessGoalScreen';
import ProgressTrackingScreen from './src/ProgressTrackingScreen';
import UserDashboardScreen from './src/UserDashboardScreen'; // Import the dashboard screen

const Stack = createStackNavigator();

const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="UserProfile" component={UserProfileScreen} />
        <Stack.Screen name="TrainerProfile" component={TrainerProfileScreen} />
        <Stack.Screen name="WorkoutPlan" component={WorkoutPlanScreen} />
        <Stack.Screen name="NutritionPlan" component={NutritionPlanScreen} />
        <Stack.Screen name="UserWorkoutLog" component={UserWorkoutLogScreen} />
        <Stack.Screen name="FitnessGoal" component={FitnessGoalScreen} />
        <Stack.Screen name="ProgressTracking" component={ProgressTrackingScreen} />
        <Stack.Screen name="UserDashboard" component={UserDashboardScreen} /> {/* Add the dashboard screen */}
        {/* Add more screens here */}
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;
