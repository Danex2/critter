import { objectType } from "nexus";

export const Image = objectType({
  name: "Image",
  definition(t) {
    t.model.id();
    t.model.url();
    t.model.Pet();
  },
});
