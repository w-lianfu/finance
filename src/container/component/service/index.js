import React, { Component } from 'react'
import { View, Text } from 'react-native'
import Icon from 'react-native-vector-icons/MaterialIcons'

class Service extends Component {
  static navigationOptions = {
    tabBarLabel: '服务',
    tabBarIcon: ({ tintColor }) => (
      <Icon name='widgets' size={23} color={tintColor} />
    )
  }

  render() {
    return (
      <View>
        <Text>Service Page...</Text>
        <Text>Service Page...</Text>
        <Text>Service Page...</Text>
        <Text>Service Page...</Text>
        <Text>Service Page...</Text>
        <Text>Service Page...</Text>
        <Text>Service Page...</Text>
        <Text>Service Page...</Text>
        <Text>Service Page...</Text>
        <Text>Service Page...</Text>
      </View>
    )
  }
}

export default Service
