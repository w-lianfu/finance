import React, { Component } from 'react'
import { View, Text } from 'react-native'
import Icon from 'react-native-vector-icons/MaterialIcons'

class Me extends Component {
  static navigationOptions = {
    tabBarLabel: '我',
    tabBarIcon: ({ tintColor }) => (
      <Icon name='person' size={23} color={tintColor} />
    )
  }

  render() {
    return (
      <View>
        <Text>Me Page...</Text>
        <Text>Me Page...</Text>
        <Text>Me Page...</Text>
      </View>
    )
  }
}

export default Me
