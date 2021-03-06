import { Box, Stack, Text, useColorModeValue as mode, } from '@chakra-ui/react'
import * as React from 'react'


export const LinkGroup = (props) => {
  const { data } = props
  const { links, title } = data
  return (
    <Box>
      <Text
        textTransform="uppercase"
        color={mode('gray.800', 'white')}
        mb={{
          base: '6',
          md: '10',
        }}
        fontWeight="bold"
        letterSpacing="wide"
      >
        {title}
      </Text>
      <Stack
        as="ul"
        spacing={{
          base: 2,
          md: 4,
        }}
        listStyleType="none"
      >
        {links.map((link, idx) => (
          <Box as="li" key={idx}>
            <Box
              as="a"
              color={mode('gray.800', 'white')}
              href={link.href}
              _hover={{
                textDecoration: 'underline',
              }}
            >
              <span>{link.label}</span>
              {link.badge && (
                <Box as="span" ms="2">
                  {link.badge}
                </Box>
              )}
            </Box>
          </Box>
        ))}
      </Stack>
    </Box>
  )
}
