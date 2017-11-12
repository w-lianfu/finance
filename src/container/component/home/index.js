import React from 'react'
import { View, Text } from 'react-navigation'
import { StackNavigator, navigate } from 'react-navigation'

import Financial from './financial'
import Other from '../other'

let Home = StackNavigator({
  Financial: {
    screen: Financial,
    navigationOptions: {
      title: '金融'
    }
  },
  Other: {
    screen: Other,
    navigationOptions: {
      title: '其它'
    }
  }
})

export default Home
