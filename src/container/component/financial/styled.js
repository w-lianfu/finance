import React from 'react'
import styled from 'styled-components/native'

import Colors from '../../../lib/colors'

let HomeCard = styled.View`
  background-color: ${props => props.bgColor || Colors.white};
  width: 90%;
  height: 90%;
  border-radius: 6;
  padding-left: 20;
  padding-right: 20;
  padding-top: 10;
  padding-bottom: 10;
`

let TextFont = styled.Text`
  color: ${props => props.color || Colors.c333};
  font-size: ${props => props.size || 16};
  font-weight: ${props => props.weight || 400};
`

let TextWhite = TextFont.extend`
  color: ${Colors.white}
`

let CardBody = styled.View`
  align-items: center;
  justify-content: center;
`

let CardBodyHeader = styled.View`
  align-items: center;
  justify-content: flex-end;
  flex-direction: row;
  width: 100%;
`

let WhiteHeader = styled.Text`
  color: ${Colors.white};
  font-size: 30;
  font-weight: 600;
  margin-top: 5;
  margin-bottom: 5;
`

let CardFooter = styled.View`
  align-items: center;
  border-top-color: ${Colors.ccc};
  border-top-width: 1;
  flex-direction: row;
`

let CardTab = styled.View`
  align-items: center;
  justify-content: center;
  flex: 1;
`

export {
  HomeCard,
  TextFont,
  TextWhite,
  CardBody,
  CardBodyHeader,
  WhiteHeader,
  CardFooter,
  CardTab
}
