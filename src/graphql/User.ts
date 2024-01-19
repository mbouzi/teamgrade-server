import { objectType } from "nexus";

export const User = objectType({
    name: "User",
    definition(t) {
        t.nonNull.int("id");
        t.nonNull.string("username");
        t.string("displayname");
        t.nonNull.string("email");
        t.string("profileImg");
        t.field("location", {
            type: "Location",
            resolve(parent, args, context) {
                return context.prisma.user
                    .findUnique({where: {id: parent.id}}).location();
            }
        });
        t.field("communities", {
            type: "Community",
            resolve(parent, args, context) {
                return context.prisma.community
                    .findFirst({where: {createdBy: {id: parent.id}}});
            }
        });
        t.nonNull.list.nonNull.field("ratings", {
            type: "Rating",
            resolve(parent, args, context) {
                return context.prisma.rating
                    .findMany({where: {userId: parent.id} })
            }
        });
        t.field("moderatedCommunities", {
            type: "Community",
            resolve(parent, args, context) {
                return context.prisma.community
                    .findFirst({where: {moderators: {some: {id: parent.id}}}})
            }
        });
        t.field("createdCommunities", {
            type: "Community",
            resolve(parent, args, context) {
                return context.prisma.community
                    .findFirst({where: {createdById: parent.id}});
            }
        });
        t.field("matchesRated", {
            type: "Match",
            resolve(parent, args, context) {
                return context.prisma.match
                    .findFirst({where: {ratedBy: {some: {id: parent.id}}}})
            }
        });
    },
});