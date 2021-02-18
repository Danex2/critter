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
  Image,
  List,
  ListItem,
} from "@chakra-ui/react";
import Link from "next/link";
import { useRef, useState } from "react";
import { GiHamburgerMenu } from "react-icons/gi";
import { BiDoorOpen, BiSearchAlt2 } from "react-icons/bi";
import { AiOutlineQuestionCircle } from "react-icons/ai";
import { signOut, useSession } from "next-auth/client";
import { BiChevronDown } from "react-icons/bi";

export default function Navbar() {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const btnRef = useRef();
  const [session] = useSession();
  const [dropdownOpen, setDropdownOpen] = useState(false);
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
              data-cy="logo"
            >
              Pet
              <Text as="span" color="blue.400">
                Finder
              </Text>
            </Text>
          </ChakraLink>
          {(session?.user as any)?.id ? (
            <Box position="relative" display={{ base: "none", lg: "block" }}>
              <Box
                as="button"
                display="flex"
                alignItems="center"
                onClick={() => setDropdownOpen(!dropdownOpen)}
              >
                <Image
                  borderRadius="full"
                  boxSize="30px"
                  src={session.user.image}
                  alt={`${session.user.name}'s profile picture`}
                />
                <Icon as={BiChevronDown} w={7} h={7} ml={2} />
              </Box>
              <Box
                position="absolute"
                right="-50px"
                top="40px"
                bg="white"
                boxShadow="lg"
                borderRadius={4}
                border="1px solid #ececee"
                zIndex={1000}
                display={dropdownOpen ? "block" : "none"}
              >
                <List w={240} px={2} py={3}>
                  <Stack>
                    {[
                      { name: "Create Ad", route: "/create" },
                      { name: "Edit Ad", route: "/edit" },
                      { name: "Listings", route: "/" },
                      { name: "About", route: "/about" },
                    ].map(({ name, route }) => (
                      <ListItem key={name}>
                        <ChakraLink as={Link} href={route}>
                          <Text
                            as="a"
                            _hover={{
                              bg: "blue.200",
                              color: "blue.800",
                            }}
                            transition="0.3s"
                            color="gray.800"
                            px={2}
                            py={1}
                            borderRadius={4}
                            display="block"
                            cursor="pointer"
                          >
                            {name}
                          </Text>
                        </ChakraLink>
                      </ListItem>
                    ))}
                    <ListItem onClick={() => signOut()}>
                      <Text
                        as="a"
                        _hover={{
                          bg: "blue.200",
                          color: "blue.800",
                        }}
                        transition="0.3s"
                        color="gray.800"
                        px={2}
                        py={1}
                        borderRadius={4}
                        display="block"
                        cursor="pointer"
                      >
                        Logout
                      </Text>
                    </ListItem>
                  </Stack>
                </List>
              </Box>
            </Box>
          ) : (
            <HStack display={{ base: "none", lg: "block" }} spacing={10}>
              <ChakraLink as={Link} href="/about">
                <Text
                  as="a"
                  fontWeight="bold"
                  cursor="pointer"
                  color="gray.500"
                  borderRadius="5px"
                  transition="all 0.5s"
                  _hover={{
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
                  borderRadius="5px"
                  transition="all 0.5s"
                  _hover={{
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
          )}
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
