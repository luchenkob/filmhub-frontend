import { chakra, useToken } from '@chakra-ui/react'
import * as React from 'react'
import Icon from "../../Icon"

export const Logo = (props) => {
  const { iconColor = 'currentColor', ...rest } = props
  const color = useToken('colors', iconColor)
  console.log(color)
  return <Icon fill={color} variant="logo"/>
}
