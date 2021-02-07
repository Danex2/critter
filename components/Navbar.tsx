import {
  Box,
  HStack,
  IconButton,
  Link as ChakraLink,
  Text,
  Drawer,
  DrawerBody,
  DrawerHeader,
  DrawerOverlay,
  DrawerContent,
  DrawerCloseButton,
  useDisclosure,
  Stack,
  Icon,
} from "@chakra-ui/react";
import Link from "next/link";
import { useRef } from "react";
import { GiHamburgerMenu } from "react-icons/gi";
import { BiDoorOpen, BiSearchAlt2 } from "react-icons/bi";
import { AiOutlineQuestionCircle } from "react-icons/ai";

export default function Navbar() {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const btnRef = useRef();
  return (
    <>
      <Box as="nav" h="5rem" borderBottom="1px solid #E2E8F0">
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
              fontSize="2xl"
              cursor="pointer"
              color="blue.700"
              textTransform="uppercase"
            >
              Pet
              <Text as="span" color="blue.400">
                Finder
              </Text>
            </Text>
          </ChakraLink>
          <HStack display={{ base: "none", lg: "block" }}>
            <ChakraLink as={Link} href="/about">
              <Text
                as="a"
                fontWeight="bold"
                cursor="pointer"
                color="gray.500"
                px={30}
                py={2}
                borderRadius="5px"
                transition="all 0.5s"
                _hover={{
                  bg: "blue.100",
                  color: "blue.700",
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
                color="gray.500"
                px={30}
                py={2}
                borderRadius="5px"
                transition="all 0.5s"
                _hover={{
                  bg: "blue.100",
                  color: "blue.700",
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
          <Box display={{ base: "block", lg: "none" }}>
            <IconButton
              aria-label="Open menu for more options"
              icon={<GiHamburgerMenu />}
              colorScheme="whiteAlpha"
              color="blue.900"
              size="lg"
              ref={btnRef}
              onClick={onOpen}
            />
          </Box>
        </Box>
      </Box>
      <Drawer
        isOpen={isOpen}
        placement="left"
        onClose={onClose}
        finalFocusRef={btnRef}
      >
        <DrawerOverlay>
          <DrawerContent>
            <DrawerCloseButton />
            <DrawerHeader>
              <Text
                as="h1"
                fontWeight="bold"
                fontSize="xl"
                cursor="pointer"
                color="blue.700"
                textTransform="uppercase"
              >
                Pet
                <Text as="span" color="blue.400">
                  Finder
                </Text>
              </Text>
            </DrawerHeader>
            <DrawerBody>
              <Stack>
                <Box
                  _hover={{
                    bg: "blue.100",
                    color: "blue.700",
                  }}
                  color="gray.500"
                  px={5}
                  py={2}
                  borderRadius="5px"
                  transition="all 0.5s"
                  cursor="pointer"
                  display="flex"
                  alignItems="center"
                >
                  <Icon as={BiDoorOpen} mr={3} color="blue.600" w={6} h={6} />
                  <ChakraLink as={Link} href="/login">
                    <Text as="a" fontWeight="bold">
                      Login
                    </Text>
                  </ChakraLink>
                </Box>
                <Box
                  _hover={{
                    bg: "blue.100",
                    color: "blue.700",
                  }}
                  color="gray.500"
                  px={5}
                  py={2}
                  borderRadius="5px"
                  transition="all 0.5s"
                  cursor="pointer"
                  display="flex"
                  alignItems="center"
                >
                  <Icon as={BiSearchAlt2} mr={3} color="blue.600" w={6} h={6} />
                  <ChakraLink as={Link} href="/">
                    <Text as="a" fontWeight="bold">
                      Listings
                    </Text>
                  </ChakraLink>
                </Box>
                <Box
                  _hover={{
                    bg: "blue.100",
                    color: "blue.700",
                  }}
                  color="gray.500"
                  px={5}
                  py={2}
                  borderRadius="5px"
                  transition="all 0.5s"
                  cursor="pointer"
                  display="flex"
                  alignItems="center"
                >
                  <Icon
                    as={AiOutlineQuestionCircle}
                    mr={3}
                    color="blue.600"
                    w={6}
                    h={6}
                  />
                  <ChakraLink as={Link} href="/about">
                    <Text as="a" fontWeight="bold">
                      About
                    </Text>
                  </ChakraLink>
                </Box>
              </Stack>
            </DrawerBody>
          </DrawerContent>
        </DrawerOverlay>
      </Drawer>
    </>
  );
}
