import React, { Component } from 'react'
import { View, Text } from 'react-native'
import { Button } from 'react-native-elements'
import { navigate } from 'react-navigation'

class Financial extends Component {
  constructor(props) {
    super(props)
  }

  _onPress = () => {
    this.props.navigation.navigate('Other')
  }

  render() {
    return (
      <View>
        <Text>Financial</Text>
        <Text>Financial</Text>
        <Text>Financial</Text>
        <Text>hello</Text>
        <Button title='其它' onPress={this._onPress} />
      </View>
    )
  }
}

export default Financial
