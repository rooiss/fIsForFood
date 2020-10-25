import {Express} from 'express'
import { ApolloServer } from 'apollo-server-express';
import { importSchema } from 'graphql-import'
import { resolvers } from '../graphql/resolvers'

const typeDefs = importSchema('src/schema.graphql')

export function setupGraphql(app: Express) {
    const apolloServer = new ApolloServer({
        typeDefs,
        resolvers,
    })
    apolloServer.applyMiddleware({ app })
}