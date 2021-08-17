import {
  Box,
  Flex,
  HStack,
  SimpleGrid,
  Stack,
  Text,
  useColorModeValue as mode,
} from '@chakra-ui/react'
import * as React from 'react'
import { FaHeart } from 'react-icons/fa'
import { Logo } from './Logo'
import { SocialLink } from './SocialLink'
import { LinkGroup } from './LinkGroup'
import { SubscribeForm } from './SubscribeForm'
import appConfig from "../../../configs/appConfig"

const App = () => (
  <Box as="footer" bg={mode('gray.50', 'gray.800')}>
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
      py={{
        base: '12',
        md: '20',
      }}
    >
      <Flex
        direction={{
          base: 'column',
          lg: 'row',
        }}
        justify="space-between"
        mb={{
          base: '10',
          lg: '16',
        }}
        align="flex-start"
        id="top"
      >
        <SimpleGrid
          flex="1"
          w={{
            base: 'full',
            lg: 'auto',
          }}
          maxW={{
            lg: '2xl',
          }}
          columns={{
            base: 1,
            md: 2,
            lg: 4,
          }}
          spacing={{
            base: '12',
            md: '10',
          }}
          fontSize="sm"
          marginEnd={{
            md: '4',
            lg: '16',
          }}
        >
          {appConfig.footerLinks.map((group, idx) => (
            <LinkGroup key={idx} data={group} />
          ))}
        </SimpleGrid>
        <Box
          flex="2"
          maxW={{
            lg: '420px',
          }}
          ml={{
            lg: 'auto',
          }}
          fontSize="sm"
          mt={{
            base: '12',
            lg: 0,
          }}
        >
          <Text
            casing="uppercase"
            color={mode('gray.800', 'white')}
            mb={{
              base: 6,
              lg: 10,
            }}
            fontWeight="bold"
            letterSpacing="wide"
          >
            Want Filmhub news & updates?
          </Text>
          <Text color={mode('gray.800', 'white')} lineHeight="tall">
            Get Overflow resources, curated content, and design inspiration delivered straight into
            your inbox. Be the first to learn the news about new features and product updates.
          </Text>
          <SubscribeForm />
        </Box>
      </Flex>

      <Flex
        direction={{
          base: 'column-reverse',
          lg: 'row',
        }}
        align={{
          base: 'flex-start',
          lg: 'center',
        }}
        justify="space-between"
        fontSize="sm"
      >
        <Stack
          direction={{
            base: 'column',
            md: 'row',
          }}
          spacing={{
            base: '4',
            md: '12',
          }}
          mt={{
            base: '8',
            lg: 0,
          }}
          w={{
            base: 'full',
            lg: 'auto',
          }}
          justify={{
            base: 'space-between',
            lg: 'flex-start',
          }}
          align={{
            base: 'flex-start',
            md: 'center',
          }}
        >
          <Logo iconColor={mode('brand.500', 'brand.300')} h="6" />
          <HStack
            spacing="2"
            mt={{
              lg: '8',
            }}
            as="ul"
            listStyleType="none"
          >
            {appConfig.socialLinks.map((link, idx) => (
              <Box as="li" key={idx}>
                <SocialLink color={mode('gray.800', 'white')} href={link.href}>
                  <Box srOnly>{link.label}</Box>
                  {link.icon}
                </SocialLink>
              </Box>
            ))}
          </HStack>
        </Stack>
      </Flex>
    </Box>
    <Box py={4} bg={mode('gray.200', 'gray.900')}>
      <Box 
      display="flex"
      alignItems="center"
      maxW={{
        base: 'xl',
        md: '7xl',
      }}
        px={{
          base: '6',
          md: '8',
        }}

        mx="auto">
        <Text color={mode('gray.800', 'gray.500')}>&copy; {new Date().getFullYear()} Filmhub</Text>
        {appConfig.footerBottomLinks.map((link, idx) => (
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
      </Box>
    </Box>
  </Box>
)

const Heart = () => (
  <Box
    display="inline-block"
    mx="1"
    color={mode('blue.500', 'blue.300')}
    fontSize="xs"
    role="img"
    aria-label="Love"
    as={FaHeart}
  />
)

export default App
