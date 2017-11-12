import React, { Component } from 'react'
import { View, Text, ScrollView, TouchableHighlight } from 'react-native'
import { StackNavigator, navigate } from 'react-navigation'
import Icon from 'react-native-vector-icons/Entypo'
import { Button } from 'react-native-elements'

import Treasure from '../treasure'
import Financial from './financial'
import Other from '../other'

import FinancialStore from './store'
import Colors from '../../../lib/colors'
import Style from './style'
import PublicStyle from '../../../lib/public'

let FinancialStack = StackNavigator({
  Financial: {
    screen: Financial,
    navigationOptions: {
      title: '金融'
    }
  },
  Other: {
    screen: Other,
    path: '/other',
    navigationOptions: {
      title: '其它'
    }
  }
})

export default FinancialStack
