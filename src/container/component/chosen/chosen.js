import React, { Component } from 'react'
import { View, Text } from 'react-native'
import Icon from 'react-native-vector-icons/MaterialIcons'
import { Button } from 'react-native-elements'

import Sign from './sign'

class Chosen extends Component {
  constructor(props) {
    super(props)
  }

  _goTreasure = () => {
    this.props.navigation.navigate('Sign')
  }

  render() {
    return (
      <View>
        <Text>Chosen Page...</Text>
        <Text>Chosen Page...</Text>
        <Text>Chosen Page...</Text>
        <Text>Chosen Page...</Text>
        <Text>Chosen Page...</Text>
        <Button raised backgroundColor='cyan' title='签到领钢镚' onPress={this._goTreasure} />
      </View>
    )
  }
}

export default Chosen
