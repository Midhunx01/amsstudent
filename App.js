import { StatusBar } from 'expo-status-bar';
import { StyleSheet } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import { MaterialIcons } from '@expo/vector-icons';
import Ionicons from '@expo/vector-icons/Ionicons';
import { FontAwesome } from '@expo/vector-icons';


import HomeScreen from './screens/HomeScreen';
import ScheduleScreen from './screens/ScheduleScreen';
import AttendanceScreen from './screens/AttendanceScreen';
import AssignmentScreen from './screens/AssignmentScreen';
import EvaluationScreen from './screens/EvaluationScreen';


const BottomTab = createBottomTabNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <StatusBar style="auto" />
      <BottomTab.Navigator>
        <BottomTab.Screen name='Home Screen' component={HomeScreen} options={{
          tabBarIcon: ({ size, color }) => {
            return (
              <Ionicons name="home" size={size} color={color} />)
          },
          title:'Home',
        }} />
        <BottomTab.Screen name='Schedule Screen' component={ScheduleScreen} options={{
          tabBarIcon: ({ size, color }) => {
            return (
              <MaterialIcons name="schedule" size={size} color={color} />)
          },
          title: 'Schedule'
        }} />
        <BottomTab.Screen name='Attendance Screen' component={AttendanceScreen} options={{
          tabBarIcon: ({ size, color }) => {
            return (
              <FontAwesome name="list-alt" size={size} color={color} />)
          },
          title: 'Attendance'
        }} />
        <BottomTab.Screen name='Assignment Screen' component={AssignmentScreen} options={{
          tabBarIcon: ({ size, color }) => {
            return (
              <MaterialIcons name="assignment" size={size} color={color} />)
          },
          title: 'Assignments'
        }} />
        <BottomTab.Screen name='Evaluation Screen' component={EvaluationScreen} options={{
          tabBarIcon: ({ size, color }) => {
            return (
              <Ionicons name="analytics" size={size} color={color} />)
          },
          title: 'Evaluation'
        }} />

      </BottomTab.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
