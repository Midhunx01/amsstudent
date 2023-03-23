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
import SubjectScreen from './screens/SubjectScreen';
import EvaluationScreen from './screens/EvaluationScreen';
import ProfileScreen from './screens/ProfileScreen';


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
          title: 'Home',
          headerShown: false,
        }} />
        <BottomTab.Screen name='Schedule Screen' component={ScheduleScreen} options={{
          tabBarIcon: ({ size, color }) => {
            return (
              <MaterialIcons name="schedule" size={size} color={color} />)
          },
          title: 'Schedule',
          headerShown: false,
        }} />
        <BottomTab.Screen name='Subject Screen' component={SubjectScreen} options={{
          tabBarIcon: ({ size, color }) => {
            return (
              <MaterialIcons name="assignment" size={size} color={color} />)
          },
          title: 'Subjects',
          headerShown: false,
        }} />
        <BottomTab.Screen name='Attendance Screen' component={AttendanceScreen} options={{
          tabBarIcon: ({ size, color }) => {
            return (
              <FontAwesome name="list-alt" size={size} color={color} />)
          },
          title: 'Attendance',
          headerShown: false
        }} />
        
        <BottomTab.Screen name='Evaluation Screen' component={EvaluationScreen} options={{
          tabBarIcon: ({ size, color }) => {
            return (
              <Ionicons name="analytics" size={size} color={color} />)
          },
          title: 'Evaluation',
          headerShown: false
        }} />
        <BottomTab.Screen name='Profile Screen' component={ProfileScreen} options={{
          tabBarIcon: ({ size, color }) => {
            return (
              <Ionicons name="person-circle-outline" size={size} color={color} />)
          },
          title: 'Profile',
          headerShown: false
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
