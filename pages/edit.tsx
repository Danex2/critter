import Layout from "@/components/Layout";
import {
  Box,
  Button,
  Divider,
  FormControl,
  FormHelperText,
  FormLabel,
  Grid,
  Input,
  Select,
  Text,
  Textarea,
} from "@chakra-ui/react";
import { useRouter } from "next/router";

// Add text showing how many images were selected for upload

export default function Edit() {
  const router = useRouter();

  return (
    <Layout title="Create">
      <Box maxW="1000px" mx="auto" mt={104} pb={104} px={{ base: 5, lg: 0 }}>
        <Text as="h1" fontSize="3xl" fontWeight="bold" marginBottom="24px">
          Edit listing
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
        <form>
          <Grid templateColumns={{ base: "1fr", lg: "1fr 1fr" }} gap={3} mb={8}>
            <FormControl id="name" isRequired>
              <FormLabel>Name</FormLabel>
              <Input type="text" variant="flushed" />
              <FormHelperText>The name of your pet</FormHelperText>
            </FormControl>
            <FormControl id="breed" isRequired>
              <FormLabel>Breed</FormLabel>
              <Input type="text" variant="flushed" />
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
              />
            </FormControl>
            <FormControl id="city">
              <FormLabel>City</FormLabel>
              <Select placeholder="Select the city you're in" variant="flushed">
                <option value="option1">North York</option>
                <option value="option2">Etobicoke</option>
                <option value="option3">Scarborough</option>
              </Select>
            </FormControl>
          </Grid>
          <FormControl id="description" marginBottom="16px">
            <FormLabel>Description</FormLabel>
            <Textarea
              placeholder="Be as detailed as you can, last area seen, date / time etc."
              resize="none"
              rows={10}
              variant="flushed"
            />
          </FormControl>
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
          >
            <FormLabel>Phone number</FormLabel>
            <Input type="tel" variant="flushed" />
          </FormControl>
          <Box display="flex" justifyContent="flex-end">
            <Button
              variant="ghost"
              mr={3}
              color="blue.700"
              _hover={{
                bg: "blue.300",
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
            >
              Save Changes
            </Button>
          </Box>
        </form>
      </Box>
    </Layout>
  );
}
