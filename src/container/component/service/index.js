import React, { Component } from 'react'
import { StackNavigator } from 'react-navigation'

import Service from './service'

let ServiceStack = StackNavigator({
  Service: {
    screen: Service,
    navigationOptions: {
      title: '服务'
    }
  }
})

export default ServiceStack
