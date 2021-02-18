import {
  Box,
  Button,
  FormControl,
  FormHelperText,
  Input,
  Stack,
} from "@chakra-ui/react";
import PetItem from "./PetItem";

export default function PetList() {
  const pets = Array(5).fill({
    name: "Roxy",
    city: "Toronto",
    image:
      "https://post.medicalnewstoday.com/wp-content/uploads/sites/3/2020/02/322868_1100-1100x628.jpg",
    description:
      "We lost her around 9PM Saturday, please do not chase if found.",
    date: "8 Days ago",
  });

  return (
    <Box maxW="1440px" mx="auto" mt={104} pb={104} px={{ base: 5, lg: 0 }}>
      <form>
        <Stack
          mb="24px"
          direction={{ base: "column", lg: "row" }}
          maxW="1000px"
          mx="auto"
          spacing={{ base: 10, lg: 5 }}
        >
          <FormControl id="petName">
            <Input type="text" placeholder="Pet name" autoComplete="off" />
          </FormControl>
          <FormControl id="location">
            <Input type="text" placeholder="Richmond Hill" autoComplete="off" />
            <FormHelperText>
              Search by the address of the last known location
            </FormHelperText>
          </FormControl>
          <Button
            px={30}
            py={2}
            bg="blue.900"
            color="white"
            _hover={{
              bg: "blue.700",
            }}
          >
            Search
          </Button>
        </Stack>
      </form>
      <Stack align="center" spacing={15}>
        {pets.map((pet, index) => (
          <PetItem pet={pet} key={index} />
        ))}
      </Stack>
    </Box>
  );
}
