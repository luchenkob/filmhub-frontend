import {
  border,
  Box,
  Button,
  FormControl,
  FormLabel,
  Input,
  useColorModeValue as mode,
} from '@chakra-ui/react'
import * as React from 'react'

export const SubscribeForm = () => (
  <form
    onSubmit={(e) => {
      e.preventDefault() // add submit logic
    }}
  >
    <Box
      mt="8"
      display={{
        md: 'flex',
      }}
      maxW="xl"
    >
      <FormControl id="email" marginEnd="-1px">
        <FormLabel srOnly>Enter your email</FormLabel>
        <Input
          roundedEnd={{
            md: '0',
          }}
          mb={{
            base: '2',
            lg: '0',
          }}
          flex="1"
          bg={mode('white', 'gray.900')}
          borderColor={mode('gray.300', 'gray.600')}
          color={mode('gray.300', 'gray.300')}
          placeholder="Your email"
          outline="none"
          _focus={{
            borderColor: "transparent"
          }}
        />
      </FormControl>
      <Button
        w={{
          base: 'full',
          md: 'auto',
        }}
        fontSize="sm"
        px="8"
        roundedStart={{
          md: '0',
        }}
        colorScheme="brand"
        textTransform="uppercase"
        fontWeight="bold"
        letterSpacing="wide"
      >
        Subscribe
      </Button>
    </Box>
  </form>
)
