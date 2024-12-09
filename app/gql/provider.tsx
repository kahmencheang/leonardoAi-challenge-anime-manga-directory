'use client'
import { ApolloClient, ApolloProvider, InMemoryCache } from '@apollo/client'

export const Provider = ({ children }: { children: React.ReactNode }) => {
    const client = new ApolloClient({
        uri: 'https://graphql.anilist.co',
        cache: new InMemoryCache()
    })
    return <ApolloProvider client={client}>{children}</ApolloProvider>
}
