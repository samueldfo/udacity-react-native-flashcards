import React from 'react';
import { Platform } from 'react-native';
import { Ionicons } from 'react-native-vector-icons';
import { createAppContainer, createBottomTabNavigator, createMaterialTopTabNavigator, createStackNavigator } from 'react-navigation';
import Card from './components/card.component';
import Decks from './components/deck-list.component';
import DeckMenu from './components/deck-menu.component';
import NewCard from './components/new-card.component';
import NewDeck from './components/new-deck.component';
import { Color } from './constants';

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
    },
  },
};

const TabNavigatorConfig = {
  tabBarOptions: {
    activeTintColor: Color.Border,
    style: {
      height: 56,
      backgroundColor: Color.White,
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

const Tabs = Platform.OS === 'ios' ?
  createBottomTabNavigator(RouteConfigs, TabNavigatorConfig) :
  createMaterialTopTabNavigator(RouteConfigs, TabNavigatorConfig);

const MainNavigator = createStackNavigator({
  Main: {
    screen: Tabs,
    navigationOptions: {
      header: null
    },
  },
  DeckMenu: {
    screen: DeckMenu,
  },
  Card: {
    screen: Card,
  },
  NewCard: {
    screen: NewCard,
  },
})

export default AppNavigator = createAppContainer(MainNavigator)