import React from 'react'
import { StackNavigator } from 'react-navigation'

import Screen from './screen'
import Chosen from '../component/chosen'
import Other from '../component/other'
import Sign from '../component/chosen/sign'

let ScreenStack = StackNavigator({
  Screen: {
    screen: Screen,
    navigationOptions: {
      header: null
    }
  },
  Chosen: {
    screen: Chosen,
    navigationOptions: {
      title: '精选'
    }
  },
  Other: {
    screen: Other,
    navigationOptions: {
      title: '其它页面'
    }
  },
  Sign: {
    screen: Sign,
    navigationOptions: {
      title: '签到'
    }
  }
})

export default ScreenStack
