import { extendType, objectType } from "nexus";

export const User = objectType({
  name: "User",
  definition(t) {
    t.model.id();
    t.model.name();
    t.model.email();
    t.model.pet();
  },
});


export const UserQuery = extendType({
  type: "Query",
  definition(t) {
    t.crud.user()
  },
})