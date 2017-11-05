import React, { Component } from 'react'
import { View, Text } from 'react-native'
import Icon from 'react-native-vector-icons/MaterialIcons'

class Chosen extends Component {
  static navigationOptions = {
    tabBarLabel: '精选',
    tabBarIcon: ({ tintColor }) => (
      <Icon name='grade' size={23} color={tintColor} />
    )
  }

  render() {
    return (
      <View>
        <Text>Chosen Page...</Text>
        <Text>Chosen Page...</Text>
        <Text>Chosen Page...</Text>
        <Text>Chosen Page...</Text>
        <Text>Chosen Page...</Text>
      </View>
    )
  }
}

export default Chosen
