import { Center, Stack, Text, useColorModeValue as mode } from '@chakra-ui/react'
import * as React from 'react'

export const Feature = (props) => {
  const { title, children, icon } = props
  return (
    <Stack direction="row" w="100%" spacing="6">
      <Center aria-hidden flexShrink={0} w="12" h="12" rounded="md" color="white" bg="blue.500">
        {icon}
      </Center>
      <Stack>
        {title &&
          <Text color={mode('gray.800', 'white')} as="h3" fontSize="xl" fontWeight="extrabold">
            {title}
          </Text>
        }
        <Text pr="6" marginTop="-10px" fontSize="1.6rem" color={mode('gray.600', 'gray.400')} lineHeight="tall">
          {children}
        </Text>
      </Stack>
    </Stack>
  )
}