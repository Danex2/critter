import { makeSchema } from "nexus"
import { join } from "path"
import * as types from "../graphql/index"


export const schema = makeSchema({
    types,
    outputs: {
        typegen: join(process.cwd(), "src", "generated", "nexus.ts"),
        schema: join(process.cwd(), "schema.graphql")
    }
})