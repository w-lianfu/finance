import React, { Component } from 'react'
import { View, Text } from 'react-native'
import { Button } from 'react-native-elements'
import { navigate } from 'react-navigation'

class Other extends Component {
  constructor(props) {
    super(props)
  }

  _onPress = () => {
    this.props.navigation.navigate('Financial')
  }

  render() {
    return (
      <View>
        <Text>Other</Text>
        <Text>Other</Text>
        <Text>Other</Text>
        <Button title='金融' onPress={this._onPress} />
      </View>
    )
  }
}

export default Other
