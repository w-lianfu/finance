import React, { Component } from 'react'
import { TabNavigator } from 'react-navigation'
import Ionicons from 'react-native-vector-icons/Ionicons'

import Home from '../component/home'
import Chosen from '../component/chosen'
import Service from '../component/service'
import Me from '../component/me'

import Colors from '../../lib/colors'

const Screen = TabNavigator(
  {
    Home: {
      screen: Home,
      navigationOptions: {
        tabBarLabel: '首页',
        tabBarIcon: ({ tintColor, focused }) => (
          <Ionicons name={focused ? 'ios-home' : 'ios-star-outline'} size={25} color={tintColor} />
        )
      }
    },
    Chosen: {
      screen: Chosen,
      navigationOptions: {
        tabBarLabel: '精选',
        tabBarIcon: ({ tintColor, focused }) => (
          <Ionicons name={focused ? 'ios-star' : 'ios-star-outline'} size={25} color={tintColor} />
        )
      }
    },
    Service: {
      screen: Service,
      navigationOptions: {
        tabBarLabel: '服务',
        tabBarIcon: ({ tintColor, focused }) => (
          <Ionicons name={focused ? 'ios-ribbon' : 'ios-ribbon-outline'} size={25} color={tintColor} />
        )
      }
    },
    Me: {
      screen: Me,
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

