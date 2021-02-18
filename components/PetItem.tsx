import { Box, Image, Tag, TagLabel, TagLeftIcon, Text } from "@chakra-ui/react";
import { RiHome3Line } from "react-icons/ri";

type PetItemProps = {
  image: string;
  name: string;
  date: string;
  city: string;
  description: string;
};

type Pet = {
  pet: PetItemProps;
};

export default function PetItem({ pet }: Pet) {
  return (
    <Box
      display={{ base: "block", lg: "flex" }}
      maxW="1000px"
      bg="gray.100"
      borderRadius="5px"
      overflow="hidden"
      boxShadow="md"
    >
      <Box height="auto">
        <Image src={pet.image} alt="image of dog" />
      </Box>
      <Box padding="16px" display="flex" flexDirection="column">
        <Box
          display="flex"
          alignItems="center"
          justifyContent="space-between"
          mb="24px"
        >
          <Text as="h2" fontSize="24px" fontWeight="bold" color="blue.700">
            Roxy
          </Text>
          <Text as="small" opacity={0.5}>
            8 days ago
          </Text>
        </Box>
        <Text fontSize="12px" noOfLines={4} mb={{ base: 8 }} color="gray.500">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Facilis harum
          soluta maxime quidem dolorem ipsum odit vel expedita rem! Tempora
          voluptas expedita soluta doloribus laborum. Accusamus eum ducimus
          explicabo voluptas?
        </Text>
        <Text
          as="a"
          cursor="pointer"
          mt={{ base: "", md: "auto" }}
          ml={{ base: "", md: "auto" }}
          color="gray.400"
          fontWeight="bold"
          textTransform="uppercase"
          textAlign="center"
          fontSize="xs"
          transition="all 0.5s"
          _hover={{
            color: "blue.600",
          }}
        >
          View more
        </Text>
      </Box>
    </Box>
  );
}
