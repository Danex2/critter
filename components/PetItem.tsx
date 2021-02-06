import { Box, Image, AspectRatio } from "@chakra-ui/react";

export default function PetItem({ pet }) {
  return (
    <Box bg="#C4C4C4" maxW="6xl">
      <AspectRatio maxW="400px" ratio={4 / 3}>
        <Image src={pet.image} alt="image of dog" />
      </AspectRatio>
    </Box>
  );
}
