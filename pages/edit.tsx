import Layout from "@/components/Layout";
import { useMutation, useQuery } from "@apollo/client";
import {
  AlertDialog,
  AlertDialogBody,
  AlertDialogContent,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogOverlay,
  Box,
  Button,
  Divider,
  FormControl,
  FormErrorMessage,
  FormHelperText,
  FormLabel,
  Grid,
  Input,
  Text,
  Textarea,
  useToast,
} from "@chakra-ui/react";
import { useRouter } from "next/router";
import SearchBox from "@nulfrost/react-mapbox-search";
import { getSession, useSession } from "next-auth/client";
import { UpdateOnePet, UpdateOnePetVariables } from "@/apollo/UpdateOnePet";
import { DeleteOnePet, DeleteOnePetVariables } from "@/apollo/DeleteOnePet";
import { useForm } from "react-hook-form";
import { useRef, useState } from "react";
import { UPDATE_PET, DELETE_PET } from "apollo/Mutations";
import { PrismaClient } from "@prisma/client";

// Add text showing how many images were selected for upload

export default function Edit({ petData }) {
  const router = useRouter();
  const pet = JSON.parse(petData);

  const { register, handleSubmit, errors, trigger } = useForm({
    defaultValues: {
      phoneNumber: pet.phoneNumber,
      petName: pet.name,
      breed: pet.breed,
      description: pet.description,
    },
  });
  const toast = useToast();
  const [location, setLocation] = useState<{
    address: string;
    coords: [number, number];
  }>({ address: "Toronto, Ontario, Canada", coords: [-79.3849, 43.6529] });

  const [updateOnePet] = useMutation<UpdateOnePet, UpdateOnePetVariables>(
    UPDATE_PET
  );

  const [deleteOnePet] = useMutation<DeleteOnePet, DeleteOnePetVariables>(
    DELETE_PET
  );

  const [isDialogOpen, setIsDialogOpen] = useState(false);
  const onClose = () => setIsDialogOpen(false);
  const cancelRef = useRef();

  return (
    <Layout title="Edit">
      <Box maxW="1000px" mx="auto" mt={104} pb={104} px={{ base: 5, lg: 0 }}>
        {!pet ? (
          <Text as="h1" textAlign="center">
            You do not have any active posts.
          </Text>
        ) : (
          <>
            {" "}
            <Text as="h1" fontSize="3xl" fontWeight="bold" marginBottom="24px">
              Edit listing
            </Text>
            <Divider marginBottom="16px" />
            <Box marginBottom="24px">
              <Text as="h2" fontSize="2xl" marginBottom="8px">
                Pet Info
              </Text>
              <Text fontSize="sm" color="gray.500">
                Provide as much info as you can, small details may help more
                than you think.
              </Text>
            </Box>
            <form
              onSubmit={handleSubmit((data) => {
                const {
                  petName,
                  breed,

                  phoneNumber,
                  description,
                } = data;

                updateOnePet({
                  variables: {
                    name: petName,
                    breed,
                    description,
                    phoneNumber,
                    location: location.coords,
                    address: location.address,
                    petId: pet.id,
                  },
                })
                  .then(() => {
                    toast({
                      title: "Pet info updated successfully!",
                      description: "Your changes were saved.",
                      status: "success",
                      duration: 10000,
                      isClosable: true,
                      position: "top",
                    });
                  })
                  .catch(() => {
                    toast({
                      title: "There was an error updating your post",
                      description:
                        "There was an error updating your post, try again in a few minutes. If this error keeps happening please contact us on twitter.",
                      status: "error",
                      duration: 10000,
                      isClosable: true,
                      position: "top",
                    });
                  });
              })}
            >
              <Grid
                templateColumns={{ base: "1fr", lg: "1fr 1fr" }}
                gap={3}
                mb={8}
              >
                <FormControl id="name" isRequired>
                  <FormLabel>Name</FormLabel>
                  <Input
                    type="text"
                    ref={register({ maxLength: 20 })}
                    name="petName"
                  />
                  <FormHelperText>The name of your pet</FormHelperText>
                </FormControl>
                <FormControl id="breed" isRequired>
                  <FormLabel>Breed</FormLabel>
                  <Input
                    type="text"
                    ref={register({ maxLength: 30 })}
                    name="breed"
                  />
                </FormControl>
                <FormControl id="images" mt={3}>
                  <FormLabel
                    bg="blue.100"
                    w="max-content"
                    px={10}
                    py={5}
                    borderRadius={5}
                    color="blue.700"
                    fontWeight="bold"
                  >
                    Upload Images
                  </FormLabel>
                  <Input
                    type="file"
                    multiple
                    width="0.1px"
                    height="0.1px"
                    opacity={0}
                    overflow="hidden"
                    position="absolute"
                    zIndex="-1"
                    ref={register}
                    name="images"
                  />
                </FormControl>
                <FormControl id="lastKnownLocation" isRequired>
                  <FormLabel>Last known location</FormLabel>
                  <SearchBox
                    token={process.env.NEXT_PUBLIC_MAPBOX_TOKEN}
                    callback={({ location }) => {
                      setLocation({
                        address: location.place_name,
                        coords: [location.center[0], location.center[1]],
                      });
                    }}
                    query="Toronto, Ontario, Canada"
                    country="CA"
                    selectColor="#1A365D"
                  />

                  <FormHelperText>
                    Providing an address of last known location helps narrow
                    down the search area
                  </FormHelperText>
                </FormControl>
              </Grid>
              <FormControl id="description" marginBottom="16px">
                <FormLabel>Description</FormLabel>
                <Textarea
                  placeholder="Be as detailed as you can, last area seen, date / time etc."
                  resize="none"
                  rows={10}
                  ref={register({ maxLength: 500 })}
                  name="description"
                />
              </FormControl>
              <Divider marginBottom="16px" />
              <Box marginBottom="24px">
                <Text as="h2" fontSize="2xl" marginBottom="8px">
                  Contact Info
                </Text>
                <Text fontSize="sm" color="gray.500">
                  Your phone number is visible to anyone that views your post,
                  make sure you’re okay with having it public.
                </Text>
              </Box>
              <FormControl
                id="name"
                isRequired
                maxW={{ base: "100%", lg: "40%" }}
                mb={24}
              >
                <FormLabel>Phone number</FormLabel>
                <Input
                  type="tel"
                  ref={register({
                    pattern: {
                      value: /[0-9]{3}-[0-9]{3}-[0-9]{4}/i,
                      message: "Expected phone number format (888-888-8888)",
                    },
                  })}
                  onChange={() => trigger("phoneNumber")}
                  name="phoneNumber"
                />
                <FormErrorMessage>
                  {errors.phoneNumber?.message}
                </FormErrorMessage>
              </FormControl>
              <Box display="flex" justifyContent="flex-end">
                <Button
                  variant="ghost"
                  mr={3}
                  color="gray.500"
                  _hover={{
                    color: "red.500",
                  }}
                  onClick={() => setIsDialogOpen(true)}
                >
                  Delete
                </Button>
                <AlertDialog
                  isOpen={isDialogOpen}
                  leastDestructiveRef={cancelRef}
                  onClose={onClose}
                >
                  <AlertDialogOverlay>
                    <AlertDialogContent>
                      <AlertDialogHeader fontSize="lg" fontWeight="bold">
                        Delete Post
                      </AlertDialogHeader>

                      <AlertDialogBody>
                        Are you sure you want to delete your post? This action
                        is irreversible.
                      </AlertDialogBody>

                      <AlertDialogFooter>
                        <Button ref={cancelRef} onClick={onClose}>
                          Cancel
                        </Button>
                        <Button
                          colorScheme="red"
                          onClick={() => {
                            deleteOnePet({
                              variables: { petId: pet?.id },
                            }).then(() => router.push("/"));
                          }}
                          ml={3}
                        >
                          Delete
                        </Button>
                      </AlertDialogFooter>
                    </AlertDialogContent>
                  </AlertDialogOverlay>
                </AlertDialog>

                <Button
                  bg="blue.900"
                  color="white"
                  _hover={{
                    bg: "blue.700",
                  }}
                  type="submit"
                >
                  Save Changes
                </Button>
              </Box>
            </form>
          </>
        )}
      </Box>
    </Layout>
  );
}

export async function getServerSideProps(context) {
  const session = await getSession(context);

  if (!session) {
    return {
      redirect: {
        destination: "/",
        permanent: false,
      },
    };
  }

  const prisma = new PrismaClient();

  const petData = await prisma.user
    .findFirst({
      where: {
        id: (session?.user as any)?.id,
      },
    })
    .pet();

  return {
    props: {
      petData: JSON.stringify(petData),
    },
  };
}
