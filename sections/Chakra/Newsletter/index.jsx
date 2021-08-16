import {
  Box,
  Button,
  Heading,
  Img,
  Input,
  Stack,
  Text,
  Radio,
  RadioGroup,
  useColorModeValue as mode,
} from '@chakra-ui/react'
import * as React from 'react'

const SubscribeForm = () => {
  return (
    <form
      onSubmit={(e) => {
        e.preventDefault() // your subscribe logic here
      }}
    >
      <Stack
        spacing="4"
        direction={{
          base: 'column',
          sm: 'row',
        }}
      >
        <Input type="email" placeholder="Enter your Email" />
        <Button colorScheme="brand" px="10" type="submit">
          Subscribe
        </Button>
      </Stack>
      <Box mt="4">
        <RadioGroup colorScheme="brand" defaultValue="filmmaker">
          <Stack direction="row">
            <Radio value="filmmaker">Filmmaker</Radio>
            <Radio value="channel buyer">Channel buyer</Radio>
            <Radio value="distributor / sales agent">Distributor / Sales agent</Radio>
          </Stack>
        </RadioGroup>
      </Box>
    </form>
  )
}

const App = () => {
  return (
    <Box as="section" py="12">
      <Box
        maxW={{
          base: 'xl',
          md: '5xl',
        }}
        mx="auto"
      >
        <Stack direction="row" justify="center" align="center" spacing="8">
          <Box
            p={{
              base: '6',
              md: '12',
            }}
          >
            <Heading textAlign="center" size="lg" fontWeight="extrabold" mb="2">
              Sounds interesting but not sure yet?
            </Heading>
            <Text textAlign="center" color={mode('gray.600', 'gray.400')} mb="6">
              Follow us and get our occasional newsletter with digital distribution tips and updates on our development.
            </Text>
            <SubscribeForm />
          </Box>
        </Stack>
      </Box>
    </Box>
  )
}

export default App