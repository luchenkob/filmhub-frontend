import {
  Box,
  Button,
  Heading,
  Stack,
  Text,
  useColorModeValue as mode,
  LightMode,
  Badge
} from '@chakra-ui/react'
import * as React from 'react'
import { Swiper, SwiperSlide } from "swiper/react"
import Image from 'next/image'

const options = {
  spaceBetween: 30,
  freeMode: true,
  loop: false,
  slidesPerView: 'auto',
}

const App = ({ data }) => {

  return (
    <Box>
      <Box as="section" bg="gray.800" color="white" py="7.5rem">
        <Box
          maxW={{
            base: 'xl',
            md: '5xl',
          }}
          mx="auto"
          px={{
            base: '6',
            md: '8',
          }}
        >
          <Box textAlign="center">
            <Heading
              as="h1"
              size="3xl"
              fontWeight="extrabold"
              maxW="48rem"
              mx="auto"
              lineHeight="1.2"
              letterSpacing="tight"
            >
              Distribution for every film.
            </Heading>
            <Box margin={`auto`} maxW={500}>
              <Text fontSize="xl" mt="4" maxW="xl" mx="auto">
                Stream to new audiences worldwide. Make money. Maintain your rights.
              </Text>
            </Box>
          </Box>

          <Stack
            justify="center"
            direction={{
              base: 'column',
              md: 'row',
            }}
            mt="10"
            mb="20"
            spacing="4"
          >
            <LightMode>
              <Box display="flex" justifyContent="center" alignItems="flex-start">
                <Box>
                  <Button
                    as="a"
                    href="#"
                    size="lg"
                    display="inline-flex"
                    position="relative"
                    colorScheme="brand"
                    px="8"
                    margin="0 10px"
                    fontWeight="bold"
                    fontSize="md"
                  >
                    <Box textAlign="center">
                      <Text>Get started</Text>
                      <Text fontSize="12px" fontWeight="400" opacity="0.6" textAlign="center">( it's free )</Text>
                    </Box>
                  </Button>
                </Box>
                <Box>
                  <Button
                    as="a"
                    href="#"
                    size="lg"
                    margin="0 10px"
                    colorScheme="whiteAlpha"
                    px="8"
                    fontWeight="bold"
                    fontSize="md"
                  >
                    Sign In
                  </Button>
                </Box>
              </Box>
            </LightMode>
          </Stack>
        </Box>
        <Box>
          <Swiper {...options}>
            {data.posters.map((item, i) => (
              <SwiperSlide style={{ width: 'auto' }} key={`ci-${i}`}>
                <Box border="4px solid white" width={150}>
                  <Image
                    width={150}
                    height={200}
                    objectFit="cover"
                    layout="responsive"
                    src={`/img/${item.img}`}
                    alt={`${item.alt}`}
                  />
                  {item.isNew && <Box position="absolute" top="20px" right="-22px"><Badge px="3" py="1" ml="1" colorScheme="green">New</Badge></Box>}
                  <Box py="3" bg="white">
                    <Text fontSize="13px" textTransform="uppercase" align="center" color={item.color}>{item.name}</Text>
                  </Box>
                </Box>
              </SwiperSlide>
            ))}
          </Swiper>
        </Box>
        <Box margin={`auto`} maxW={1200}>
          <Text opacity="0.7" fontWeight="300" textAlign="center" fontSize="xl" mt="10" mx="auto">
            Join thousands of global filmmakers distributing their films to 100+ streaming channels
          </Text>
        </Box>
        <Box margin={`auto`} maxW={1200}>
          <Text as="h1" textAlign="center" fontSize="32px" mt="16">
            “… dynamic disruptor in the film distribution space”
          </Text>
          <Box textAlign="center" mt={5}>
            <Image
              width={160}
              height={45}
              src={`/img/variety.svg`}
            />
          </Box>
        </Box>
      </Box>
    </Box>
  )
}

export default App;
