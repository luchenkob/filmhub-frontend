import { Box, Heading, SimpleGrid, Stack, DarkMode } from '@chakra-ui/react'
import * as React from 'react'
import { BiDirections, BiHappyBeaming } from 'react-icons/bi'
import { FaGraduationCap, FaRegLifeRing } from 'react-icons/fa'
import { CTAButton } from './CTAButton'
import { Feature } from './Feature'
import Testimonials from './TestimonialsTwoColumn'
import Donut from "../../../components/Donut"

const App = () => {
  return (
    <Box bg="gray.800" as="section" pb="24">
      <DarkMode>
        <Box bg="gray.800" color="white" pt="24" pb="12rem">
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
            <Stack
              spacing="10"
              direction={{
                base: 'column',
                lg: 'row',
              }}
              align={{
                base: 'flex-start',
                lg: 'center',
              }}
              justify="space-between"
            >
              <Heading
                size="2xl"
                lineHeight="short"
                fontWeight="extrabold"
                maxW={{
                  base: 'unset',
                  lg: '800px',
                }}
              >
                How it works
              </Heading>
              <CTAButton
                w={{
                  base: 'full',
                  md: 'auto',
                }}
              >
                Get Started
              </CTAButton>
            </Stack>
            <SimpleGrid
              display={{
                base: "block",
                md: "flex",
                lg: "flex"
              }}
              alignItems="center"
              columns={{
                base: 1,
                md: 2,
                lg: 4,
              }}
              spacing={{
                base: '12',
                md: '8',
                lg: '2',
              }}
              mt={{
                base: '12',
                md: '20',
              }}
            >
              <Feature icon={<BiDirections />}>
                Upload your completed title(s) – it’s free
              </Feature>
              <Feature icon={<BiHappyBeaming />}>
                Let streaming channels worldwide discover and license your work
              </Feature>
              <Feature icon={<FaGraduationCap />}>
                Get paid 80% of all revenue Filmhub receives from your titles
              </Feature>
              <Box>
                <Donut />
              </Box>
            </SimpleGrid>
          </Box>
        </Box>
        <Box mt="-24">
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
            <Testimonials />
          </Box>
        </Box>
      </DarkMode>
    </Box>
  )
}

export default App
