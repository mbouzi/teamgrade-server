import { extendType, objectType, nonNull, stringArg, intArg } from "nexus";
import { NexusGenObjects } from "../../nexus-typegen"; 

export const Season = objectType({
    name: "Season",
    definition(t) {
        t.nonNull.int("id");
        t.nonNull.string("startYear");
        t.nonNull.string("endYear");
        t.nonNull.list.nonNull.field("communities", {
            type: "Community",
            resolve(parent, args, context) {
                return context.prisma.community
                .findMany({where: {seasons: {some: {id: parent.id}}}})
            }
        });
        t.nonNull.list.nonNull.field("teams", {
            type: "Team",
            resolve(parent, args, context) {
                return context.prisma.team
                .findMany({where: {seasons: {some: {id: parent.id}}}})
            }
        });
        t.nonNull.list.nonNull.field("ratings", {
            type: "Rating",
            resolve(parent, args, context) {
                return context.prisma.rating
                .findMany({where: {season: {id: parent.id}}})
            }
        });
        t.nonNull.list.nonNull.field("players", {
            type: "Player",
            resolve(parent, args, context) {
                return context.prisma.player
                .findMany({where: {seasons: {some: {id: parent.id}}}})
            }
        });
        t.nonNull.list.nonNull.field("performances", {
            type: "Performance",
            resolve(parent, args, context) {
                return context.prisma.performance
                .findMany({where: {season: {id: parent.id}}})
            }
        });
        t.nonNull.list.nonNull.field("matches", {
            type: "Match",
            resolve(parent, args, context) {
                return context.prisma.match
                .findMany({where: {season: {id: parent.id}}})
            }
        });
        t.nonNull.list.nonNull.field("competitions", {
            type: "Competition",
            resolve(parent, args, context) {
                return context.prisma.competition
                .findMany({where: {seasons: {some: {id: parent.id}}}})
            }
        });
        
    }
})