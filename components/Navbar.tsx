import { Box, HStack, Link as ChakraLink, Text } from "@chakra-ui/react";
import Link from "next/link";

export default function Navbar() {
  return (
    <Box as="nav" h="5rem">
      <Box
        display="flex"
        alignItems="center"
        h="100%"
        maxW="1440px"
        mx="auto"
        justifyContent="space-between"
        px={{ base: 5 }}
      >
        <ChakraLink as={Link} href="/">
          <Text
            as="a"
            fontWeight="bold"
            fontSize="2rem"
            cursor="pointer"
            color="blue.700"
          >
            pettr
          </Text>
        </ChakraLink>
        <HStack>
          <ChakraLink as={Link} href="/about">
            <Text
              as="a"
              fontWeight="bold"
              cursor="pointer"
              color="blue.700"
              px={30}
              py={2}
              borderRadius="5px"
              transition="all 0.5s"
              _hover={{
                bg: "blue.100",
              }}
            >
              About
            </Text>
          </ChakraLink>
          <ChakraLink as={Link} href="/">
            <Text
              as="a"
              fontWeight="bold"
              cursor="pointer"
              color="blue.700"
              px={30}
              py={2}
              borderRadius="5px"
              transition="all 0.5s"
              _hover={{
                bg: "blue.100",
              }}
            >
              Listings
            </Text>
          </ChakraLink>
          <ChakraLink as={Link} href="/login">
            <Text
              as="a"
              fontWeight="bold"
              bg="blue.900"
              color="white"
              px={30}
              py={2}
              cursor="pointer"
              transition="all 0.5s"
              borderRadius="5px"
              _hover={{
                bg: "blue.700",
              }}
            >
              Login
            </Text>
          </ChakraLink>
        </HStack>
      </Box>
    </Box>
  );
}
