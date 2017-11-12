import React from 'react'
import { StackNavigator } from 'react-navigation'


import Chosen from './chosen'

let ChosenStack = StackNavigator({
  Chosen: {
    screen: Chosen,
    navigationOptions: {
      title: '精选'
    }
  }
})

export default ChosenStack
