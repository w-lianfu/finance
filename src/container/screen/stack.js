import React,  { Component } from 'react'
import { StackNavigator } from 'react-navigation'

import '../component/treasure'

let StackScreen = StackNavigator(
  {
    Treasure: {
      screen: Treasure,
      navigationOptions: {
        title: '京东小金库'
      }
    }
  }
)

export default StackScreen
