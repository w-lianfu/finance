import React, { Component } from 'react'
import { TabNavigator } from 'react-navigation'

import Home from '../component/home'
import Chosen from '../component/chosen'
import Service from '../component/service'
import Me from '../component/me'

import Colors from '../../lib/colors'

const Screen = TabNavigator(
  {
    Home: {
      screen: Home
    },
    Chosen: {
      screen: Chosen
    },
    Service: {
      screen: Service
    },
    Me: {
      screen: Me
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
      iconStyle: {
        color: Colors.red
      },
      tabStyle: {
        backgroundColor: Colors.fff
      },
      style: {
        borderTopWidth: 0,
        shadowColor: Colors.eee,
        shadowOpacity: 0.8
      },
      activeTintColor: Colors.mainRed,
      inactiveTintColor: Colors.c999
    },
    TabBarBottom: {
      labelStyle: {
        color: Colors.red
      }
    }
  }
)

export default Screen

