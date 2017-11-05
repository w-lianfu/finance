import React, { Component } from 'react'
import { View, Text } from 'react-native'
import Icon from 'react-native-vector-icons/MaterialIcons'

import Colors from '../../../lib/colors'

class Home extends Component {
  static navigationOptions = {
    tabBarLabel: '首页',
    tabBarIcon: ({ tintColor }) => (
      <Icon name='home' size={23} color={tintColor} />
    )
  }

  render() {
    return (
      <View>
        <Text>Home Page...</Text>
        <Icon name='home' size={29} color='#333' />
      </View>
    )
  }
}

export default Home
