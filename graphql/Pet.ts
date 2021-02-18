import { objectType, extendType } from "nexus";

export const Pet = objectType({
  name: "Pet",
  definition(t) {
    t.model.id();
    t.model.name();
    t.model.breed();
    t.model.description();
    t.model.address();
    t.model.location();
    t.model.phoneNumber();
    t.model.images();
    t.model.createdAt();
    t.model.updatedAt();
    t.model.user();
  },
});

export const PetQuery = extendType({
  type: "Query",
  definition(t) {
    t.crud.pet();
    t.crud.pets({
      ordering: true,
      pagination: true,
      filtering: true,
    });
  },
});

export const createPet = extendType({
  type: "Mutation",
  definition(t) {
    t.crud.createOnePet();
    t.crud.deleteOnePet();
    t.crud.updateOnePet();
  },
});
