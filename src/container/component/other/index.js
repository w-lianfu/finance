import React, { Component } from 'react'
import { View, Text } from 'react-native'
import { Button } from 'react-native-elements'
import { navigate } from 'react-navigation'

import Sign from '../chosen/sign'

class Other extends Component {
  constructor(props) {
    super(props)
  }

  _onPress = () => {
    this.props.navigation.navigate('Sign')
  }

  render() {
    return (
      <View>
        <Text>Other</Text>
        <Text>Other</Text>
        <Text>Other</Text>
        <Button title='签到领钢镚' onPress={this._onPress} />
      </View>
    )
  }
}

export default Other
