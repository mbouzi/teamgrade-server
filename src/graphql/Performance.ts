import { extendType, objectType, nonNull, stringArg, intArg } from "nexus";
import { NexusGenObjects } from "../../nexus-typegen"; 

export const Performance = objectType({
    name: "Performance",
    definition(t) {
        t.nonNull.int("id"); 
        t.field("teams", {
            type: "Team",
            resolve(parent, args, context) {
                return context.prisma.location
                    .findUnique({where: {id: parent.id}})
                    .teams();
            }
        });
        t.field("player", {
            type: "Player",
            resolve(parent, args, context) {
                return context.prisma.performance
                    .findUnique({where: {id: parent.id}})
                    .player();
            }
        });
        t.nonNull.list.nonNull.field("ratings", {
            type: "Rating",
            resolve(parent, args, context) {
                return context.prisma.performance
                    .findUnique({where: {id: parent.id}})
                    .ratings();
            }
        })
        t.field("match", {
            type: "Match",
            resolve(parent, args, context) {
                return context.prisma.performance
                    .findUnique({where: {id: parent.id}})
                    .match();
            }
        })
    },
});
