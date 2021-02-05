import React, { FC } from 'react'
import { render } from '@testing-library/react'
import { ChakraProvider } from "@chakra-ui/react"
import { ApolloClient, InMemoryCache, ApolloProvider } from "@apollo/client"


const client = new ApolloClient({
    uri: process.env.NEXT_PUBLIC_GRAPHQL_ENDPOINT,
    cache: new InMemoryCache()
})

const AllTheProviders: FC = ({ children }) => {
    return (
        <ApolloProvider client={client}>
            <ChakraProvider>
                {children}
            </ChakraProvider>
        </ApolloProvider>
    )
}

const customRender = (
    ui: React.ReactElement,
    options?
) => render(ui, { wrapper: AllTheProviders, ...options })

export * from '@testing-library/react'

export { customRender as render }
