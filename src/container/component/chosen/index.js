import React, { Component } from 'react'
import { View, Text } from 'react-native'
import { StackNavigator, navigate } from 'react-navigation'
import Icon from 'react-native-vector-icons/MaterialIcons'

import Chosen from './chosen'
import Treasure from '../treasure'

let ChosenStack = StackNavigator({
  Chosen: {
    screen: Chosen,
    navigationOptions: {
      title: '精选'
    }
  },
  Treasure: {
    path: '/treasure',
    screen: Treasure,
    navigationOptions: {
      title: '京东小金库'
    }
  }
})

export default ChosenStack
