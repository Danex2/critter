import { Box, Button, Input, Select, Stack } from "@chakra-ui/react";
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
      <Stack
        mb="24px"
        direction={{ base: "column", lg: "row" }}
        maxW="1000px"
        mx="auto"
        spacing={{ base: 10, lg: 5 }}
      >
        <Input type="text" placeholder="Name" />
        <Select placeholder="City">
          <option value="option1">North York</option>
          <option value="option2">Brampton</option>
          <option value="option3">Richmond Hill</option>
        </Select>
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
      <Stack align="center" spacing={15}>
        {pets.map((pet, index) => (
          <PetItem pet={pet} key={index} />
        ))}
      </Stack>
    </Box>
  );
}
