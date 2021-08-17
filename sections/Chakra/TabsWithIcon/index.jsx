import {
  Box,
  Center,
  Heading,
  Img,
  SimpleGrid,
  Stack,
  useColorModeValue as mode,
} from '@chakra-ui/react'
import * as React from 'react'
import { FaCopy, FaPlug, FaRecycle } from 'react-icons/fa'
import { Feature } from './Feature'
import Testimonials from './TestimonialsTwoColumn'
import Donut from "../../../components/Donut"

const App = () => {
  return (
    <Box as="section" bg={mode('gray.50', 'gray.800')} pt="16" pb="32">
      <Box
        maxW={{
          base: 'xl',
          md: '7xl',
        }}
        mx="auto"
        px={{
          base: '6',
          md: '8',
        }}
      >
        <Heading color={mode('gray.800', 'white')} textAlign="center" letterSpacing="tight" fontWeight="extrabold">
          HOW IT WORKS
        </Heading>
        <Box mt="24">
          <SimpleGrid
            columns={{
              base: 1,
              md: 2,
            }}
            spacing={{
              base: '16',
              md: '8',
            }}
          >
            <Stack spacing="12" maxW="lg">
              <Feature icon={<Box as={FaCopy} w="6" h="6" />}>
                Upload your completed title(s)<br/> – it’s free
              </Feature>
              <Feature icon={<Box as={FaPlug} w="6" h="6" />}>
                Let streaming channels worldwide discover and license your work
              </Feature>
              <Feature icon={<Box as={FaRecycle} w="6" h="6" />}>
                Get paid 80% of all revenue Filmhub receives from your titles
              </Feature>
            </Stack>
            <Box marginLeft={{ base: "auto", md: "left" }} maxW="400px">
              <Donut />
            </Box>
          </SimpleGrid>
        </Box>
        <Box mt={20}>
          <Testimonials />
        </Box>
      </Box>
    </Box>
  )
}

export default App