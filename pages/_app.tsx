import { AppProps } from "next/app";
import { ApolloClient, InMemoryCache, ApolloProvider } from "@apollo/client";
import { Provider } from "next-auth/client";
import { ChakraProvider, extendTheme } from "@chakra-ui/react";

const client = new ApolloClient({
  uri: process.env.NEXT_PUBLIC_GRAPHQL_ENDPOINT,
  cache: new InMemoryCache(),
});

const theme = extendTheme({
  styles: {
    global: {
      body: {
        fontFamily: "Inter, sans-serif",
      },
    },
  },
});

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <ChakraProvider theme={theme}>
      <ApolloProvider client={client}>
        <Provider session={pageProps.session}>
          <Component {...pageProps} />
        </Provider>
      </ApolloProvider>
    </ChakraProvider>
  );
}

export default MyApp;
