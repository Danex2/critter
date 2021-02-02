import { AppProps } from "next/app"
import { ChakraProvider } from "@chakra-ui/react"
import { ApolloClient, InMemoryCache, ApolloProvider } from "@apollo/client"

const client = new ApolloClient({
    uri: process.env.NEXT_PUBLIC_GRAPHQL_ENDPOINT,
    cache: new InMemoryCache()
})

function MyApp({ Component, pageProps }: AppProps) {
    return (
        <ApolloProvider client={client}>
            <ChakraProvider>
                <Component {...pageProps} />
            </ChakraProvider>
        </ApolloProvider>
    )
}

export default MyApp