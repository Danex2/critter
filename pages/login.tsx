import Layout from "@/components/Layout";
import { Box, Button, Stack, Text } from "@chakra-ui/react";
import { DiGithubAlt } from "react-icons/di";
import { AiOutlineGoogle } from "react-icons/ai";
import { ImFacebook } from "react-icons/im";
import { signIn, useSession } from "next-auth/client";

export default function Login() {
  const [session] = useSession();

  console.log(session);
  return (
    <Layout title="Login">
      <Box
        display="flex"
        justifyContent="center"
        alignItems="center"
        mt={104}
        flexDirection="column"
      >
        <Text
          as="h1"
          fontWeight="bold"
          fontSize="4xl"
          color="blue.700"
          textTransform="uppercase"
        >
          Pet
          <Text as="span" color="blue.400">
            Finder
          </Text>
        </Text>
        <Stack mt={8} minW={400}>
          <Button
            bg="black"
            color="white"
            leftIcon={<DiGithubAlt style={{ fontSize: "30px" }} />}
            _hover={{
              bg: "gray.800",
            }}
            textAlign="left"
            onClick={() =>
              signIn("github", {
                callbackUrl: "http://localhost:3000/",
              })
            }
          >
            Login with Github
          </Button>
          <Button
            bg="red.600"
            color="white"
            disabled
            _hover={{
              bg: "red.700",
            }}
            leftIcon={<AiOutlineGoogle style={{ fontSize: "30px" }} />}
          >
            Login with Google
          </Button>
          <Button
            colorScheme="facebook"
            disabled
            leftIcon={<ImFacebook style={{ fontSize: "20px" }} />}
          >
            Login with Facebook
          </Button>
        </Stack>
      </Box>
    </Layout>
  );
}
