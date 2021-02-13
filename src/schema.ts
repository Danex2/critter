import { makeSchema } from "nexus";
import { nexusPrisma } from "nexus-plugin-prisma";
import { join } from "path";
import * as types from "../graphql/index";

export const schema = makeSchema({
  types,
  plugins: [nexusPrisma({ experimentalCRUD: true })],
  outputs: {
    typegen: join(process.cwd(), "src", "generated", "nexus.ts"),
    schema: join(process.cwd(), "schema.graphql"),
  },
  contextType: {
    module: "@prisma/client",
    alias: "ctx",
    export: "Context",
  },
});
