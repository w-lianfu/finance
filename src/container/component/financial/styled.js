import React from 'react'
import styled from 'styled-components/native'

import Colors from '../../../lib/colors'

let HomeCard = styled.View`
  background-color: ${props => props.bgColor || Colors.white};
  width: 80%;
`

export {
  HomeCard
}
