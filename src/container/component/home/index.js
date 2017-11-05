import React, { Component } from 'react'
import { View, Text } from 'react-native'
import { TabNavigator } from 'react-navigation'
import Icon from 'react-native-vector-icons/MaterialIcons'

import Financial from '../financial'
import Ious from '../ious'
import Pay from '../pay'

import Colors from '../../../lib/colors'

const Home = TabNavigator(
  {
    Financial: {
      screen: Financial,
      navigationOptions: {
        tabBarLabel: '理财'
      }
    },
    Ious: {
      screen: Ious,
      navigationOptions: {
        tabBarLabel: '白条'
      }
    },
    Pay: {
      screen: Pay,
      navigationOptions: {
        tabBarLabel: '支付'
      }
    }
  },
  {
    tabBarPosition: 'top',
    swipeEnabled: true,
    tabBarOptions: {
      labelStyle: {
        fontSize: 19,
        marginBottom: 5,
        fontWeight: '500'
      }
    },
    activeTintColor: Colors.mainBlue,
    inactiveTineColor: Colors.c999
  }
)

export default Home
