import { Flex, Icon, Box, SimpleGrid, GridItem, Stack, useColorModeValue, chakra } from '@chakra-ui/react'

const Feature = (props) => {
  return (
    <Flex>
      <Flex shrink={0}>
        <Icon
          boxSize={5}
          mt={1}
          mr={2}
          color={useColorModeValue("brand.500", "brand.300")}
          viewBox="0 0 20 20"
          fill="currentColor"
        >
          <path
            fillRule="evenodd"
            d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
            clipRule="evenodd"
          ></path>
        </Icon>
      </Flex>
      <Box ml={4}>
        <chakra.dt
          fontSize="lg"
          fontWeight="bold"
          lineHeight="6"
          color={useColorModeValue("gray.900", "white")}
        >
          {props.title}
        </chakra.dt>
        <chakra.dd mt={2} color={useColorModeValue("gray.500", "gray.400")}>
          {props.children}
        </chakra.dd>
      </Box>
    </Flex>
  );
};

const App = () => {
  return (

    <Flex
      bg={useColorModeValue("gray.200", "gray.600")}
      p={20}
      w="auto"
      justifyContent="center"
      alignItems="center"
    >
      <Box
        shadow="xl"
        bg={useColorModeValue("white", "gray.800")}
        px={8}
        py={20}
        mx="auto"
      >
        <SimpleGrid
          alignItems="center"
          columns={{ base: 1, lg: 3 }}
          spacingY={{ base: 10, lg: 32 }}
          spacingX={{ base: 10, lg: 24 }}
        >
          <Box alignSelf="start">
            <chakra.h2
              color={useColorModeValue("brand.500", "gray.400")}
              fontWeight="semibold"
              textTransform="uppercase"
              letterSpacing="wide"
            >
              Everything you need
            </chakra.h2>
            <chakra.h2
              mb={3}
              maxW={300}
              fontSize={{ base: "3xl", md: "4xl" }}
              fontWeight="extrabold"
              textAlign={{ base: "center", sm: "left" }}
              color={useColorModeValue("gray.900", "white")}
              lineHeight="shorter"
              letterSpacing="tight"
            >
              Your Distribution Destination.
            </chakra.h2>
            <chakra.p
              mb={6}
              fontSize={{ base: "lg", md: "xl" }}
              textAlign={{ base: "center", sm: "left" }}
              color={useColorModeValue("gray.600", "gray.500")}
            >
              List your completed films, series, and shorts for free so streaming services can discover and license your work.
            </chakra.p>
            <chakra.p
              mb={6}
              fontSize={{ base: "lg", md: "xl" }}
              textAlign={{ base: "center", sm: "left" }}
              color={useColorModeValue("gray.600", "gray.500")}
            >
              Once revenue starts flowing, 80% goes to you. No deductions or fees. That's it.
            </chakra.p>
          </Box>
          <GridItem colSpan={2}>
            <Stack
              spacing={{ base: 10, md: 0 }}
              display={{ md: "grid" }}
              gridTemplateColumns={{ md: "repeat(2,1fr)" }}
              gridColumnGap={{ md: 8 }}
              gridRowGap={{ md: 10 }}
            >
              <Feature title="Maintain your rights.">
                Take control of your film's distribution and monetization strategy. Make your titles available to select channels and delist anytime.{" "}
              </Feature>
              <Feature title="Bypass gatekeepers.">
                Once you list, our technology automatically markets your title to the most relevant buyers. No sales agent or distributors necessary.
              </Feature>
              <Feature title="Reach relevant channel buyers.">
                {" "}
                Distribute any complated film, series, or short.
              </Feature>
              <Feature title="Eliminate upfront risk.">
                {" "}
                There are no fees or upfront costs: just an 80-20 revenue share once streaming channels order your listed titles.{" "}
              </Feature>
              <Feature title="Share our access and rates.">
                {" "}
                We've negotiated non-exclusive revenue-share deals with channel partners, so you get access only available to large distributors.
              </Feature>
              <Feature title="Get automated reporting and transparent payments">
                {" "}
                We only get paid when you do, so we chase down channels, get you reports, and pay you on time—every single quarter.{" "}
              </Feature>
            </Stack>
          </GridItem>
        </SimpleGrid>
      </Box>
    </Flex>)
}

export default App