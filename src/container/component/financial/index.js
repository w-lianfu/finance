import React, { Component } from 'react'
import { View, Text, ScrollView, Button } from 'react-native'
import { observer } from 'mobx-react'

import FinancialStore from './store'
import { HomeCard } from './styled'
import Colors from '../../../lib/colors'

let store = new FinancialStore()

@observer
class Financial extends Component {

  _changeNum = () => {
    store.changeNum(88)
  }

  render() {
    return (
      <ScrollView>
        <Text>hello</Text>
        <Text>{store.num}</Text>
        <HomeCard bgColor={Colors.red}>
          <Text>Hello, styled components!</Text>
        </HomeCard>
        <Button
          onPress={this._changeNum}
          title='Change Num'
        />
      </ScrollView>
    )
  }
}

export default Financial
