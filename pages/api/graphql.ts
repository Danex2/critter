import { ApolloServer } from "apollo-server-micro";
import { schema } from "../../src/schema";
import { context } from "../../src/context";
import {applyMiddleware} from "graphql-middleware"
import { rule } from "graphql-shield";


const isAuthenticated = rule({cache: "contextual"})(
  async (parent, args, ctx, info) => {
    return ctx.session.user.id !== null
  }
)



const permissions = {
  Mutation: {
    createOnePet: isAuthenticated
  }
}

// const withMiddleware = applyMiddleware(schema, isAuthenticated)

const server = new ApolloServer({ schema, context,debug: true,  });

const handler = server.createHandler({ path: "/api/graphql" });

export const config = {
  api: {
    bodyParser: false,
  },
};

export default handler;
