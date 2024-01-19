import { extendType, objectType, nonNull, stringArg, intArg } from "nexus";
import { NexusGenObjects } from "../../nexus-typegen"; 

export const Performance = objectType({
    name: "Performance",
    definition(t) {
        t.nonNull.int("id"); 
        t.nonNull.dateTime("date");
        t.field("player", {
            type: "Player",
            resolve(parent, args, context) {
                return context.prisma.performance
                    .findUnique({where: {id: parent.id}})
                    .player();
            }
        })
        t.nonNull.list.nonNull.field("ratings", {
            type: "Rating",
            resolve(parent, args, context) {
                return context.prisma.rating
                    .findMany({where: {performanceId: parent.id}})
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
