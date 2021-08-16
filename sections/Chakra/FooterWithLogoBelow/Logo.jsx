import { useToken } from '@chakra-ui/react'
import * as React from 'react'
import Icon from "../../../components/Icon"

export const Logo = (props) => {
  const { iconColor = 'currentColor', ...rest } = props
  const color = useToken('colors', iconColor)
  return <Icon fill={color} variant="logo"/>
}
