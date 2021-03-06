import { Box, Flex, Heading, HStack, Img, Stack, Text, useColorModeValue } from '@chakra-ui/react'
import * as React from 'react'
import { MdGroup, MdPermPhoneMsg } from 'react-icons/md'
import Image from "next/image"
import styles from './animation.module.scss'

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
        pt={20}
      >
        <Box textAlign="center" flex="1" margin="auto" maxW="700px">
          {data.title &&
            <Heading
              size="2xl"
              fontWeight="extrabold"
              color={useColorModeValue('brand.500', 'brand.300')}
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
              mb="10"
            >
              {data.description}
            </Text>
          }
        </Box>


        <Box
          overflow="hidden"
          h={{
            base: '200px',
            md: '200px',
          }}
        >
          <Box className={`${styles.animation}`} display="flex" flexWrap="wrap">
            {data.list.map((item, i) => (
              <Box key={`di-${i}`} display="flex" alignItems="center" justifyContent="center" width={{base: "100px", md: "120px"}} height="80px" flexShrink="0">
                <Image
                  width="90%"
                  height="70%"
                  className={`${styles.img}`}
                  objectFit="contain"
                  src={`/img/${item.img}`}
                  alt={`${item.name}`}
                />
              </Box>
            ))}
            {data.list.map((item, i) => (
              <Box key={`d2i-${i}`} display="flex" alignItems="center" justifyContent="center" width={{base: "100px", md: "120px"}} height="80px" flexShrink="0">
                <Image
                  width="90%"
                  height="70%"
                  className={`${styles.img}`}
                  objectFit="contain"
                  src={`/img/${item.img}`}
                  alt={`${item.name}`}
                />
              </Box>
            ))}
            {data.list.map((item, i) => (
              <Box key={`d3i-${i}`} display="flex" alignItems="center" justifyContent="center" width={{base: "100px", md: "120px"}} height="80px" flexShrink="0">
                <Image
                  width="90%"
                  height="70%"
                  className={`${styles.img}`}
                  objectFit="contain"
                  src={`/img/${item.img}`}
                  alt={`${item.name}`}
                />
              </Box>
            ))}
            {data.list.map((item, i) => (
              <Box key={`d4i-${i}`} display="flex" alignItems="center" justifyContent="center" width={{base: "100px", md: "120px"}} height="80px" flexShrink="0">
                <Image
                  width="90%"
                  height="70%"
                  className={`${styles.img}`}
                  objectFit="contain"
                  src={`/img/${item.img}`}
                  alt={`${item.name}`}
                />
              </Box>
            ))}
            {data.list.map((item, i) => (
              <Box key={`d5i-${i}`} display="flex" alignItems="center" justifyContent="center" width={{base: "100px", md: "120px"}} height="80px" flexShrink="0">
                <Image
                  width="90%"
                  height="70%"
                  className={`${styles.img}`}
                  objectFit="contain"
                  src={`/img/${item.img}`}
                  alt={`${item.name}`}
                />
              </Box>
            ))}
          </Box>
        </Box>
      </Box>
    </Box>
  )
}

export default App;
