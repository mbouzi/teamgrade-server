import { extendType, objectType, nonNull, stringArg, intArg } from "nexus";
import { NexusGenObjects } from "../../nexus-typegen"; 

export const Location = objectType({
    name: "Location",
    definition(t) {
        t.nonNull.int("id"); 
        t.nonNull.int("city"); 
        t.nonNull.string("country");
        t.nonNull.list.nonNull.field("teams", {
            type: "Team",
            resolve(parent, args, context) {
                return context.prisma.location
                    .findUnique({where: {id: parent.id}})
                    .teams();
            }
        });
        t.nonNull.list.nonNull.field("users", {
            type: "User",
            resolve(parent, args, context) {
                return context.prisma.location
                    .findUnique({where: {id: parent.id}})
                    .users();
            }
        });
        t.nonNull.list.nonNull.field("players", {
            type: "Player",
            resolve(parent, args, context) {
                return context.prisma.location
                    .findUnique({where: {id: parent.id}})
                    .players();
            }
        });
        t.nonNull.list.nonNull.field("competitions", {
            type: "Competition",
            resolve(parent, args, context) {
                return context.prisma.location
                    .findUnique({where: {id: parent.id}})
                    .competitions();
            }
        });
    },
});
