import React, { Component } from 'react'
import { TabNavigator } from 'react-navigation'

import Home from '../component/home'
import Chosen from '../component/chosen'
import Service from '../component/service'
import Me from '../component/me'

const Screen = TabNavigator({
  Home: {
    screen: Home
  },
  Chosen: {
    screen: Chosen
  },
  Service: {
    screen: Service
  },
  Me: {
    screen: Me
  }
})

export default Screen

