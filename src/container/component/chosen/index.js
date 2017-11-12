import React, { Component } from 'react'
import { View, Text } from 'react-native'
import { StackNavigator, navigate } from 'react-navigation'
import Icon from 'react-native-vector-icons/MaterialIcons'

import Chosen from './chosen'
import Sign from './sign'

let ChosenStack = StackNavigator({
  Chosen: {
    screen: Chosen,
    navigationOptions: {
      title: '精选'
    }
  },
  Sign: {
    screen: Sign,
    navigationOptions: {
      title: '签到'
    }
  }
})

export default ChosenStack
