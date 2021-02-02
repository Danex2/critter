import { objectType, extendType } from "nexus"


export const Person = objectType({
    name: "Person",
    definition(t) {
        t.string('name')
        t.int('age')
        t.string('job')
    }
})

export const Query = extendType({
    type: 'Query',
    definition(t) {
        t.list.field('people', {
            type: "Person",
            resolve: (root, args, ctx) => {

                return [{ name: "Dane", age: 26, job: "Software Engineer" }]
            }
        })
    }
})