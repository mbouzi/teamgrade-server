import { extendType, objectType, nonNull, stringArg, intArg } from "nexus";
import { NexusGenObjects } from "../../nexus-typegen"; 

export const Player = objectType({
    name: "Player",
    definition(t) {
        t.nonNull.int("id"); 
        t.nonNull.string("firstname"); 
        t.nonNull.string("lastname"); 
        t.int("age"); 
        t.field("team", {
            type: "Team",
            resolve(parent, args, context) {
                return context.prisma.player
                    .findUnique({where: {id: parent.id}})
                    .team();
            }
        });
        t.field("country", {
            type: "Location",
            resolve(parent, args, context) {
                return context.prisma.player
                    .findUnique({where: {id: parent.id}})
                    .country();
            }
        });
        t.field("ratings", {
            type: "Rating",
            resolve(parent, args, context) {
                return context.prisma.player
                    .findUnique({where: {id: parent.id}})
                    .ratings();
            }
        });
        t.field("matches", {
            type: "Match",
            resolve(parent, args, context) {
                return context.prisma.player
                    .findUnique({where: {id: parent.id}})
                    .matches();
            }
        });
        t.field("performances", {
            type: "Performance",
            resolve(parent, args, context) {
                return context.prisma.player
                    .findUnique({where: {id: parent.id}})
                    .performances();
            }
        })
    },
});
