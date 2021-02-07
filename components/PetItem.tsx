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
        <Box display="flex" alignItems="center" justifyContent="space-between">
          <Text
            as="h2"
            fontSize="24px"
            fontWeight="bold"
            mb="4px"
            color="blue.700"
          >
            Roxy
          </Text>
          <Text as="small" opacity={0.5}>
            8 days ago
          </Text>
        </Box>
        <Tag
          mb="16px"
          opacity={0.5}
          colorScheme="messenger"
          width="max-content"
        >
          <TagLeftIcon as={RiHome3Line} boxSize="16px" />
          <TagLabel>Toronto</TagLabel>
        </Tag>
        <Text fontSize="12px" noOfLines={4} mb={{ base: 8 }}>
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
          px={30}
          py={2}
          color="blue.600"
          borderRadius="5px"
          fontWeight="bold"
          textTransform="uppercase"
          textAlign="center"
          fontSize="xs"
          transition="all 0.5s"
          _hover={{
            bg: "blue.200",
          }}
        >
          View more
        </Text>
      </Box>
    </Box>
  );
}
