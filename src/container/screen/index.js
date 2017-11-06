import React, { Component } from 'react'
import { TabNavigator } from 'react-navigation'
import Icon from 'react-native-vector-icons/MaterialIcons'

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
        tabBarIcon: ({ tintColor }) => (
          <Icon name='home' size={23} color={tintColor} />
        )
      }
    },
    Chosen: {
      screen: Chosen,
      navigationOptions: {
        tabBarLabel: '精选',
        tabBarIcon: ({ tintColor }) => (
          <Icon name='grade' size={23} color={tintColor} />
        )
      }
    },
    Service: {
      screen: Service,
      navigationOptions: {
        tabBarLabel: '服务',
        tabBarIcon: ({ tintColor }) => (
          <Icon name='widgets' size={23} color={tintColor} />
        )
      }
    },
    Me: {
      screen: Me,
      navigationOptions: {
        tabBarLabel: '我',
        tabBarIcon: ({ tintColor }) => (
          <Icon name='person' size={23} color={tintColor} />
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

