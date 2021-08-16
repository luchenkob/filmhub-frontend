import { Box, Stack, Text } from '@chakra-ui/react'
import * as React from 'react'

export const Feature = (props) => {
  const { title, children, icon } = props
  return (
    <Box textAlign={{base: "center", md: "left"}} marginBottom={{base: "1rem", md: "0"}}>
      <Box display={{base: "inline-block", md: "block"}} color="blue.300" fontSize="2.5rem">
        {icon}
      </Box>
      <Stack maxW={{base: "260px", md: "400px"}} margin={{base: "auto", md: "0"}} mt="6">
        <Text as="h3" fontSize="lg" fontWeight="bold">
          {title}
        </Text>
        <Text pr="6" lineHeight="tall" color="gray.400">
          {children}
        </Text>
      </Stack>
    </Box>
  )
}
