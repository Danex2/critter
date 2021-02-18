import { extendType, objectType } from "nexus";

export const Cities = objectType({
  name: "Cities",
  definition(t) {
    t.model.id();
    t.model.name();
  },
});

export const CitiesQuery = extendType({
  type: "Query",
  definition(t) {
    t.crud.cities();
  },
});
