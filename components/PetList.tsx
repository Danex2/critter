import { Box, Stack } from "@chakra-ui/react";
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
    <Box maxW="1440px" mx="auto" mt={104}>
      <Stack>
        {pets.map((pet, index) => (
          <PetItem pet={pet} key={index} />
        ))}
      </Stack>
    </Box>
  );
}
