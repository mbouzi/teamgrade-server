import { extendType, objectType, nonNull, stringArg, intArg } from "nexus";
import { NexusGenObjects } from "../../nexus-typegen"; 

export const Season = objectType({
    name: "Season",
    definition(t) {
        t.nonNull.int("id");
        t.nonNull.string("startYear");
        t.nonNull.string("endYear");
        t.field("communities", {
            type: "Community",
            resolve(parent, args, context) {
                return context.prisma.season
                    .findUnique({where: {id: parent.id}})
                    .communities();
            }
        });
        t.field("teams", {
            type: "Team",
            resolve(parent, args, context) {
                return context.prisma.season
                    .findUnique({where: {id: parent.id}})
                    .teams();
            }
        });
        t.field("ratings", {
            type: "Rating",
            resolve(parent, args, context) {
                return context.prisma.season
                    .findUnique({where: {id: parent.id}})
                    .ratings();
            }
        });
        t.field("players", {
            type: "Player",
            resolve(parent, args, context) {
                return context.prisma.season
                    .findUnique({where: {id: parent.id}})
                    .players();
            }
        });
        t.field("performances", {
            type: "Performance",
            resolve(parent, args, context) {
                return context.prisma.season
                    .findUnique({where: {id: parent.id}})
                    .performances();
            }
        });
        t.field("matches", {
            type: "Match",
            resolve(parent, args, context) {
                return context.prisma.season
                    .findUnique({where: {id: parent.id}})
                    .matches();
            }
        });
        t.field("competitions", {
            type: "Competition",
            resolve(parent, args, context) {
                return context.prisma.season
                    .findUnique({where: {id: parent.id}})
                    .competitions();
            }
        });
        
    }
})