import { Box, HStack, Link as ChakraLink, Text } from "@chakra-ui/react";
import Link from "next/link";

export default function Navbar() {
  return (
    <Box as="nav" bg="#C4C4C4" h="5rem">
      <Box
        display="flex"
        alignItems="center"
        h="100%"
        maxW="1440px"
        mx="auto"
        justifyContent="space-between"
      >
        <ChakraLink as={Link} href="/">
          <Text as="a" fontWeight="bold" fontSize="2rem" cursor="pointer">
            pettr
          </Text>
        </ChakraLink>
        <HStack spacing={10}>
          <ChakraLink as={Link} href="/about">
            <Text as="a" fontWeight="bold" cursor="pointer">
              About
            </Text>
          </ChakraLink>
          <ChakraLink as={Link} href="/">
            <Text as="a" fontWeight="bold" cursor="pointer">
              Listings
            </Text>
          </ChakraLink>
          <ChakraLink as={Link} href="/login">
            <Text
              as="a"
              fontWeight="bold"
              bg="black"
              color="white"
              px={30}
              py={2}
              cursor="pointer"
            >
              Login
            </Text>
          </ChakraLink>
        </HStack>
      </Box>
    </Box>
  );
}
