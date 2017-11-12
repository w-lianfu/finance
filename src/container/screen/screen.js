import React, { Component } from 'react'
import { TabNavigator } from 'react-navigation'
import Ionicons from 'react-native-vector-icons/Ionicons'

import HomeStack from '../component/home'
import ChosenStack from '../component/chosen'
import ServiceStack from '../component/service'
import MeStack from '../component/me'

import Colors from '../../lib/colors'

const Screen = TabNavigator(
  {
    HomeStack: {
      screen: HomeStack,
      navigationOptions: {
        tabBarLabel: '首页',
        tabBarIcon: ({ tintColor, focused }) => (
          <Ionicons name={focused ? 'ios-home' : 'ios-home-outline'} size={25} color={tintColor} />
        )
      }
    },
    ChosenStack: {
      screen: ChosenStack,
      navigationOptions: {
        tabBarLabel: '精选',
        tabBarIcon: ({ tintColor, focused }) => (
          <Ionicons name={focused ? 'ios-star' : 'ios-star-outline'} size={25} color={tintColor} />
        )
      }
    },
    ServiceStack: {
      screen: ServiceStack,
      navigationOptions: {
        tabBarLabel: '服务',
        tabBarIcon: ({ tintColor, focused }) => (
          <Ionicons name={focused ? 'ios-ribbon' : 'ios-ribbon-outline'} size={25} color={tintColor} />
        )
      }
    },
    MeStack: {
      screen: MeStack,
      navigationOptions: {
        tabBarLabel: '我',
        tabBarIcon: ({ tintColor, focused }) => (
          <Ionicons name={focused ? 'ios-person' : 'ios-person-outline'} size={25} color={tintColor} />
        )
      }
    }
  },
  {
    tabBarPosition: 'bottom',
    tabBarOptions: {
      showIcon: true,
      labelStyle: {
        fontSize: 13,
        paddingBottom: 3 
      },
      tabStyle: {
        backgroundColor: Colors.fff
      },
      style: {
        borderTopWidth: 0,
        backgroundColor: Colors.white,
        shadowColor: Colors.eee,
        shadowOpacity: 0.8
      },
      activeTintColor: Colors.c333,
      activeBackgroundColor: Colors.white,
      inactiveTintColor: Colors.c999,
      inactiveBackgroundColor: Colors.white
    }
  }
)

export default Screen
