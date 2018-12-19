import React from 'react';
import { Platform } from 'react-native';
import { Ionicons } from 'react-native-vector-icons';
import { createAppContainer, createBottomTabNavigator, createMaterialTopTabNavigator, createStackNavigator } from 'react-navigation';
import Decks from './components/deck-list.component';
import NewDeck from './components/new-deck.component';

const RouteConfigs = {
  Decks: {
    screen: Decks,
    navigationOptions: {
      tabBarLabel: 'Decks',
      tabBarIcon: ({ tintColor }) => <Ionicons name='ios-albums' size={30} color={tintColor} />
    }
  },
  NewDeck: {
    screen: NewDeck,
    navigationOptions: {
      tabBarLabel: 'New Deck',
      tabBarIcon: ({ tintColor }) => <Ionicons name='ios-create' size={30} color={tintColor} />
    }
  },
};

const TabNavigatorConfig = {
  navigationOptions: {
    header: null
  },
  tabBarOptions: {
    activeTintColor: '#FFCC00',
    style: {
      height: 56,
      backgroundColor: '#ffffff',
      shadowColor: 'rgba(0, 0, 0, 0.24)',
      shadowOffset: {
        width: 0,
        height: 3
      },
      shadowRadius: 6,
      shadowOpacity: 1
    }
  }
};

const Tabs = Platform.OS === 'ios' ? createBottomTabNavigator(RouteConfigs, TabNavigatorConfig) : createMaterialTopTabNavigator(RouteConfigs, TabNavigatorConfig);

const MainNavigator = createStackNavigator({
  Main: {
    screen: Tabs,
    navigationOptions: {
      header: null
    },
  }
});

export default AppNavigator = createAppContainer(MainNavigator)