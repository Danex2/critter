import Layout from "@/components/Layout";
import {
  Accordion,
  AccordionButton,
  AccordionIcon,
  AccordionItem,
  AccordionPanel,
  Box,
  Text,
} from "@chakra-ui/react";

export default function About() {
  return (
    <Layout title="About">
      <Box maxW={700} mx="auto" mt={104}>
        <Text as="h1" fontWeight="bold" fontSize="4xl" mb={12} color="blue.700">
          F.A.Q
        </Text>
        <Accordion>
          <AccordionItem>
            <h2>
              <AccordionButton>
                <Box
                  flex="1"
                  textAlign="left"
                  fontSize="lg"
                  fontWeight="bold"
                  color="blue.700"
                >
                  What is petfinder?
                </Box>
                <AccordionIcon />
              </AccordionButton>
            </h2>
            <AccordionPanel pb={4} color="gray.500">
              Petfinder is a website I made to help pet owners get reunited with
              their pets. I always see pictures of lost pet ads in my area on
              bus sheds and telephone poles but I felt that they didn't cast a
              wide enough net. Taking advantage of the internet and my web
              development skills I wanted to make the process easier for people
              looking for their pets or people that found a pet and are looking
              for the owner.
            </AccordionPanel>
          </AccordionItem>
        </Accordion>
      </Box>
    </Layout>
  );
}
