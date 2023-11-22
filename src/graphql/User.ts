import { objectType } from "nexus";

export const User = objectType({
    name: "User",
    definition(t) {
        t.nonNull.int("id");
        t.nonNull.string("username");
        t.nonNull.string("displayname");
        t.nonNull.string("email");
        t.field("location", {
            type: "Location",
            resolve(parent, args, context) {
                return context.prisma.user
                    .findUnique({where: {id: parent.id}})
                    .location();
            }
        });
        t.field("communities", {
            type: "Community",
            resolve(parent, args, context) {
                return context.prisma.user
                    .findUnique({where: {id: parent.id}})
                    .communities();
            }
        });
        t.field("ratings", {
            type: "Rating",
            resolve(parent, args, context) {
                return context.prisma.user
                    .findUnique({where: {id: parent.id}})
                    .ratings();
            }
        });
        t.field("moderatedCommunities", {
            type: "Community",
            resolve(parent, args, context) {
                return context.prisma.user
                    .findUnique({where: {id: parent.id}})
                    .moderatedCommunities();
            }
        });
        t.field("createdCommunities", {
            type: "Community",
            resolve(parent, args, context) {
                return context.prisma.user
                    .findUnique({where: {id: parent.id}})
                    .createdCommunities();
            }
        });
        t.field("matchesRated", {
            type: "Match",
            resolve(parent, args, context) {
                return context.prisma.user
                    .findUnique({where: {id: parent.id}})
                    .matchesRated();
            }
        });
    },
});