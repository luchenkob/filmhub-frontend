import { Box, Flex, Heading, HStack, Img, Stack, Text, useColorModeValue } from '@chakra-ui/react'
import * as React from 'react'
import { MdGroup, MdPermPhoneMsg } from 'react-icons/md'
import Image from "next/image"

const App = ({ data }) => {
  return (
    <Box as="section">
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
        py="12"
      >
        <Flex
          align="center"
          justify="center"
          direction={{
            base: 'column-reverse',
            md: 'row',
          }}
        >
          <Box flex="1" maxW="440px">
            {data.title &&
              <Heading
                size="2xl"
                fontWeight="extrabold"
                color={useColorModeValue('primary.500', 'primary.300')}
                dangerouslySetInnerHTML={{ __html: data.title }}
              >
              </Heading>
            }
            {data.description &&
              <Text
                fontSize="lg"
                fontWeight="medium"
                color={useColorModeValue('gray.500', 'inherit')}
                mt="6"
              >
                {data.description}
              </Text>
            }
          </Box>

          <Box
            aria-hidden
            className="spacer"
            flexShrink={0}
            boxSize={{
              base: '10',
              xl: '20',
            }}
          />

          <Box
            flex="1"
            maxW="560px"
            overflow="hidden"
            display="flex"
            flexWrap="wrap"
            h={{
              base: '400px',
              md: '460px',
            }}
          >
            {data.list.map((item, i) => (
              <Box key={`di-${i}`} display="flex" alignItems="center" justifyContent="center" width="120px" height="80px" flexShrink="0">
                <Image
                  width={100}
                  height={60}
                  src={`/img/${item.img}`}
                  alt={`${item.name}`}
                />
              </Box>
            ))}
          </Box>
        </Flex>
      </Box>
    </Box>
  )
}

export default App;