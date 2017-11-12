import React, { Component } from 'react'
import { View, Text, ScrollView, TouchableHighlight } from 'react-native'
import { navigate } from 'react-navigation'
import { observer } from 'mobx-react'
import Icon from 'react-native-vector-icons/Entypo'
import { Button } from 'react-native-elements'

import FinancialStore from './store'
import Other from '../../other'

import {
  HomeCard, TextFont, TextWhite, CardBody, CardBodyHeader,
  WhiteHeader, CardFooter, CardTab
} from './styled'
import Style from './style'
import Colors from '../../../../lib/colors'
import PublicStyle from '../../../../lib/public'

let store = new FinancialStore()

@observer
class Financial extends Component {
  constructor(props) {
    super(props)
  }

  _onPress = () => {
    this.props.navigation.navigate('Other')
  }

  render() {
    return (
      <ScrollView>
        <View style={Style.CarouselBox}>
          <HomeCard bgColor={Colors.mainBlue}>
            <CardBody>
              <CardBodyHeader>
                <TouchableHighlight onPress={store.toggleEye} underlayColor={Colors.mainBlue} style={{marginTop:0,marginBottom:0,paddingTop:0,paddingBottom:0}}>
                  <Icon name={store.iconName} size={17} color={Colors.white} style={Style.iconStyle} />
                </TouchableHighlight>
              </CardBodyHeader>
              <TextWhite size={16}>总资产</TextWhite>
              <TextWhite size={32} weight={500}>257.83</TextWhite>
              <TextWhite size={17}>今日最新收益 +0.02</TextWhite>
            </CardBody>
            <CardFooter>
              <CardTab>
                <TextWhite>立即测评</TextWhite>
              </CardTab>
              <CardTab>
                <TextWhite>开启加速</TextWhite>
              </CardTab>
              <CardTab>
                <TextWhite>免费领取</TextWhite>
              </CardTab>
            </CardFooter>
          </HomeCard>
          <Button raised icon={{name: 'code'}} title='其它' onPress={this._onPress} />
        </View>
        
      </ScrollView>
    )
  }
}

export default Financial
