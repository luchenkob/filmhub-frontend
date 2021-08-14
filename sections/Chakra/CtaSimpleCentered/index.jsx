import { Box, Button, Heading, Text, DarkMode } from '@chakra-ui/react'
import * as React from 'react'
import Link from "next/link"

const App = ({ data }) => (
  <Box bg="gray.200" as="section">
    <Box
      maxW="2xl"
      mx="auto"
      px={{
        base: '6',
        lg: '8',
      }}
      py={{
        base: '16',
        sm: '20',
      }}
      textAlign="center"
    >
      {data.title &&
        <Heading as="h2" size="3xl" fontWeight="extrabold" letterSpacing="tight">
          {data.title}
        </Heading>
      }
      {data.description &&
        <Text mt="4" fontSize="lg">{data.description}</Text>
      }
      {data.button &&
        <Link href={data.button.link}>
          <Button mt="8" as="a" size="lg" colorScheme="primary" fontWeight="bold">
            {data.button.name}
          </Button>
        </Link>
      }
    </Box>
  </Box>
)

export default App;