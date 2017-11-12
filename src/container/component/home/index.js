import React from 'react'
import { StackNavigator } from 'react-navigation'

import Financial from './financial'

let HomeStack = StackNavigator({
  Financial: {
    screen: Financial,
    navigationOptions: {
      title: '金融'
    }
  }
})

export default HomeStack
