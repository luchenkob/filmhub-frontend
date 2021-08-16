import { Box, SimpleGrid, useColorModeValue as mode } from '@chakra-ui/react'
import * as React from 'react'
import { Testimonial } from './Testimonial'

const App = () => {
  return (
    <Box borderRadius={10} as="section" bg={mode('gray.50', 'gray.700')}>
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
        <SimpleGrid
          py="16"
          columns={{
            base: 1,
            lg: 2,
          }}
          spacing={{
            base: '16',
            lg: '32',
          }}
        >
          <Testimonial
            name="Courtney Daniels"
            role="Director of What Other Couples Do"
            image="https://images.unsplash.com/photo-1571175351749-e8d06f275d85?ixid=MXwxMjA3fDB8MHxzZWFyY2h8MTk0fHxsYWR5JTIwc21pbGluZ3xlbnwwfHwwfA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=60"
          >
            I hired a sales agent and got an offer from a reputable distributor, but it wasn’t tempting. I like Filmhub’s simple, straightforward terms.
          </Testimonial>
          <Testimonial
            name="Shaun Mathis"
            role="Director of The Plug"
            image="https://images.unsplash.com/photo-1603987248955-9c142c5ae89b?ixid=MXwxMjA3fDB8MHxzZWFyY2h8MjJ8fGhhbmRzb21lJTIwbWFuJTIwc21pbGluZ3xlbnwwfHwwfA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=60"
          >
            I keep my rights, and the payout is great. Every few weeks, another streaming service picks up my title.
          </Testimonial>
        </SimpleGrid>
      </Box>
    </Box>
  )
}

export default App
