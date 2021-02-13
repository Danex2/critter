import Layout from "@/components/Layout";
import { useMutation, gql } from "@apollo/client";
import {
  Box,
  Button,
  Divider,
  FormControl,
  FormErrorMessage,
  FormHelperText,
  FormLabel,
  Grid,
  Input,
  Select,
  Text,
  Textarea,
  useToast,
} from "@chakra-ui/react";
import { useSession } from "next-auth/client";
import { useRouter } from "next/router";
import { useForm } from "react-hook-form";

// Add text showing how many images were selected for upload

const CREATE_PET = gql`
  mutation CreatePet(
    $name: String!
    $description: String!
    $breed: String!
    $city: String!
    $phoneNumber: String!
    $id: Int!
  ) {
    createOnePet(
      data: {
        name: $name
        description: $description
        breed: $breed
        city: $city
        phoneNumber: $phoneNumber
        user: { connect: { id: $id } }
      }
    ) {
      id
    }
  }
`;

export default function Create() {
  const router = useRouter();
  const { register, handleSubmit, errors, watch } = useForm();
  const toast = useToast();
  const [session] = useSession();
  const [createPet] = useMutation(CREATE_PET);

  console.log(errors.phoneNumber.message);

  return (
    <Layout title="Create">
      <Box maxW="1000px" mx="auto" mt={104} pb={104} px={{ base: 5, lg: 0 }}>
        <Text as="h1" fontSize="3xl" fontWeight="bold" marginBottom="24px">
          Create new listing
        </Text>
        <Divider marginBottom="16px" />
        <Box marginBottom="24px">
          <Text as="h2" fontSize="2xl" marginBottom="8px">
            Pet Info
          </Text>
          <Text fontSize="sm" color="gray.500">
            Provide as much info as you can, small details may help more than
            you think.
          </Text>
        </Box>
        <form
          onSubmit={handleSubmit((data) => {
            const {
              petName,
              breed,
              images,
              phoneNumber,
              city,
              description,
            } = data;

            createPet({
              variables: {
                name: petName,
                description,
                breed,
                city,
                phoneNumber,
                id: session.user.id,
              },
            })
              .then(() => {
                toast({
                  title: "Post created successfully",
                  description:
                    "Your post is now live, any changes can be made on the edit page",
                  status: "success",
                  duration: 10000,
                  isClosable: true,
                  position: "top",
                });
              })
              .catch(() => {
                toast({
                  title: "There was an error creating your post",
                  description:
                    "You're recieving this error likely because you already have an active post, feel free to edit it or delete it and make a new one",
                  status: "error",
                  duration: 10000,
                  isClosable: true,
                  position: "top",
                });
              });
          })}
        >
          <Grid templateColumns={{ base: "1fr", lg: "1fr 1fr" }} gap={3} mb={8}>
            <FormControl id="name" isRequired>
              <FormLabel>Name</FormLabel>
              <Input
                type="text"
                ref={register({ maxLength: 20 })}
                name="petName"
              />
              <FormHelperText>The name of your pet</FormHelperText>
            </FormControl>
            <FormControl id="breed">
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
            <FormControl id="city" isRequired>
              <FormLabel>City</FormLabel>
              <Select
                placeholder="Select the city you're in"
                ref={register}
                name="city"
              >
                <option value="North York">North York</option>
                <option value="Etobicoke">Etobicoke</option>
                <option value="Scarborough">Scarborough</option>
              </Select>
              <FormHelperText>
                Providing the city helps narrow down the search area
              </FormHelperText>
            </FormControl>
          </Grid>
          <FormControl id="description" marginBottom="16px" isRequired>
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
              Your phone number is visible to anyone that views your post, make
              sure you’re okay with having it public.
            </Text>
          </Box>
          <FormControl
            id="name"
            isRequired
            maxW={{ base: "100%", lg: "40%" }}
            mb={24}
            isInvalid={errors.phoneNumber}
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
              name="phoneNumber"
            />
            <FormErrorMessage>{errors.phoneNumber.message}</FormErrorMessage>
          </FormControl>
          <Box display="flex" justifyContent="flex-end">
            <Button
              variant="ghost"
              mr={3}
              color="gray.500"
              _hover={{
                color: "red.500",
              }}
              onClick={() => router.push("/")}
            >
              Cancel
            </Button>
            <Button
              bg="blue.900"
              color="white"
              _hover={{
                bg: "blue.700",
              }}
              type="submit"
            >
              Submit
            </Button>
          </Box>
        </form>
      </Box>
    </Layout>
  );
}
