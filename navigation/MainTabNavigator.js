import React from 'react';
import { Platform, Alert } from 'react-native';
import { createStackNavigator, createBottomTabNavigator } from 'react-navigation';


import TabBarIcon from '../components/TabBarIcon';
import TodoScreen from '../screens/TodoScreen';
import AchievementsScreen from '../screens/AchievementsScreen';
import MapScreen from '../screens/MapScreen';
import CompletedScreen from '../screens/CompletedScreen';

const TodoStack = createStackNavigator({
  Home: TodoScreen,
});

TodoStack.navigationOptions = {
  tabBarLabel: 'Todo',
  tabBarIcon: ({ focused }) => (
    <TabBarIcon
      focused={focused}
      name={
        Platform.OS === 'ios'
          ? `ios-checkmark-circle${focused ? '' : '-outline'}`
          : 'md-checkmark-circle'
      }
    />
  ),
};

const CompletedStack = createStackNavigator({
  Home: CompletedScreen,
});

CompletedStack.navigationOptions = {
  tabBarLabel: 'Completed',
  tabBarIcon: ({ focused }) => (
    <TabBarIcon
      focused={focused}
      name={
        Platform.OS === 'ios'
          ? `ios-checkmark-circle${focused ? '' : '-outline'}`
          : 'md-checkmark-circle'
      }
    />
  ),
};

const AchievementsStack = createStackNavigator({
  Links: AchievementsScreen,
});

AchievementsStack.navigationOptions = {
  tabBarLabel: 'Achievements',
  tabBarIcon: ({ focused }) => (
    <TabBarIcon
      focused={focused}
      name={Platform.OS === 'ios' ? `ios-trophy${focused ? '' : '-outline'}` : 'md-link'}
    />
  ),
  
};

const SettingsStack = createStackNavigator({
  Settings: MapScreen,
});

SettingsStack.navigationOptions = {
  tabBarLabel: 'Map',
  tabBarIcon: ({ focused }) => (
    <TabBarIcon
      focused={focused}
      name={Platform.OS === 'ios' ? `ios-map${focused ? '' : '-outline'}` : 'md-options'}
    />
  ),
};

export default createBottomTabNavigator({
  TodoStack,
  CompletedStack,
  AchievementsStack,
});

// export default createBottomTabNavigator({
//   TodoStack,
//   AchievementsStack,
//   SettingsStack,
// });
