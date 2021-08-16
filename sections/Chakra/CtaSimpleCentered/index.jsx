import { Box, Button, Heading, Text, useColorModeValue as mode } from '@chakra-ui/react'
import * as React from 'react'
import Link from "next/link"

const App = ({ data }) => (
  <Box bg={mode('gray.200', 'gray.700')} as="section">
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
        <Heading color={mode('gray.900', 'gray.200')} as="h2" size="3xl" fontWeight="extrabold" letterSpacing="tight" dangerouslySetInnerHTML={{ __html: data.title }}>
          
        </Heading>
      }
      {data.description &&
        <Text color={mode('gray.700', 'gray.200')} mt="4" fontSize="lg" dangerouslySetInnerHTML={{ __html: data.description }}></Text>
      }
      {data.button &&
        <Link href={data.button.link}>
          <Button mt="8" as="a" size="lg" colorScheme="brand" fontWeight="bold">
            {data.button.name}
          </Button>
        </Link>
      }
    </Box>
  </Box>
)

export default App;