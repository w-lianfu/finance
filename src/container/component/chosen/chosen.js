import React, { Component } from 'react'
import { View, Text } from 'react-native'
import Icon from 'react-native-vector-icons/MaterialIcons'
import { Button } from 'react-native-elements'

import Treasure from '../treasure'

class Chosen extends Component {
  constructor(props) {
    super(props)
  }

  _goTreasure = () => {
    this.props.navigation.navigate('Treasure')
  }

  render() {
    return (
      <View>
        <Text>Chosen Page...</Text>
        <Text>Chosen Page...</Text>
        <Text>Chosen Page...</Text>
        <Text>Chosen Page...</Text>
        <Text>Chosen Page...</Text>
        <Button raised backgroundColor='cyan' title='京东小金库' onPress={this._goTreasure} />
      </View>
    )
  }
}

export default Chosen
